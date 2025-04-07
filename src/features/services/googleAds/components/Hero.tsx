'use client';
import { Badge, HeroButtonsSet, Marquee } from '@/components/ui';
import { StarIcon } from 'lucide-react';
import { content } from '../utils';

export function GoogleAdsHero() {
  return (
    <div className=' overflow-hidden py-6 sm:py-8 lg:py-12 flex flex-col'>
      <div className='max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center'>
        <div className='grid lg:grid-cols-2 gap-12 items-center relative'>
          {/* Left Column - Main Content */}
          <div className='space-y-6 md:space-y-8 text-center lg:text-left'>
            {/* Badge */}
            <div className='flex justify-center lg:justify-start mt-24'>
              <Badge text='Free Google Ads Performance Analysis - Worth $500' />
            </div>

            {/* Main Title */}
            <h1 className='text-balance'>
              Yes, You Can Get More Customers With A Small <br />
              Budget Using Google Ads
              <br />{' '}
              <span className='heading-gradient'>
                Yes, You Can Get More Customers
              </span>
            </h1>

            {/* Subtitle */}
            <p className='text-sm md:text-md text-foreground mx-auto lg:mx-0 max-w-2xl lg:max-w-none'>
              Stop wasting money on ineffective Google Ads campaigns. Our
              certified experts leverage advanced AI and machine learning to
              optimize your campaigns, targeting high-intent customers ready to
              buy. We focus on maximizing your ROAS (Return on Ad Spend) while
              minimizing wasted ad spend through precise audience targeting and
              continuous optimization.
            </p>

            {/* Key Points */}
            <div className='space-y-4'>
              {[
                'Average 300% ROAS improvement in 90 days',
                'Google Ads certified campaign managers',
                'Performance-based pricing available',
              ].map((point) => (
                <div key={point} className='flex items-center'>
                  <span className='text-ring text-xl mr-2'>✓</span>
                  <span className='text-foreground/90'>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <HeroButtonsSet
              firstBtnText='Get My Free Ads Performance Audit'
              secondBtnText='Scale My Google Ads'
            />
            {/* Trust Badges */}
            <div className='flex items-center  gap-4 pt-6 justify-center lg:justify-start'>
              <div className='bg-primary flex items-center justify-center'>
                {new Array(5).fill(null).map((_, index) => (
                  <span
                    className='size-7 p-1 bg-gradient-to-b from-ring to-secondary mx-px inline-flex items-center justify-center relative'
                    key={index}
                  >
                    <StarIcon fill='white' className='text-white' />
                    <span className='h-[2px] w-3 shadow-sm shadow-black rounded-full absolute top-4 rotate-45 right-1 bg-gray-400'>
                      {' '}
                    </span>
                  </span>
                ))}
              </div>

              <p className='text-foreground/90 font-medium whitespace-nowrap'>
                TrustScore 4.8 | 347 reviews
              </p>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className='h-screen z-10  lg:flex hidden'>
            <Marquee items={content} direction='up' />
            <Marquee
              items={content}
              direction='down'
              className=' xl:block hidden'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
