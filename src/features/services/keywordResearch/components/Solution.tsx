'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChartBarStacked } from 'lucide-react';
import {
  SolutionsImages,
  SolutionsTips,
} from '@/features/services/keywordResearch/utils';
import Image from 'next/image';
import { ShimmerButton } from '@/components/ui';
import { Tips } from './ui';
import { LeadingSection } from '@/features/services/components';

export function Solution() {
  return (
    <div className='relative w-full py-16 md:py-24 overflow-hidden'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6'>
        {/* Section Badge */}
        <LeadingSection
          icon={ChartBarStacked}
          badgeText='Your path to success'
          description='I guide you to transform your online visibility with strategies that go beyond simple keywords.'
          heading='An SEO approach that actually works'
        />

        {/* Images Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16'>
          {SolutionsImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='aspect-[4/3] rounded-lg overflow-hidden bg-ring'
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={3000}
                height={3000}
                className='w-full h-full object-cover'
              />
            </motion.div>
          ))}
        </div>

        {/* Content Section */}
        <div className='max-w-4xl mx-auto space-y-10'>
          {SolutionsTips.map(({ title, icon, tip }) => (
            <Tips key={title} title={title} icon={icon} tip={tip} />
          ))}

          {/* Personal final note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='mt-14 border-t border-ring pt-8 text-center'
          >
            <p className='text-foreground/80 italic max-w-2xl mx-auto'>
              &quot;My commitment is not simply to improve metrics, but to
              transform your online presence into a real growth tool for your
              business. I invite you to take a step forward with an SEO strategy
              designed specifically for you.&quot;
            </p>
            <p className='text-primary mt-3 mb-8 font-medium'>
              Jorge R. Sanchez
            </p>
            <ShimmerButton variant='solid'>
              <span>Schedule a Strategy Session</span>
              <svg
                className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </ShimmerButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
