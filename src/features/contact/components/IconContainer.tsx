'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { useRadarPosition } from './Radar';

interface IconContainerProps {
  icon?: React.ReactNode;
  text: string;
  delay?: number;
  position: { x: number; y: number };
}

export const IconContainer = ({ icon, text, delay }: IconContainerProps) => {
  const { isBlinking } = useRadarPosition();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay ? delay : 0 }}
      className={twMerge(
        'relative z-40 flex flex-col items-center justify-center space-y-2'
      )}
    >
      <div
        className={twMerge(
          'flex h-12 w-12 items-center justify-center rounded-2xl border border-ring bg-card shadow-inner transition-all duration-200',
          isBlinking && 'border-primary/50 bg-primary/10'
        )}
      >
        <div
          className={twMerge(
            'transition-colors duration-200',
            isBlinking ? 'text-foreground' : 'text-foreground/50'
          )}
        >
          {icon}
        </div>
      </div>
      <div className='hidden rounded-md px-2 py-1 md:block'>
        <div
          suppressHydrationWarning
          className={twMerge(
            'text-center text-xs font-bold transition-colors duration-200 bg-clip-text',
            isBlinking ? 'text-foreground' : 'text-foreground/50'
          )}
        >
          {text || `Web Development`}
        </div>
      </div>
    </motion.div>
  );
};
