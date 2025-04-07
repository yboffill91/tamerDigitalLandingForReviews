'use client';
import React from 'react';
import { Star } from 'lucide-react';
import { LeadingSection } from '../../components';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { ShimmerButton } from '@/components/ui';
import Image from 'next/image';

export function GoogleAdsReviews() {
  return (
    <div className='relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        {/* Header */}
        <LeadingSection
          badgeText='Client Success Stories'
          description='Reviews from Industry Leaders'
          heading='550+'
          icon={SpeakerWaveIcon}
        />
        <div className='flex items-center justify-evenly w-full gap-4'>
          {/* Right Column */}
          <div className='flex flex-col items-start md:items-end gap-6 mb-12'>
            <div className='flex items-center gap-4'>
              <div className='flex -space-x-4'>
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=256&h=256',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=facearea&facepad=2&w=256&h=256',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256',
                ].map((src, i) => (
                  <div
                    key={i}
                    className='w-10 h-10 rounded-full border-2 border-card overflow-hidden'
                  >
                    <Image
                      src={src}
                      alt='User avatar'
                      className='w-full h-full object-cover'
                      width={400}
                      height={400}
                    />
                  </div>
                ))}
              </div>
              <p className='text-lg font-semibold  text-right'>
                10,000+ users already using
                <br />
                our services
              </p>
            </div>
            <div className='flex gap-4'>
              <ShimmerButton variant='solid'>
                Get a free trial
                <span className='text-xl'>→</span>
              </ShimmerButton>
              <ShimmerButton variant='outline'>
                Read more reviews
                <span className='text-xl'>→</span>
              </ShimmerButton>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className='grid lg:grid-cols-3 gap-8 h-full'>
          {/* First Column - Large Review */}
          <div className='h-full bg-card rounded-xl border border-foreground/10 hover:border-ring/30 transition-all duration-300 overflow-hidden'>
            <Image
              src='https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2000'
              alt='Marketing team meeting'
              className='w-full h-full object-cover'
              width={400}
              height={400}
            />
          </div>
          {/* Second Column */}
          <div className='space-y-8'>
            <div className='bg-card p-6 rounded-xl border border-foreground/10 hover:border-ring/30 transition-all duration-300'>
              <div className='flex justify-between items-center mb-4'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 fill-ring text-ring' />
                  ))}
                </div>
                <span className='text-sm text-foreground/80'>2024-01-20</span>
              </div>
              <h3 className='text-xl font-semibold  mb-3'>
                Exceptional Results
              </h3>
              <p className='text-foreground/80 mb-6'>
                &quot;Their strategic approach to Google Ads management has
                delivered outstanding results. Our conversion rates have
                improved by 65% while maintaining our target CPA.&quot;
              </p>
              <div className='flex items-center gap-4'>
                <Image
                  src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                  alt='Emily Rodriguez'
                  className='w-12 h-12 rounded-full object-cover'
                  width={400}
                  height={400}
                />
                <div>
                  <h4 className='font-semibold '>Emily Rodriguez</h4>
                  <p className='text-sm text-foreground/80'>
                    CMO, Digital First
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-card p-6 rounded-xl border border-foreground/10 hover:border-ring/30 transition-all duration-300'>
              <div className='flex justify-between items-center mb-4'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 fill-ring text-ring' />
                  ))}
                </div>
                <span className='text-sm text-foreground/80'>2024-01-18</span>
              </div>
              <h3 className='text-xl font-semibold  mb-3'>
                Transformative Partnership
              </h3>
              <p className='text-foreground/80 mb-6'>
                &quot;The level of expertise and attention to detail is
                remarkable. Our Google Ads campaigns are now performing better
                than ever, with a 40% increase in qualified leads.&quot;
              </p>
              <div className='flex items-center gap-4'>
                <Image
                  src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                  alt='James Wilson'
                  className='w-12 h-12 rounded-full object-cover'
                  width={400}
                  height={400}
                />
                <div>
                  <h4 className='font-semibold '>James Wilson</h4>
                  <p className='text-sm text-foreground/80'>
                    Director, Growth Marketing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className='space-y-8'>
            <div className='bg-card p-6 rounded-xl border border-foreground/10 hover:border-ring/30 transition-all duration-300'>
              <div className='flex justify-between items-center mb-4'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 fill-ring text-ring' />
                  ))}
                </div>
                <span className='text-sm text-foreground/80'>2024-01-22</span>
              </div>
              <h3 className='text-xl font-semibold  mb-3'>
                Outstanding Performance
              </h3>
              <p className='text-foreground/80 mb-6'>
                &quot;The ROI we&apos;ve achieved through their Google Ads
                management has exceeded our expectations. Our cost per lead has
                decreased by 35% while lead quality has improved
                significantly.&quot;
              </p>
              <div className='flex items-center gap-4'>
                <Image
                  src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                  alt='Sarah Thompson'
                  className='w-12 h-12 rounded-full object-cover'
                  width={1200}
                  height={1200}
                />
                <div>
                  <h4 className='font-semibold '>Sarah Thompson</h4>
                  <p className='text-sm text-foreground/80'>
                    VP Marketing, Tech Solutions
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-card p-6 rounded-xl border border-foreground/10 hover:border-ring/30 transition-all duration-300'>
              <div className='flex justify-between items-center mb-4'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 fill-ring text-ring' />
                  ))}
                </div>
                <span className='text-sm text-foreground/80'>2024-01-19</span>
              </div>
              <h3 className='text-xl font-semibold  mb-3'>
                Impressive Expertise
              </h3>
              <p className='text-foreground/80 mb-6'>
                &quot;Their data-driven approach and strategic optimizations
                have completely transformed our Google Ads performance.
                We&apos;re seeing consistent growth in both leads and
                conversions.&quot;
              </p>
              <div className='flex items-center gap-4'>
                <Image
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                  alt='David Lee'
                  className='w-12 h-12 rounded-full object-cover'
                  width={1200}
                  height={1200}
                />
                <div>
                  <h4 className='font-semibold '>David Lee</h4>
                  <p className='text-sm text-foreground/80'>
                    Founder, Innovation Labs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
