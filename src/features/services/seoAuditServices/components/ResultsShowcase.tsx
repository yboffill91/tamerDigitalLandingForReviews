'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { results } from '@/features/services/seoAuditServices/utils';
import { ShimmerButton } from '@/components/ui';
import { BsChevronCompactUp } from 'react-icons/bs';
import Image from 'next/image';
import { LeadingSection } from '@/features/services/components';

export function ResultsShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <div className='w-full '>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <LeadingSection
          badgeText='Success Stories'
          heading='Discover how our SEO audit service boosted revenue traffic for 200+ businesses'
          description='Real results from real businesses that trusted our comprehensive SEO audit process to transform their online presence.'
          icon={BsChevronCompactUp}
        />

        <div className='flex flex-wrap-reverse justify-center items-center gap-8 px-2 py-8  relative'>
          <div>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className='space-y-2  md:max-w-xl w-full h-96'
            >
              <h2 className='mb-1 mt-8'>{results[currentSlide].title}</h2>

              <p className='text-foreground/70 '>
                {results[currentSlide].description}
              </p>

              <div className='flex flex-col gap-2 items-start pb-8'>
                <div>
                  <h4 className='text-foreground'>Before:</h4>
                  <div className='text-xl font-semibold text-foreground'>
                    {results[currentSlide].before}
                  </div>
                </div>

                <div>
                  <h4 className='text-foreground'>After SeoProfy:</h4>
                  <div className='text-xl font-semibold text-green-500 '>
                    {results[currentSlide].after}
                  </div>
                </div>
              </div>
              <span className='w-full inline-flex items-center justify-center'>
                <ShimmerButton variant='solid'>
                  Get results like that for my business
                </ShimmerButton>
              </span>
            </motion.div>
          </div>

          <div className=' flex items-center justify-center '>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className='bg-foreground rounded-lg h-96 '
            >
              <Image
                src={'/features/services/seo-audit-services/analytics.webp'}
                alt='Analytics Results'
                className='min-w-5xl lg:w-full h-full rounded-lg object-cover'
                width={1000}
                height={1000}
              />
            </motion.div>

            <div className='absolute -bottom-10  pt-1 rounded-lg left-1/2 -translate-x-1/2 flex items-center gap-4'>
              <ShimmerButton
                variant='outline'
                size='sm'
                onClick={prevSlide}
                className='rounded-full hover:bg-primary'
              >
                <ChevronLeft className='w-5 h-5' />
              </ShimmerButton>

              <div className='flex gap-2'>
                {results.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentSlide ? 'bg-blue-500' : 'bg-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <ShimmerButton
                variant='outline'
                size='sm'
                onClick={nextSlide}
                className='rounded-full hover:bg-primary'
              >
                <ChevronRight className='w-5 h-5' />
              </ShimmerButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
