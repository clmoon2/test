"use client";

import React from 'react';

export function PressStrip() {
  return (
    <div className="py-8 bg-muted/20 border-y border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-4">As featured in</p>
        <div className="flex items-center justify-center gap-8 flex-wrap opacity-60">
          <span className="text-sm font-medium">TechCrunch</span>
          <span className="text-sm font-medium">The Verge</span>
          <span className="text-sm font-medium">Vogue</span>
          <span className="text-sm font-medium">Fast Company</span>
        </div>
      </div>
    </div>
  );
}

