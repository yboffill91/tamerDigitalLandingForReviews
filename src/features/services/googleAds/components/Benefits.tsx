'use client';
import React from 'react';
import { benefits } from '@/features/services/googleAds/utils';
import { LeadingSection } from '@/features/services/components';
import { HeartPulse } from 'lucide-react';
import { InfoCard } from '@/components/ui';

export function GoogleAdsBenefits() {
  return (
    <div className='relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <LeadingSection
          badgeText='Our Proven Approach'
          description='Experience the difference of professionally managed campaigns that deliver real results'
          heading='Benefits That Transform Your Google Ads Investment'
          icon={HeartPulse}
        />

        {/* Benefits Grid */}
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-4'>
          {benefits.map(({ icon, description, title }, index) => (
            <InfoCard
              color='blue'
              description={description}
              icon={icon}
              title={title}
              index={index}
              key={title + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
