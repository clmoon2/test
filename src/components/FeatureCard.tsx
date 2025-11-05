"use client";

import React from 'react';
import { motion } from 'motion/react';

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
}

export function FeatureCard({ icon, title, description, className = "", onClick }: FeatureCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="space-y-4">
        {icon && (
          <motion.div 
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"
          >
            {icon}
          </motion.div>
        )}
        <div className="space-y-2">
          <h3 className="text-lg text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed text-[16px]">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

