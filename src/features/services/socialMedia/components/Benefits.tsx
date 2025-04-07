'use client';

import React from 'react';
import { benefits } from '@/features/services/socialMedia/utils';
import { Sparkle } from 'lucide-react';
import { LeadingSection } from '@/features/services/components';
import { Card, InfoCard } from '@/components/ui';

export function Benefits() {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className='container mx-auto px-4'>
        <LeadingSection
          badgeText='Transform Your Business'
          description=" Experience tangible improvements in your business with our
            comprehensive social media management. Here's what you'll
            achieve:"
          heading=' Real Results, Not Just Promises'
          icon={Sparkle}
        />

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-4 py-4 '>
          {benefits.map((benefit, index) => (
            <Card key={index + benefit.title}>
              <InfoCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={index}
                color='blue'
                className='w-full h-full'
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
