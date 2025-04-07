'use client';
import React from 'react';
import { Award, ArrowRight, RocketIcon, Check } from 'lucide-react';
import Image from 'next/image';
import { InfoCard, ShimmerButton } from '@/components/ui';
import { LeadingSection } from '@/features/services/components';
import { steps } from '@/features/services/googleAds/utils';

export function GoogleAdsProcess() {
  return (
    <div className='relative py-32 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        {/* Section Header */}
        <LeadingSection
          badgeText='Our Process'
          description=' A clear, proven process that transforms your advertising investment
            into measurable business growth'
          heading='Your Path to Google Ads Success'
          icon={RocketIcon}
        />

        {/* Process Steps */}
        <div className='relative'>
          {/* Connection Line */}
          <div className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-ring/0 via-ring/30 to-ring/0 hidden lg:block'></div>

          <div className='grid gap-8 lg:grid-cols-4'>
            {steps.map((step, index) => (
              <div key={index} className='relative group'>
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10'>
                    <ArrowRight className='w-8 h-8 text-ring' />
                  </div>
                )}
                <div className='absolute -top-3 -right-3 w-8 h-8 rounded-full bg-ring flex items-center justify-center text-card font-bold z-40'>
                  {index + 1}
                </div>

                <div className='relative '>
                  <InfoCard
                    index={index}
                    icon={step.icon}
                    description={step.description}
                    title={step.title}
                    color='blue'
                    className='h-80'
                  >
                    {step.details.map((detail, index) => (
                      <div
                        key={index}
                        className={`flex items-center px-2 gap-1 ${
                          index === step.details.length - 1 && 'pb-6'
                        }`}
                      >
                        <Check className='size-4 text-ring' />
                        {detail}
                      </div>
                    ))}
                  </InfoCard>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Overview Image */}
        <div className='mt-20 mb-20'>
          <Image
            src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3'
            alt='Marketing Analytics Dashboard'
            className='w-full h-[400px] object-cover rounded-2xl border border-foreground/10'
            width={1800}
            height={1800}
          />
        </div>

        {/* Results Preview */}
        <div className='flex justify-center'>
          <ShimmerButton variant='solid'>
            <Award className='w-5 h-5' />
            <span className='ml-2'>See the results our clients achieve</span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
}
