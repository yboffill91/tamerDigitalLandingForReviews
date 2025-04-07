'use client';

import React from 'react';
import {
  BusinessTypesHeading,
  IndustriesCard,
  LeadingSection,
} from '@/features/services/components';
import { FaIndustry } from 'react-icons/fa';
import { ShimmerButton } from '@/components/ui';
import { businessTypes } from '@/features/services/utils';
import {  MapPin, Users2 } from 'lucide-react';
import {
  IconBrandGoogle,
  IconMapSearch,
  IconWorldWww,
} from '@tabler/icons-react';

export function GoogleAdsBusinessTypes() {
  return (
    <div className='relative bg-card overflow-hidden py-12'>
      {/* Background gradient */}
      <div className='absolute inset-0'>
        <div className='absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-ring/10 to-transparent rounded-full blur-3xl'></div>
        <div className='absolute left-0 bottom-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-ring/10 to-transparent rounded-full blur-3xl'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <LeadingSection
          badgeText='We Work With Your Business'
          description=" We elevate local businesses to the top of Google Search results in
            their specific markets. Our proven local SEO strategies have helped
            businesses across multiple countries and languages achieve prime
            visibility where it matters most - in their local community's
            searches."
          heading=' We Cover All Industries and Boost Your Local Visibility'
          icon={FaIndustry}
        />

        {/* Key Benefits */}
        <div className='flex flex-wrap gap-2 items-start justify-center mb-12'>
          {[
            { text: 'Rank #1 in Google Maps', icon: MapPin },
            { text: "Capture 'Near Me' Searches", icon: IconMapSearch },
            { text: 'Multilingual SEO', icon: IconWorldWww },
            { text: 'Google Business Profile', icon: IconBrandGoogle },
            { text: 'Customer Conversion', icon: Users2 },
          ].map(({ text, icon }, index) => (
            <BusinessTypesHeading
              text={text}
              icon={icon}
              index={index}
              key={text + index}
            />
          ))}
        </div>

        {/* Business Types Grid */}
        <div className='flex items-center justify-center flex-wrap gap-4'>
          {businessTypes.map((business, index) => (
            <IndustriesCard
              icon={business.icon}
              index={index}
              key={business.name + index}
              name={business.name}
              variant='blue'
              isSecondaryCard
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className='text-center mt-12'>
          <p className='text-foreground max-w-2xl mx-auto mb-6'>
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
