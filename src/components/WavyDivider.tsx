"use client";

import React from 'react';

interface WavyDividerProps {
  className?: string;
  flip?: boolean;
  opacity?: number;
}

export function WavyDivider({ className = '', flip = false, opacity = 0.1 }: WavyDividerProps) {
  return (
    <div className={`w-full ${className}`} style={{ transform: flip ? 'scaleY(-1)' : undefined }}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16"
        style={{ display: 'block' }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-current text-background"
          style={{ opacity }}
        />
      </svg>
    </div>
  );
}

