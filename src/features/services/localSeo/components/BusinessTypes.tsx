'use client';

import React from 'react';
import { ShimmerButton } from '@/components/ui';
import { BriefcaseBusiness, Building, MapPin, User } from 'lucide-react';
import { IconMapSearch, IconWorldWww } from '@tabler/icons-react';
import {
  BusinessTypesHeading,
  IndustriesCard,
  LeadingSection,
} from '@/features/services/components';
import { businessTypes } from '@/features/services/utils';

export function BusinessTypes() {
  return (
    <div className='relative  overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0'>
        <div className='absolute right-1/2 top-1/4 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-gradient-to-r from-ring/10 to-transparent rounded-full blur-3xl'></div>
        <div className='absolute left-1/4 bottom-1/2 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-gradient-to-r from-secondary/10 to-transparent rounded-full blur-3xl'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <LeadingSection
          badgeText='We Work With Your Business'
          description="We elevate local businesses to the top of Google Search results in their specific markets. Our proven local SEO strategies have helped businesses across multiple countries and languages achieve prime visibility where it matters most - in their local community's searches."
          heading='We Cover All Industries and Boost Your Local Visibility'
          icon={BriefcaseBusiness}
        />

        {/* Key Benefits */}
        <div className='flex flex-wrap gap-4 items-center justify-center mb-10'>
          {[
            { text: 'Rank #1 in Google Maps', icon: MapPin },
            { text: "Capture 'Near Me' Searches", icon: IconMapSearch },
            { text: 'Multilingual SEO', icon: IconWorldWww },
            { text: 'Google Business Profile', icon: Building },
            { text: 'Customer Conversion', icon: User },
          ].map(({ text, icon }, index) => (
            <BusinessTypesHeading
              key={index + text}
              icon={icon}
              text={text}
              index={0}
            />
          ))}
        </div>

        {/* Business Types Grid */}
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {businessTypes.map((business, index) => (
            <IndustriesCard
              key={index + business.name}
              index={index}
              icon={business.icon}
              name={business.name}
              isSecondaryCard
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className='text-center mt-12'>
          <p className='text-foreground/90 max-w-2xl mx-auto mb-6'>
            Every local market is unique. No matter your industry or location,
            our local SEO expertise adapts to your specific market dynamics and
            customer search behavior.
          </p>
          <ShimmerButton variant='solid'>
            Analyze My Local Market Potential
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
}
