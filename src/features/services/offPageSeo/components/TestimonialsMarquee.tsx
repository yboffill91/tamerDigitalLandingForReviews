'use client';
import { ShieldIcon } from 'lucide-react';
import { TestimonialsGrid } from '@/features/services/offPageSeo/components/ui';
import { LeadingSection } from '@/features/services/components';

export function TestimonialsMarqueeGrid() {
  return (
    <div className='relative  overflow-hidden'>
      <div className='relative w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden h-full'>
        <div className='pb-12 md:pb-20'>
          <LeadingSection
            badgeText='Client Success Stories'
            heading='Trusted by Local Businesses Worldwide'
            description='Real stories from businesses that have transformed their local presence and achieved remarkable growth through our proven strategies.'
            icon={ShieldIcon}
          />
        </div>

        <div className='relative'>
          <div className='h-full overflow-hidden w-full'>
            <TestimonialsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
