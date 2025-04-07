'use client';
import React from 'react';
import { benefits } from '../utils/Benefits.const';
import { Heart } from 'lucide-react';
import { LeadingSection } from '@/features/services/components';
import { CardHoverTopBorder } from '@/components/ui/CardHoverTopBorder';
import { GridCardSet, InfoCard } from '@/components/ui';

export function SEOBenefits() {
  return (
    <div className='w-full  py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <LeadingSection
          badgeText='Why You Need an SEO Audit'
          description="Discover hidden opportunities and unlock your website's full potential with our comprehensive SEO audit service."
          heading='Benefits of Professional SEO Audits'
          icon={Heart}
        />

        <GridCardSet row={3}>
          {benefits.map(({ icon: IconElement, description, title }, index) => (
            <CardHoverTopBorder
              key={index}
              index={index}
              className='bg-transparent '
            >
              <InfoCard
                icon={IconElement}
                title={title}
                description={description}
                color='blue'
                className='h-96 md:h-64'
              />
            </CardHoverTopBorder>
          ))}
        </GridCardSet>
      </div>
    </div>
  );
}
