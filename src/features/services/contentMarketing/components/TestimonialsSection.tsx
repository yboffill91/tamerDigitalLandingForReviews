'use client';

import React from 'react';
import { AnimatedTestimonials } from '@/features/services/contentMarketing/ui';
import { testimonials } from '../utils';
import { LeadingSection } from '../../components';
import { FaSpeakerDeck } from 'react-icons/fa';

export const ContentMarketingTestimonialsSection = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-center mb-16'>
        <LeadingSection
          badgeText='Client Success Stories'
          description='See how our content marketing strategies have transformed businesses
          and delivered measurable results across different industries.'
          heading='  Real Results from Real Clients'
          icon={FaSpeakerDeck}
        />
      </div>

      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
};
