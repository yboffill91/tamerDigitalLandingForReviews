'use client';

import React from 'react';
import { Play, CheckCircle, CalendarPlus } from 'lucide-react';
import { ShimmerButton } from '@/components/ui';
import { LeadingSection } from '../../components';

export const ExpertProfileSection = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <div className='space-y-8 flex flex-col items-center'>
            <LeadingSection
              badgeText='A Helping Hand'
              description='We helps small business owners improve their online visibility and authority by building natural, high-quality link profiles. Drawing from personal experience.'
              heading='Transform Your Digital Presence and Dominate the Market'
              icon={Play}
            />

            <p className='text-foreground/80 text-lg'>
              I understand that lack of online visibility and authority can be
              the biggest obstacle to your business growth. I&apos;m{' '}
              <span className='text-primary font-medium'>
                Jorge Raydel Sanchez
              </span>
              , and I&apos;ve helped small business owners reach top search
              results through ethical and effective off-page strategies. My
              personal and professional experience allows me to deeply
              understand the challenges you face and offer you a tailored
              solution.
            </p>

            <div className='space-y-4'>
              <div className='flex gap-4 items-start'>
                <CheckCircle
                  size={22}
                  className='text-primary mt-1 flex-shrink-0'
                />
                <div>
                  <h3 className='text-foreground text-lg font-medium mb-1'>
                    Your Off-Page SEO Guide
                  </h3>
                  <p className='text-foreground/80'>
                    With years of experience and proven results, I&apos;ve
                    perfected a comprehensive approach focused on building
                    natural, high-quality link profiles essential for improving
                    your rankings and building customer trust.
                  </p>
                </div>
              </div>

              <div className='flex gap-4 items-start'>
                <CheckCircle
                  size={22}
                  className='text-primary mt-1 flex-shrink-0'
                />
                <div>
                  <h3 className='text-foreground text-lg font-medium mb-1'>
                    A Story That Understands You
                  </h3>
                  <p className='text-foreground/80'>
                    As a digital expert who started from scratch, I know what it
                    means to struggle to stand out in a saturated market.
                    I&apos;ve been through the same challenges and understand
                    the importance of having a strategy that not only improves
                    your rankings but also strengthens your brand credibility.
                  </p>
                </div>
              </div>

              <div className='flex gap-4 items-start'>
                <CheckCircle
                  size={22}
                  className='text-primary mt-1 flex-shrink-0'
                />
                <div>
                  <h3 className='text-foreground text-lg font-medium mb-1'>
                    A Comprehensive, Personalized Solution
                  </h3>
                  <p className='text-foreground/80'>
                    My methodology combines advanced link building techniques,
                    local SEO strategies, and relevant content creation that
                    resonates with both Google&apos;s algorithms and your
                    customers&apos; real needs. With me, you&apos;ll not only
                    improve your rankings but also build the authority and trust
                    your business needs for sustainable growth.
                  </p>
                </div>
              </div>
            </div>

            <p className='text-foreground'>
              Let me help you transform these obstacles into tangible results
              and position your business where it truly deserves to be. Discover
              how my comprehensive and personalized approach can be the key to
              driving your digital growth.
            </p>

            <ShimmerButton variant='solid' size='big' className='group '>
              Schedule Free Consultation
              <CalendarPlus className='ml-2 size-4 group-hover:scale-110 transition-all duration-300 ease-in-out' />
            </ShimmerButton>
          </div>

          {/* Right Column - Video */}
          <div className='relative w-full max-w-[400px] h-[710px] mx-auto flex items-center justify-center'>
            {/* Outer background */}
            <div className='absolute left-[-10px] top-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] bg-card/80 backdrop-blur-[10px] rounded-lg shadow-lg border border-ring/20 z-0'></div>

            {/* Inner background */}
            <div className="absolute inset-0 bg-background-primary/90 backdrop-blur-[10px] rounded-lg shadow-lg border border-ring/10 overflow-hidden z-1 after:content-[''] after:absolute after:inset-[1px] after:rounded-[7px] after:border after:border-white/[0.07] after:pointer-events-none">
              {/* Video thumbnail image (placeholder) */}
              <div className='absolute inset-0 bg-gradient-to-br from-background-primary to-background-primary/50 z-1'>
                {/* This would be replaced with an actual image in production */}
                <div className="w-full h-full opacity-40 bg-[url('/api/placeholder/1000/600')] bg-cover bg-center"></div>
              </div>

              {/* Video play button */}
              <div className='absolute inset-0 flex items-center justify-center z-2'>
                <div className='group cursor-pointer transform transition-all duration-300 hover:scale-105'>
                  {/* Outer ring */}
                  <div className='absolute inset-0 rounded-full animate-ping bg-ring/10'></div>

                  {/* Middle ring */}
                  <div className='w-20 h-20 rounded-full bg-ring/20 backdrop-blur-lg flex items-center justify-center'>
                    {/* Inner play button */}
                    <div className='w-16 h-16 rounded-full bg-gradient-to-br from-primary to-ring flex items-center justify-center shadow-xl group-hover:shadow-primary/30 transition-all duration-300'>
                      <Play
                        fill='white'
                        size={28}
                        className='text-white ml-1'
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Video details */}
              <div className='absolute left-6 bottom-6 right-6 z-3'>
                <div className='flex items-center justify-between mb-2'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center'>
                      <span className='text-foreground font-bold'>JS</span>
                    </div>
                    <div>
                      <h4 className='text-foreground font-medium'>
                        Jorge Raydel Sanchez
                      </h4>
                      <p className='text-foreground/80 text-sm'>
                        CEO and SEO Expert
                      </p>
                    </div>
                  </div>
                  <span className='text-foreground/80 text-sm'>
                    5:32 minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
