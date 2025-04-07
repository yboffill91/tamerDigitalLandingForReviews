'use client';

import React, { useState } from 'react';
import {
  businessCategories,
  businessTypes,
} from '@/features/services/socialMedia/utils';
import { FaFacebookF } from 'react-icons/fa';
import { ShimmerButton } from '@/components/ui';
import {
  BusinessTypesHeading,
  IndustriesCard,
  LeadingSection,
} from '@/features/services/components';
import { AppWindow, ChartLine, Save, TrendingUp, Users2 } from 'lucide-react';

export function SocialMediaBusinessTypes() {
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(businessCategories)[0]
  );

  // Obtener negocios de la categoría activa
  const getBusinessesForCategory = (category: string) => {
    if (!category || !businessCategories[category]) return [];
    return businessTypes.filter((business) =>
      businessCategories[category].includes(business.businessName)
    );
  };

  return (
    <div className='relative bg-gradient-to-b from-transparent via-card to-transparent py-8 overflow-hidden'>
      {/* Background elements */}

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <LeadingSection
          badgeText=' 
       Social Media Management for Your Industry'
          description=' We transform your digital presence with industry-specific social
            media strategies. Our approach has generated engagement and
            conversions for businesses across all sectors, effectively
            connecting them with both local and international audiences.'
          heading=' Tailored Strategies for Every Business Type'
          icon={FaFacebookF}
        />

        {/* Key Benefits */}
        <div className='flex flex-wrap gap-2 items-center justify-center mb-10'>
          {[
            { text: 'Custom Content', icon: Save },
            { text: 'Multi-Platform Management', icon: AppWindow },
            { text: 'Advanced Analytics', icon: ChartLine },
            { text: 'Viral Campaigns', icon: TrendingUp },
            { text: 'Community Engagement', icon: Users2 },
          ].map(({ text, icon }, index) => (
            <BusinessTypesHeading
              index={index}
              icon={icon}
              text={text}
              key={index}
            />
          ))}
        </div>

        {/* Tabs para categorías */}
        <div className='mb-8 overflow-x-auto flex justify-center'>
          <div className='inline-flex space-x-2 py-3'>
            {Object.keys(businessCategories).map((category) => (
              <ShimmerButton
                variant='outline'
                key={category}
                onClick={() => setActiveCategory(category)}
                className={` ${
                  activeCategory === category ? 'bg-ring text-foreground' : ''
                }`}
              >
                {category}
              </ShimmerButton>
            ))}
          </div>
        </div>

        {/* Negocios en forma de tarjetas */}
        <div className='flex flex-wrap justify-center items-center gap-2'>
          {getBusinessesForCategory(activeCategory).map((business, index) => (
            <IndustriesCard
              isSecondaryCard
              icon={business.icon}
              name={business.businessName}
              index={index}
              key={business.businessName + index}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className='text-center mt-12'>
          <p className='text-foreground/800 max-w-2xl mx-auto mb-6 pt-16'>
            Don&apos;t see your business type or industry listed? No worries! We
            work with businesses of all types and sizes. Let&apos;s discuss how
            we can help grow your specific business.
          </p>
          <ShimmerButton>
            Check if We Work With Your Business Type
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
}
