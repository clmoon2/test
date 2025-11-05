"use client";

import React from 'react';

interface BlobBackgroundProps {
  className?: string;
  color?: 'primary' | 'secondary' | 'muted';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

export function BlobBackground({ 
  className = '', 
  color = 'primary',
  position = 'top-right'
}: BlobBackgroundProps) {
  const colorClasses = {
    primary: 'text-primary/5',
    secondary: 'text-secondary/5',
    muted: 'text-muted/10'
  };

  const positionClasses = {
    'top-left': '-top-32 -left-32',
    'top-right': '-top-32 -right-32',
    'bottom-left': '-bottom-32 -left-32',
    'bottom-right': '-bottom-32 -right-32',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-96 h-96 pointer-events-none ${className}`}>
      <svg viewBox="0 0 200 200" className={`w-full h-full ${colorClasses[color]}`}>
        <path
          fill="currentColor"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.7,56.4,53.6,69,39.9,76.4C26.3,83.8,10.1,86,-6.5,86.1C-23.1,86.2,-40.1,84.1,-54.3,76.9C-68.5,69.7,-79.9,57.4,-86.8,42.8C-93.7,28.2,-96.1,11.3,-94.8,-5.3C-93.5,-21.9,-88.5,-38.2,-79.3,-51.8C-70.1,-65.4,-56.7,-76.3,-41.8,-83.1C-26.9,-89.9,-10.6,-92.6,3.5,-98.3C17.6,-104,30.6,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

