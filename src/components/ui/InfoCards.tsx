'use client';

import { useState, useRef, useEffect, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';

type ColorVariant = 'blue' | 'green' | 'red';

interface InfoCardProps {
  icon: LucideIcon | IconType;
  title: string;
  color: ColorVariant;
  index?: number;
  description: ReactNode;
  className?: string;
  children?: ReactNode;
}

const colorVariants = {
  blue: {
    text: 'text-foreground group-hover:text-primary transition-all duration-700 ease-in-out',
    bg: 'bg-primary',
    border: ' hover:border-primary/50',
    hover:
      'hover:bg-gradient-to-tr hover:from-primary/10 hover:to-card hover:text-primary',
    content: 'text-primary/80',
    cssVar: '--primary',
    glow: 'bg-primary/50',
  },
  green: {
    text: 'text-foreground group-hover:text-secondary-green transition-all duration-700 ease-in-out',
    bg: 'bg-secondary-green',
    border: ' hover:border-secondary-green/50',
    hover:
      'hover:bg-gradient-to-tr hover:from-secondary-green/10 hover:to-card hover:text-secondary-green',
    content: 'text-secondary-green/80',
    cssVar: '--secondary-green',
    glow: 'bg-secondary-green/10',
  },
  red: {
    text: 'text-foreground text-foreground group-hover:text-destructive transition-all duration-700 ease-in-out',
    bg: 'bg-destructive',
    border: ' hover:border-destructive/50',
    hover:
      'hover:bg-gradient-to-tr hover:from-destructive/10 hover:to-card hover:text-destructive',
    content: 'text-destructive/80',
    cssVar: '--destructive',
    glow: 'bg-destructive/50',
  },
};

export function InfoCard({
  icon: Icon,
  title,
  color,
  index = 0,
  description,
  className,
  children,
}: InfoCardProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const colorClasses = colorVariants[color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='w-full h-full'
    >
      <div
        className={cn(
          ' rounded-lg border border-background-primary transition-all duration-500 ease-in-out  relative overflow-hidden group px-4 py-2',
          ' hover:shadow-md hover:shadow-foreground/5',
          'before:absolute before:inset-0  before:opacity-0 before:transition-opacity before:duration-500',
          'hover:before:opacity-100 before:z-0',
          colorClasses.hover,
          colorClasses.border,
          className
        )}
      >
        <div
          className={cn(
            'absolute -bottom-28 -left-1 w-16 h-16 rounded-full blur-xl transition-all duration-500 ease-in-out z-0',
            'group-hover:scale-[4] group-hover:rotate-45',
            colorClasses.glow
          )}
        ></div>

        <span
          className='absolute -bottom-28 -left-1 w-20 h-20 rounded-full blur-xl bg-opacity-50 group-hover:bg-opacity-10 transition-all duration-500 ease-in-out z-0 group-hover:scale-[2] group-hover:rotate-45'
          style={{ backgroundColor: `var(${colorClasses.cssVar})` }}
        ></span>

        {/* Header */}
        <div className='flex flex-row items-center gap-2 p-4 pb-2 relative z-10 group-hover:translate-y-[-2px] transition-transform duration-700'>
          <span
            className={cn(
              'inline-flex items-center justify-center p-2 rounded-lg transition-all duration-700 group-hover:rotate-45 size-10 ',
              colorClasses.bg
            )}
          >
            <Icon
              className={cn(
                'size-8 transition-all duration-700 group-hover:-rotate-45 group-hover:scale-150 text-primary-foreground '
              )}
            />
          </span>
          <h3
            className={cn(
              'font-medium transition-all duration-700 group-hover:translate-x-2  ',
              colorClasses.text
            )}
          >
            {title}
          </h3>
        </div>

        {/* Content */}
        <div className='p-4 pt-2 text-foreground/80 group-hover:text-foreground relative z-10 transition-all duration-700 group-hover:translate-y-[-2px]'>
          {description}
        </div>
        {children}
      </div>
    </motion.div>
  );
}
