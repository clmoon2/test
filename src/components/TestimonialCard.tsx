"use client";

import React from 'react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export function TestimonialCard({ quote, author, role, initials }: TestimonialCardProps) {
  return (
    <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <p className="text-muted-foreground italic">&quot;{quote}&quot;</p>
      <div className="flex items-center gap-3 mt-4">
        <Avatar className="w-10 h-10">
          <AvatarFallback className="bg-primary/10 text-primary">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-sm">{author}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
    </Card>
  );
}

