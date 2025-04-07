'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChartIcon as ChartNetwork } from 'lucide-react';
import { features } from '@/features/landing/utils';
import { IconButton3D, VerticalTabs } from '@/components/ui';

export const FeaturesTabs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }, // Using cubic-bezier for smoother motion
    },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      className='max-w-[90rem] mx-auto px-4 '
    >
      <div className='text-center mb-12 max-w-[45rem] mx-auto'>
        <motion.div variants={itemVariants}>
          <IconButton3D
            icon={ChartNetwork}
            className='mb-6 text-primary hover:text-secondary transition-colors duration-300'
          />
        </motion.div>
        <motion.h2 variants={itemVariants} className='text-4xl font-bold mt-4 '>
          From Vision to{' '}
          <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            Victory
          </span>
        </motion.h2>
        <motion.p variants={itemVariants} className='text-foreground/80 mt-2'>
          Your success is inevitable. Our digital marketing agency transforms
          ambitious goals into documented results, driving exponential growth in
          revenue and market presence.
        </motion.p>
      </div>
      <div className='min-h-[900px]'>
        <VerticalTabs tabs={features} />
      </div>
    </motion.div>
  );
};

export default FeaturesTabs;
