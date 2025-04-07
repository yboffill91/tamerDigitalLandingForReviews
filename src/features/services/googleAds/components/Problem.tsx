'use client';
import React from 'react';
import { AlertCircle } from 'lucide-react';
import { problems } from '@/features/services/googleAds/utils';
import { LeadingSection } from '../../components';
import { CardBorderBeam } from '@/components/ui';

export function GoogleAdsProblem() {
  return (
    <div className='overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <LeadingSection
          badgeText='Loosing Money?'
          description="  Most businesses are silently losing money on Google Ads without
          realizing it. These issues aren't just affecting your marketing budget
          - they're stunting your company's growth and peace of mind. Do any of
          these situations sound familiar?"
          heading='Your Money is Burning While Your Competition Thrives'
          icon={AlertCircle}
          variant='red'
        />

        <div className='grid sm:grid-cols-2 gap-1'>
          {problems.map(({ icon: IconElement, title, description }, index) => (
            <CardBorderBeam
              key={index}
              index={index}
              colorFrom='red'
              colorTo='red'
              size={150}
              className={`group ${
                (index + 1) % 2 === 0
                  ? 'bg-gradient-to-tl'
                  : 'bg-gradient-to-tr'
              } from-destructive/10 via-destructive/5 to-background-primary  h-56 `}
            >
              <div className='p-6 w-full h-full '>
                <header className='flex items-center justify-start mb-6'>
                  <span className='bg-destructive rounded-lg size-10 p-2 mr-4 flex items-center justify-center group-hover:rotate-45 transition-transform duration-700 ease-in-out'>
                    <IconElement className='size-8 text-primary-500 group-hover:-rotate-45 group-hover:scale-150 transition-transform duration-700 ease-in-out text-destructive-foreground' />
                  </span>
                  <h3 className='group-hover:text-destructive transition-colors duration-700 ease-in-out'>
                    {title}
                  </h3>
                </header>
                <p className='text-sm mt-2 text-foreground/50 group-hover:text-foreground transition-colors duration-700 ease-in-out'>
                  {description}
                </p>
              </div>
            </CardBorderBeam>
          ))}
        </div>
      </div>
    </div>
  );
}
