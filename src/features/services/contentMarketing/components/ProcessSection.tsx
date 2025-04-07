'use client';
import { ArrowRight } from 'lucide-react';
import { steps } from '@/features/services/contentMarketing/utils';
import { LeadingSection } from '@/features/services/components';
import { IconStepInto } from '@tabler/icons-react';

export const ContentMarketingProcessSection = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-center mb-16'>
        <LeadingSection
          badgeText='  Our Process'
          description='  A comprehensive 15-step process designed to transform your content
          strategy and deliver measurable results.'
          heading='Your Journey to Content Excellence'
          icon={IconStepInto}
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='bg-card rounded-xl p-6 relative group hover:bg-primary/5 transition-colors'
          >
            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0'>
                <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                  {step.icon}
                </div>
              </div>
              <div>
                <div className='flex items-center gap-2 mb-2'>
                  <span className='text-xs text-secondary font-medium'>
                    Step {index + 1}
                  </span>
                  <ArrowRight className='w-3 h-3 text-secondary' />
                </div>
                <h3 className='text-lg font-semibold  mb-2'>{step.title}</h3>
                <p className='text-foreground/80 text-sm'>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
