"use client";

import React from 'react';

export function InspirationGrid() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Style Inspiration</h2>
        <p className="text-muted-foreground">See how others are styling their closets</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square bg-muted/30 rounded-xl"></div>
        ))}
      </div>
    </section>
  );
}

