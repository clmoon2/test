"use client";

import React from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallback?: string;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  width, 
  height, 
  className,
  fallback = '/placeholder.png'
}: ImageWithFallbackProps) {
  return (
    <Image
      src={src || fallback}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={(e) => {
        if (e.currentTarget.src !== fallback) {
          e.currentTarget.src = fallback;
        }
      }}
    />
  );
}

