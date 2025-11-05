"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users } from 'lucide-react';

interface LiveCounterProps {
  startCount?: number;
  className?: string;
}

export function LiveCounter({ startCount = 1247, className = '' }: LiveCounterProps) {
  const [count, setCount] = useState(startCount);
  const [recentJoin, setRecentJoin] = useState(false);

  useEffect(() => {
    // Simulate people joining the waitlist
    const interval = setInterval(() => {
      const shouldIncrement = Math.random() > 0.7; // 30% chance every interval
      if (shouldIncrement) {
        setCount(prev => prev + 1);
        setRecentJoin(true);
        setTimeout(() => setRecentJoin(false), 2000);
      }
    }, 8000); // Check every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 ${className}`}
      animate={recentJoin ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <Users className="w-4 h-4 text-primary" />
        {recentJoin && (
          <motion.div
            initial={{ scale: 0.8, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            className="absolute inset-0 rounded-full bg-primary"
          />
        )}
      </div>
      <span className="text-sm">
        <motion.span
          key={count}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-block font-medium"
        >
          {count.toLocaleString()}
        </motion.span>
        <span className="text-muted-foreground ml-1">people waiting</span>
      </span>
      {recentJoin && (
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="text-xs text-primary"
        >
          +1
        </motion.span>
      )}
    </motion.div>
  );
}

