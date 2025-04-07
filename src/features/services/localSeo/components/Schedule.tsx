'use client';
import React from 'react';
import Script from 'next/script';
import { Calendar, Clock, Target, ArrowRight, StepForward } from 'lucide-react';
import { LeadingSection } from '../../components';

const benefits = [
  {
    icon: Calendar,
    title: 'Complete Analysis',
    description: 'Get a detailed review of your current local SEO performance',
  },
  {
    icon: Clock,
    title: 'Competition Insights',
    description: "Understand what's working for your successful competitors",
  },
  {
    icon: Target,
    title: 'Strategy Outline',
    description: 'Receive a customized action plan for your business',
  },
];

export function Schedule() {
  return (
    <div className='relative  overflow-hidden'>
      {/* Background gradient */}
      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16 flex flex-col items-center justify-center gap-4'>
          <LeadingSection
            badgeText='Take the Next Step'
            description='We only work with 5 new businesses each month to ensure exceptional results for each one. Will yours be one of them?'
            heading="Let's Make Your Business Shine in Your City!"
            icon={StepForward}
          />
        </div>

        {/* Benefits */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className='flex flex-col items-center text-center p-8 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm
                         transition-all duration-500 hover:border-primary/40 hover:bgring/10 group'
              >
                <div className='w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-6'>
                  <Icon className='w-8 h-8 text-primary' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-3'>
                    {benefit.title}
                  </h3>
                  <p className='text-foreground text-sm'>
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Calendly Widget */}
        <div className='max-w-3xl mx-auto mb-12'>
          <div
            className='calendly-inline-widget rounded-xl overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm'
            data-url='https://calendly.com/tamercodellc/15min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=171717&text_color=ffffff&primary_color=2563eb'
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
          <Script
            src='https://assets.calendly.com/assets/external/widget.js'
            strategy='lazyOnload'
          />
        </div>

        {/* CTA */}
        <div className='max-w-3xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 bgring/10 backdrop-blur-sm'>
            <p className='text-foreground/90 text-sm'>
              No credit card required
            </p>
            <span className='w-1 h-1 bg-primary rounded-full'></span>
            <p className='text-foreground/90 text-sm'>30-minute consultation</p>
            <ArrowRight className='w-4 h-4 text-primary ml-2' />
          </div>
        </div>
      </div>
    </div>
  );
}
