'use client';

import { useRef } from 'react';
import { Globe2 } from 'lucide-react';
import { seoResults, statsData } from '@/features/landing/utils';
import { motion, useInView } from 'framer-motion';

export const SEOResultsCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={
        isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }
      }
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='relative w-full bg-card p-8 rounded-lg overflow-hidden max-w-7xl mx-auto'
    >
      {/* Header */}
      <motion.div
        className='relative z-[1] flex flex-col md:flex-row items-center justify-between mb-12'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='flex items-center gap-4 mb-4 md:mb-0'>
          <div className='p-3 bg-primary/10 rounded-lg'>
            <Globe2 className='w-6 h-6 text-primary' />
          </div>
          <div>
            <h3 className='text-xl font-semibold '>SEO Average Results</h3>
            <p className='text-foreground/70'>Proven Performance</p>
          </div>
        </div>
        <div className='px-4 py-2 bg-primary/10 rounded-lg'>
          <span className='text-primary font-medium'>420% Average ROI</span>
        </div>
      </motion.div>

      {/* Main Services */}
      <motion.div
        className='relative z-[1] grid grid-cols-1 md:grid-cols-3 gap-2 mb-2'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {seoResults.map(
          (
            { icon: IconElement, title, metric, impact, benefit, description },
            index
          ) => (
            <motion.div
              key={index}
              initial={{ y: -20, opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.2 }}
              className='rounded-lg group relative h-36 md:h-auto lg:h-36 bg-background-primary border border-ring'
            >
              <div className='flex flex-col gap-2 group-hover:opacity-0 transition-all duration-300 ease-in-out absolute top-0 left-0 p-2  rounded-lg w-full h-full group-hover:-top-20'>
                <IconElement className='size-4 text-primary' />
                <h2 className='text-2xl'>{metric}</h2>
                <h3 className='text-primary'>{impact}</h3>
                <h4>{title}</h4>
              </div>
              <div className='opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out w-full h-full  rounded-lg p-2 flex flex-col items-start justify-evenly absolute top-20 left-0 group-hover:top-0'>
                <h3>{benefit}</h3>
                <p className='text-sm'>{description}</p>
              </div>
            </motion.div>
          )
        )}
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className='relative z-[1] grid grid-cols-2  sm:grid-cols-4 gap-2'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            className='group p-4 rounded-lg bg-background-primary border border-ring hover:border-secondary  hover:bg-ring/5 transition-all duration-300 hover:scale-[1.02]'
          >
            <div className='flex items-center gap-2 mb-2'>
              <stat.icon className='w-4 h-4 text-primary group-hover:text-ring transition-colors duration-300' />
              <span className='text-sm text-foreground/70'>{stat.label}</span>
            </div>
            <div className='text-xl font-bold group-hover:text-primary transition-all duration-300'>
              {stat.value}
            </div>
            <div className='text-xs text-foreground/70 mt-1'>{stat.detail}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
