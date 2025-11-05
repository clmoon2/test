"use client";

import React from 'react';

interface BecauseChipProps {
  icon?: React.ReactNode;
  label: string;
  className?: string;
}

export function BecauseChip({ icon, label, className = "" }: BecauseChipProps) {
  return (
    <div 
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-card/80 backdrop-blur-sm border border-border rounded-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${className}`}
    >
      {icon}
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

