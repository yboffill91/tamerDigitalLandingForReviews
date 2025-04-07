'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Grid, IconButton3D } from '@/components/ui';
import { CompassIcon } from 'lucide-react';

const AnimatedSpan = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.span>
  );
};

export function Companies() {
  return (
    <div className=' bg-gradient-to-br from-background-primary via-background-primary/50 to-background-primary rounded-lg pb-8 overflow-hidden relative '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center gap-4'>
        <IconButton3D icon={CompassIcon} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/30 gap-x-1.5'
        >
          <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
          Multiple Locations Services
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-2xl font-bold  mt-6 mb-6'
        >
          Serving Across All United States
        </motion.h2>

        <div className='mt-12 flex flex-wrap justify-center gap-x-6 gap-y-4 text-foreground/90 text-sm md:text-base'>
          <AnimatedSpan delay={0.3}>New York City</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={0.4}>Los Angeles</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={0.5}>Chicago</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={0.6}>Houston</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <motion.a
            href='#'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className='text-primary font-semibold underline underline-offset-2 underline-primary'
          >
            Miami
          </motion.a>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={0.8}>Dallas</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={0.9}>Atlanta</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={1.0}>San Francisco</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={1.1}>Las Vegas</AnimatedSpan>
        </div>

        <div className='mt-4 flex flex-wrap justify-center gap-x-6 gap-y-4 text-gray-400 text-sm md:text-base'>
          <AnimatedSpan delay={1.2}>Boston</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={1.3}>Phoenix</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={1.4}>Denver</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={1.5}>San Diego</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={1.6}>Austin</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={1.7}>Nashville</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={1.8}>Portland</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={1.9}>Orlando</AnimatedSpan>
          <span className='hidden md:inline'>•</span>
          <AnimatedSpan delay={2.0}>Washington DC</AnimatedSpan>
        </div>
      </div>
      <Grid />
    </div>
  );
}
