"use client";

import React from 'react';

interface PhoneMockupProps {
  currentOutfit: number;
  outfits: Array<{
    title: string;
    description: string;
    colors: string;
  }>;
  onOutfitChange?: (index: number) => void;
}

export function PhoneMockup({ currentOutfit, outfits }: PhoneMockupProps) {
  const current = outfits[currentOutfit] || outfits[0];
  
  return (
    <div className="relative mx-auto w-[280px] h-[580px]">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl">
        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          <div className="p-6 h-full flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-32 h-32 bg-primary/10 rounded-2xl"></div>
            <h3 className="text-lg font-semibold">{current.title}</h3>
            <p className="text-sm text-muted-foreground">{current.description}</p>
            <p className="text-xs text-muted-foreground">{current.colors}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

