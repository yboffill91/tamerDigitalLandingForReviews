'use client';

import { useState } from 'react';
import { Input, ShimmerButton, ShineBorder } from '@/components/ui';
import { LeadingSection } from '@/features/services/components';
import { Gift } from 'lucide-react';
import { ShineColors } from '@/lib';

export const CTASection = () => {
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className='relative w-full overflow-hidden p-4   rounded-lg container mx-auto pb-10 max-w-5xl bg-card'>
      <ShineBorder shineColor={ShineColors} />
      <div className='relative max-w-4xl mx-auto px-4 text-center'>
        <LeadingSection
          badgeText='Get Your Free SEO Audit'
          description="Get a comprehensive analysis of your website's SEO performance and discover untapped opportunities for growth. Enter your details below to receive your free audit report."
          heading="Discover Your Website's True Potential"
          icon={Gift}
        />

        <form onSubmit={(e) => e.preventDefault()}>
          <div className=''>
            <div className='flex flex-wrap items-center  w-full  '>
              <div className='grid grid-cols-2  md:w-2/3 w-full'>
                <Input
                  type='url'
                  placeholder='Enter your website URL'
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className='px-4 py-3 placeholder-foreground/60 w-full'
                  required
                />
                <Input
                  type='email'
                  placeholder='Enter your email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='px-4 py-3 placeholder-foreground/60 w-full'
                  required
                />
              </div>
              <div className='flex md:w-1/3 w-full items-start md:justify-start justify-center md:mt-0 mt-2  '>
                <ShimmerButton
                  type='submit'
                  variant='solid'
                  className='py-2 md:ml-2 ml-0'
                >
                  Get My Free SEO Audit
                </ShimmerButton>
              </div>
            </div>
          </div>
        </form>

        <div className='mt-12 flex items-center justify-center gap-8 text-sm text-foreground/80'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-primary'></div>
            100% Free Analysis
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-primary'></div>
            Detailed SEO Report
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-primary'></div>
            Actionable Insights
          </div>
        </div>
      </div>
    </div>
  );
};
