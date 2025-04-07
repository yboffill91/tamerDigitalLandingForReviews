'use client';
import Image from 'next/image';

import {
  BottomLines,
  SideLines,
  TopLines,
} from '@/features/about/components/ui/HeroLines';
import { motion } from 'framer-motion';
import {} from '@/lib';

export default function AboutHero() {
  return (
    <div className='relative overflow-hidden flex flex-col items-center justify-center pt-32 gap-y-4'>
      <TopLines />
      <BottomLines />
      <SideLines />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-7xl mx-auto px-4 relative z-10'
      >
        <div className='flex flex-col items-center text-center'>
          <motion.div
            className='flex items-start justify-start mb-8'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>

          <motion.h1
            className={`font-bold text-foreground`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From Dreams
            <span className='heading-gradient block'>
              {' '}
              To Digital Excellence
            </span>
          </motion.h1>

          <motion.p
            className='text-foreground/80 max-w-2xl text-lg leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A journey of transformation, resilience, and innovation. Our story
            is more than just business growth, it&apos;s about turning
            challenges into opportunities and helping others succeed in the
            digital world.
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        className='relative w-full max-w-5xl mx-auto mt-4'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Image
          src='/features/about/aboutus.webp'
          width={1200}
          height={675}
          alt='About Us'
          className='w-full h-auto rounded-2xl object-cover shadow-lg transform -translate-y-4'
          priority
          unoptimized
          style={{
            maskImage: 'linear-gradient(#121212 70%, transparent )',
          }}
        />
      </motion.div>
    </div>
  );
}
