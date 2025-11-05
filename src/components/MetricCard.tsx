"use client";

import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  delta?: string;
  deltaType?: 'positive' | 'negative' | 'neutral';
  sparklineData?: number[];
  className?: string;
}

export function MetricCard({ 
  title, 
  value, 
  delta, 
  deltaType = 'neutral', 
  sparklineData,
  className = "" 
}: MetricCardProps) {
  const deltaColor = {
    positive: 'text-secondary',
    negative: 'text-destructive', 
    neutral: 'text-muted-foreground'
  }[deltaType];

  return (
    <div className={`bg-card border border-border rounded-2xl p-6 ${className}`}>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl tracking-tight">{value}</p>
            {delta && (
              <p className={`text-sm ${deltaColor}`}>
                {deltaType === 'positive' && '+'}{delta}
              </p>
            )}
          </div>
          {sparklineData && (
            <div className="flex items-end gap-0.5 h-8">
              {sparklineData.map((value, index) => (
                <div
                  key={index}
                  className="bg-primary/20 w-1 rounded-full"
                  style={{
                    height: `${Math.max(4, (value / Math.max(...sparklineData)) * 32)}px`
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

