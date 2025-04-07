'use client';
import React from 'react';
import { Ripple } from '../components/ui/ripple';
import { ShoppingBag, Calendar, TrendingUp, DollarSign } from 'lucide-react';
import { ShimmerButton } from '@/components/ui';
import { LeadingSection } from '../../components';

export function GoogleAdsCTA() {
  return (
    <div className=' overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative rounded-2xl bg-card border border-foreground/10 overflow-hidden'>
          <div className='absolute z-10 p-8 lg:p-12 w-full h-full bg-gradient-to-r from-background-primary/40 via-card/80 to-background-primary/40 flex items-center justify-center flex-col'>
            <LeadingSection
              badgeText='Take Action Now'
              heading=' Start Selling More With Google Ads'
              description=" Don't let your competitors capture your customers. Our proven
              strategies have helped businesses increase sales by an average of
              300% in just 90 days."
              icon={DollarSign}
            />
            <div className='flex items-center gap-4'>
              <ShimmerButton variant='outline'>
                <Calendar className='w-5 h-5' />
                <span>Schedule Your 30-Min Strategy Session</span>
              </ShimmerButton>
              <ShimmerButton variant='solid' className=''>
                <ShoppingBag className='w-5 h-5' />
                <span>Get Your Free Google Ads Audit ($500 Value)</span>
              </ShimmerButton>
            </div>

            {/* Stats */}
            <div className='mt-8 flex items-center gap-8'>
              <div className='flex items-center gap-2'>
                <TrendingUp className='w-5 h-5 text-ring' />
                <span className='text-foreground font-semibold'>300%</span>
                <span className='text-foreground/80'>Avg. ROAS</span>
              </div>
              <div className='w-px h-8 bg-foreground/10' />
              <div className='text-foreground/80'>
                <span className='text-foreground font-semibold'>
                  Initial Results
                </span>{' '}
                in 2 Weeks
              </div>
            </div>
          </div>

          {/* Left Column - Content */}

          {/* Right Column - Ripple Effect */}
          <div className=' h-[500px] '>
            <Ripple
              mainCircleSize={250}
              mainCircleOpacity={0.3}
              numCircles={6}
              className='[mask-image:linear-gradient(to_left,black_90%,transparent)]'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
