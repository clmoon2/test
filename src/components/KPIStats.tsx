"use client";

import React from 'react';

export function KPIStats() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-4xl font-semibold mb-2">2.4M+</div>
          <div className="text-muted-foreground">Items catalogued</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-semibold mb-2">78%</div>
          <div className="text-muted-foreground">Average WUS score</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-semibold mb-2">$2.1M</div>
          <div className="text-muted-foreground">Saved from impulse buys</div>
        </div>
      </div>
    </section>
  );
}

