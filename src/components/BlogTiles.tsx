"use client";

import React from 'react';
import { Card } from './ui/card';

export function BlogTiles() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Latest from our blog</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-6">
            <div className="aspect-video bg-muted/30 rounded-lg mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Blog Post Title</h3>
            <p className="text-muted-foreground text-sm">Blog post description...</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

