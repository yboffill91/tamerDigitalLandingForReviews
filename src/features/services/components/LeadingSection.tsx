'use client';

import { IconButton3D, type ButtonVariant } from '@/components/ui';
import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LeadingSectionProps {
  icon: LucideIcon | IconType;
  badgeText: string;
  heading: string;
  description: string;
  variant?: ButtonVariant;
}

export const LeadingSection = ({
  icon: IconElement,
  badgeText,
  heading,
  description,
  variant = 'blue',
}: LeadingSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Map variants to color classes
  const variantColors = {
    blue: 'text-primary ring-primary/30 bg-primary',
    green: 'text-secondary-green ring-secondary-green/30 bg-secondary-green',
    red: 'text-destructive ring-destructive/30 bg-destructive',
  };

  // Determine the color based on variant
  const { text, ring, bg } = {
    text: variantColors[variant].split(' ')[0],
    ring: variantColors[variant].split(' ')[1],
    bg: variantColors[variant].split(' ')[2],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className='text-center mb-8 flex items-center justify-center gap-4 flex-col'
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <IconButton3D icon={IconElement} variant={variant} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <div
          className={cn(
            'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ring-1 ring-inset gap-x-1.5',
            ring
          )}
        >
          <span className={cn('size-1.5 rounded-full', bg)} />
          <p className={text}>{badgeText}</p>
        </div>
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className='mt-6 max-w-3xl text-balance capitalize'
      >
        {heading}
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className='text-foreground/90 max-w-3xl mx-auto text-pretty mb-12'
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
