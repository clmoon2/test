"use client";

import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

interface TripPackerProps {
  onBack: () => void;
}

export function TripPacker({ onBack }: TripPackerProps) {
  return (
    <div className="min-h-screen bg-background p-6">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Trip Packer</h1>
        <p className="text-muted-foreground">Feature coming soon...</p>
      </div>
    </div>
  );
}

