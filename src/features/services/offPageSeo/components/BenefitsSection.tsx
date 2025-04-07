'use client';

import Image from 'next/image';
import { benefits } from '@/features/services/offPageSeo/utils';
import { HeartPulseIcon } from 'lucide-react';
import { LeadingSection } from '@/features/services/components';
import { CardHoverTopBorder } from '@/components/ui/CardHoverTopBorder';

export const BenefitsSection = () => {
  return (
    <div className='relative w-full  overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-col items-center text-center mb-16'>
          <LeadingSection
            badgeText='Benefits'
            description='Discover how my personalized approach to Off-Page SEO will transform your business. Each benefit is designed to deliver tangible results that will drive your growth and help you stand out in the digital world.'
            heading='Benefits of Working With Me'
            icon={HeartPulseIcon}
          />
        </div>

        {/* Full-width image container with gradient overlay */}
        <div className='relative w-full h-[300px] mb-16 rounded-lg overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-primary/20 to-ring/20 mix-blend-overlay z-10'></div>
          <Image
            src='/features/services/off-page-seo/benefits-hero.jpg'
            alt='SEO Benefits Visualization'
            fill
            className='object-cover'
            priority
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-8'>
          {benefits.map(({ title, tagline, description }, index) => (
            <CardHoverTopBorder
              key={index}
              index={index}
              className='bg-card flex hover:bg-ring/20 p-4'
            >
              <div className='w-full h-full flex flex-col gap-4 p-6'>
                <header className='flex gap-2'>
                  <span className='bg-primary text-primary-foreground w-12 rounded-lg flex items-center justify-center text-xl'>
                    {index + 1}
                  </span>
                  <div>
                    <h3 className='text-primary'> {title}</h3>
                    <h4 className='text-primary/80'>{tagline}</h4>
                  </div>
                </header>
                <p>{description}</p>
              </div>
            </CardHoverTopBorder>
          ))}
        </div>
      </div>
    </div>
  );
};
