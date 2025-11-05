import { NextRequest } from "next/server";
import OpenAI from "openai";
import type {
  ChatCompletionMessageParam,
  ChatCompletionContentPart,
} from "openai/resources/chat/completions";

export const runtime = "nodejs"; // ensure node (buffer available)
export const dynamic = "force-dynamic"; // don't prerender

export async function POST(req: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return Response.json({ error: "missing OPENAI_API_KEY" }, { status: 500 });
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    if (!file) return Response.json({ error: "no file" }, { status: 400 });

    // guard against oversized uploads (base64 adds ~33%)
    if (file.size > 6_000_000) {
      // ~6mb
      return Response.json({ error: "image too large (>6mb)" }, { status: 413 });
    }

    // convert to base64 data url for the vision call
    const ab = await file.arrayBuffer();
    const base64 = Buffer.from(ab).toString("base64");
    const dataUrl = `data:${file.type};base64,${base64}`;

    const sys = `you are a fashion inventory assistant. return strict json:
{
  "title": string,
  "category": "top" | "bottom" | "dress" | "outerwear" | "shoes" | "bag" | "accessory",
  "subcategory": string,
  "colors": string[],
  "pattern": string | null,
  "material_guess": string | null,
  "brand_guess": string | null,
  "warmth_score": number,
  "notes": string[]
}`;

    const content: ChatCompletionContentPart[] = [
      { type: "text", text: "analyze this clothing item and fill the json fields." },
      { type: "image_url", image_url: { url: dataUrl } },
    ];

    const messages: ChatCompletionMessageParam[] = [
      { role: "system", content: sys },
      { role: "user", content },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages,
    });

    const raw = completion.choices[0].message?.content ?? "{}";
    const draft = JSON.parse(raw);
    return Response.json({ imageUrl: dataUrl, draft });
  } catch (err: unknown) {
    const message =
      err instanceof Error
        ? err.message
        : typeof err === "string"
        ? err
        : "unknown server error";

    console.error("analyze error:", message, err);
    return Response.json({ error: message }, { status: 500 });
  }
}

