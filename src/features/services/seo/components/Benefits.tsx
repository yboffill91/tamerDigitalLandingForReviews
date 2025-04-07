'use client';

import React from 'react';
import { benefits } from '@/features/services/seo/utils';
import { Ruler } from 'lucide-react';
import { LeadingSection } from '@/features/services/components';
import { CardHoverTopBorder } from '@/components/ui/CardHoverTopBorder';
import { InfoCard } from '@/components/ui';

export function Benefits() {
  return (
    <div className='relative w-full py-4 overflow-hidden bg-gradient-to-b from-transparent via-card to-transparent'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <LeadingSection
            badgeText='Real, Measurable ResultsReal, Measurable Results'
            description="Don't just fix technical issues - turn them into opportunities
            for exponential growth. Here's what you'll achieve with
            our proven technical SEO framework:Don't just fix technical issues - turn them into opportunities
            for exponential growth. Here's what you'll achieve with
            our proven technical SEO framework:"
            heading=' Transform Your Technical SEO Into a Growth Engine'
            icon={Ruler}
          />
        </div>

        <div className='flex flex-wrap items-center justify-center  gap-6'>
          {benefits.map(({ icon, title, description }, index) => (
            <CardHoverTopBorder
              key={index}
              index={index}
              className='bg-transparent w-[25rem] 
            '
            >
              <InfoCard
                color='blue'
                description={description}
                icon={icon}
                title={title}
                index={index}
              />
            </CardHoverTopBorder>
          ))}
        </div>
      </div>
    </div>
  );
}
