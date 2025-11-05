"use client";
import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import Image from "next/image";

type Draft = {
  title: string;
  category: "top" | "bottom" | "dress" | "outerwear" | "shoes" | "bag" | "accessory";
  subcategory: string;
  colors: string[];
  pattern: string | null;
  material_guess: string | null;
  brand_guess: string | null;
  warmth_score: number;
  notes: string[];
};

type Item = Draft & { imageUrl: string; id: string; createdAt: string };

type AnalyzeOk = { imageUrl: string; draft: Draft };
type AnalyzeErr = { error: string };
type AnalyzeResponse = AnalyzeOk | AnalyzeErr;

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [closet, setCloset] = useState<Item[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("closet");
    if (saved) setCloset(JSON.parse(saved) as Item[]);
  }, []);
  useEffect(() => {
    localStorage.setItem("closet", JSON.stringify(closet));
  }, [closet]);

  function onFileChange(e: ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.[0] ?? null);
  }

  async function analyze() {
    if (!file) return;
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/analyze", { method: "POST", body: fd });
      const data: AnalyzeResponse = await res.json();
      if (!res.ok) throw new Error(("error" in data && data.error) || "Analyze failed");
      setImageUrl((data as AnalyzeOk).imageUrl);
      setDraft((data as AnalyzeOk).draft);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      alert(`Analyze failed: ${msg}`);
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  function saveDraft() {
    if (!draft || !imageUrl) return;
    const item: Item = {
      ...draft,
      imageUrl,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setCloset([item, ...closet]);
    setDraft(null);
    setImageUrl(null);
    setFile(null);
  }

  const outfitSuggestion = useMemo(() => {
    const tops = closet.filter(c => c.category === "top");
    const bottoms = closet.filter(c => c.category === "bottom");
    const shoes = closet.filter(c => c.category === "shoes");
    if (!tops.length || !bottoms.length || !shoes.length) return null;
    return {
      top: tops[0],
      bottom: bottoms[0],
      shoe: shoes[0],
      because: ["Mild weather", "0.5mi walk", "Casual day"],
    };
  }, [closet]);

  return (
    <main className="mx-auto max-w-4xl p-6 text-slate-100">
      <h1 className="text-3xl font-semibold mb-4">Aiphrodite — instant closet demo</h1>

      {/* Upload */}
      <div className="rounded-2xl bg-slate-900 p-4 mb-6 border border-slate-700">
        <p className="mb-2 text-slate-300">Add an item (iPhone camera supported)</p>
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={onFileChange}
          className="mb-3"
        />
        <button
          onClick={analyze}
          disabled={!file || loading}
          className="rounded-xl bg-indigo-500 px-4 py-2 disabled:opacity-50"
        >
          {loading ? "Analyzing…" : "Analyze & Draft"}
        </button>

        {draft && imageUrl && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={imageUrl}
              alt="Draft clothing item"
              width={600}
              height={600}
              className="rounded-xl border border-slate-700 object-cover w-full h-auto"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Draft attributes</h3>
              <pre className="bg-slate-800 p-3 rounded-xl text-sm overflow-auto">
                {JSON.stringify(draft, null, 2)}
              </pre>
              <button onClick={saveDraft} className="rounded-xl bg-emerald-500 px-4 py-2">
                Save to Closet
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Outfit of the Day */}
      <div className="rounded-2xl bg-slate-900 p-4 mb-6 border border-slate-700">
        <h2 className="text-2xl mb-2">Outfit of the Day</h2>
        {!outfitSuggestion ? (
          <p className="text-slate-400">Add at least a top, a bottom, and shoes to see a suggestion.</p>
        ) : (
          <div>
            <div className="flex gap-3">
              {[outfitSuggestion.top, outfitSuggestion.bottom, outfitSuggestion.shoe].map(i => (
                <Image
                  key={i.id}
                  src={i.imageUrl}
                  alt={i.title || i.subcategory || i.category}
                  width={112}
                  height={112}
                  className="w-28 h-28 object-cover rounded-xl border border-slate-700"
                />
              ))}
            </div>
            <div className="mt-2 flex gap-2 flex-wrap">
              {outfitSuggestion.because.map(b => (
                <span
                  key={b}
                  className="px-2 py-1 text-xs rounded-full bg-indigo-500/15 border border-indigo-500/40"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Closet grid */}
      <div className="rounded-2xl bg-slate-900 p-4 border border-slate-700">
        <h2 className="text-2xl mb-3">Your Closet</h2>
        {!closet.length ? (
          <p className="text-slate-400">No items yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {closet.map(i => (
              <div key={i.id} className="rounded-xl overflow-hidden border border-slate-700">
                <Image
                  src={i.imageUrl}
                  alt={i.title || i.subcategory || i.category}
                  width={400}
                  height={400}
                  className="h-40 w-full object-cover"
                />
                <div className="p-2">
                  <p className="text-sm">{i.title || i.subcategory || i.category}</p>
                  <p className="text-xs text-slate-400">{i.brand_guess ?? "—"}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
