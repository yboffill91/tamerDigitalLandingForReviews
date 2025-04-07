'use client';
import React from 'react';
import { challenges } from '@/features/services/seoAuditServices/utils';
import { IconWorldWww } from '@tabler/icons-react';
import { LeadingSection } from '../../components';
import { GridCardSet, InfoCard } from '@/components/ui';

export function SEOChallenges() {
  return (
    <div className='w-full bg-gradient-to-b from-transparent via-card to-transparent pb-16 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <LeadingSection
          badgeText='Common SEO Problems'
          description="The hardest part? Knowing something's wrong with your SEO but not being able to pinpoint exactly what. These are the challenges we see businesses struggle with every day - and they're all solvable."
          variant='red'
          heading='When SEO Feels Like an Uphill Battle'
          icon={IconWorldWww}
        />

        <GridCardSet row={3}>
          {challenges.map((challenge, index) => (
            <InfoCard
              color='red'
              description={challenge.description}
              icon={challenge.icon}
              title={challenge.title}
              key={index}
              index={index}
              className='min-w-72 h-72'
            />
          ))}
        </GridCardSet>
      </div>
    </div>
  );
}
