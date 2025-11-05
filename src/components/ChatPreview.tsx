"use client";

import React from 'react';
import { Card } from './ui/card';

export function ChatPreview() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Ask anything about your style</h2>
          <p className="text-muted-foreground mb-6">
            Our AI assistant helps you make better wardrobe decisions
          </p>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs">AI</span>
              </div>
              <div className="flex-1 bg-muted/50 rounded-lg p-3">
                <p className="text-sm">How can I help you today?</p>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="flex-1 bg-primary/10 rounded-lg p-3 text-right">
                <p className="text-sm">What should I wear tomorrow?</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

