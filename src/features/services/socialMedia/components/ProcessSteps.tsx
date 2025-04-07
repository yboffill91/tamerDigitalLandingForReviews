'use client';

import React from 'react';
import { TracingBeam } from '@/components/ui';
import Image from 'next/image';
import { steps } from '@/features/services/socialMedia/utils';
import { StepForward } from 'lucide-react';
import { LeadingSection } from '@/features/services/components';

export function ProcessSteps() {
  return (
    <section className='relative w-full overflow-hidden'>
      <div className='container mx-auto px-4'>
        <LeadingSection
          badgeText='Our Process'
          description=' A proven, systematic approach to transform your social media
            presence and drive real business results'
          heading='Your Journey to Social Media Success'
          icon={StepForward}
        />

        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
          <div className='lg:w-1/3 relative rounded-2xl overflow-hidden'>
            <div className='w-full h-full'>
              <Image
                src='/features/services/social-media/issues.webp'
                alt='Business process illustration'
                width={800}
                height={1000}
                className='w-full h-full object-cover rounded-2xl'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent' />
            </div>
          </div>

          <div className='lg:w-2/3'>
            <TracingBeam className='px-6'>
              <div className='max-w-2xl'>
                {steps.map((step, index) => (
                  <div key={index} className='relative mb-12'>
                    <div className='absolute -left-[42px] top-6 size-2 rounded-full bg-primary' />
                    <div className='bg-card rounded-lg p-6 ml-4 border border-ring/10'>
                      <h3 className='text-lg font-semibold text-foreground mb-2'>
                        {step.title}
                      </h3>
                      <p className='text-foreground/80 text-sm leading-relaxed'>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TracingBeam>
          </div>
        </div>
      </div>
    </section>
  );
}
