'use client';
import type React from 'react'; // Import React
import { Globe as GlobeComponent } from './ui/globe';
import { motion } from 'framer-motion';
import { BlogNewsletter } from '@/features/blog/components';

export function BlogHero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className=' relative overflow-hidden items-center justify-center min-h-[40vh] pt-16 flex flex-col'
    >
      {/* Globe Container - Positioned behind content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='absolute inset-x-0 top-1/4 w-full max-w-6xl mx-auto overflow-visible'
      >
        <div className='relative w-full' style={{ height: '800px' }}>
          <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px]'>
            <GlobeComponent />
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='max-w-7xl mx-auto px-4 relative z-10'
      >
        <div className='flex flex-col items-center text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`font-bold mb-6 mt-12  relative `}
          >
            Worldwide SEO and Digital
            <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent '>
              {' '}
              Insights
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-foreground/90 max-w-2xl text-lg leading-relaxed mb-24 bg-card/40 p-2'
          >
            Discover global strategies, tips, and trends in SEO and digital
            marketing. Our blog covers everything you need to succeed in the
            ever-evolving digital world, connecting you with insights that work
            across borders.
          </motion.p>
        </div>
      </motion.div>
      <BlogNewsletter />
    </motion.section>
  );
}
