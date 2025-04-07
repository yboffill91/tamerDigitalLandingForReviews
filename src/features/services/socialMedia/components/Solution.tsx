'use client';

import {
  TrendingUp,
  CheckCircle,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Target,
  Contact,
} from 'lucide-react';
import { LeadingSection } from '../../components';

export function Solution() {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className='max-w-5xl mx-auto px-4'>
        {/* Banner superior */}
        <div className='bg-gradient-to-r from-primary/20 to-ring/20 rounded-lg overflow-hidden mb-8'>
          <div className='relative h-64 w-full'>
            {/* Reserved space for image */}
          </div>
        </div>

        {/* Contenido principal */}
        <div className='bg-gradient-to-b from-transparent to-card rounded-lg shadow-sm px-6 py-10'>
          <div className='flex items-center justify-start flex-col gap-y-10'>
            <LeadingSection
              badgeText='Why Us?'
              description=' With over 7 years of experience, we specialize in attracting
                targeted audiences to build engaged communities that eventually
                convert into qualified leads. We seamlessly integrate this with
                proper email marketing management and sales funnels to maximize
                your ROI. Our certifications and industry awards validate our
                expertise in delivering measurable results for businesses across
                multiple sectors.'
              heading='The Solution You Need'
              icon={Contact}
            />

            {/* Credentials grid */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4'>
              <div className='flex items-center gap-2 bg-ring/10 p-2 rounded-lg border border-ring/10'>
                <div className='bg-primary/20 rounded-full p-1.5 flex-shrink-0'>
                  <TrendingUp className='text-primary w-4 h-4' />
                </div>
                <div className='min-w-0'>
                  <span className='text-foreground font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis block'>
                    +500% Average Growth
                  </span>
                  <p className='text-foreground/80 text-xs'>For our clients</p>
                </div>
              </div>

              <div className='flex items-center gap-2 bg-ring/10 p-2 rounded-lg border border-ring/10'>
                <div className='bg-primary/20 rounded-full p-1.5 flex-shrink-0'>
                  <Target className='text-primary w-4 h-4' />
                </div>
                <div className='min-w-0'>
                  <span className='text-foreground font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis block'>
                    Conversion Specialists
                  </span>
                  <p className='text-foreground/80 text-xs'>
                    Followers to customers
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-2 bg-ring/10 p-2 rounded-lg border border-ring/10'>
                <div className='bg-primary/20 rounded-full p-1.5 flex-shrink-0'>
                  <CheckCircle className='text-primary w-4 h-4' />
                </div>
                <div className='min-w-0'>
                  <span className='text-foreground font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis block'>
                    Official Partner
                  </span>
                  <p className='text-foreground/80 text-xs'>
                    Recognized expertise
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row: Understanding & Platforms */}
          <div>
            {/* Personal Connection Story */}
            <div className='bg-ring/10 p-5 rounded-lg mb-6 border-l-4 border-primary'>
              <h4 className='font-medium text-foreground mb-3'>
                We Understand Your Frustration
              </h4>
              <p className='text-foreground/80 text-sm'>
                &#34;Many businesses invest time and money in social media
                without getting results. Constant posting, following trends, but
                no real growth or conversions. That&apos;s why we developed a
                system focused not just on numbers, but on attracting people who
                will actually become customers.&#34;
              </p>
            </div>

            {/* Social Platforms */}
            <div className='flex flex-wrap gap-3 justify-start my-8'>
              <div className='flex items-center px-3 py-1.5 bg-ring/10 rounded-full border border-ring/10'>
                <Instagram size={18} className='text-[#E1306C] mr-1.5' />
                <span className='text-sm text-foreground'>Instagram</span>
              </div>
              <div className='flex items-center px-3 py-1.5 bg-ring/10 rounded-full border border-ring/10'>
                <Twitter size={18} className='text-blue-400 mr-1.5' />
                <span className='text-sm text-foreground'>X</span>
              </div>
              <div className='flex items-center px-3 py-1.5 bg-ring/10 rounded-full border border-ring/10'>
                <Facebook size={18} className='text-[#4267B2] mr-1.5' />
                <span className='text-sm text-foreground'>Facebook</span>
              </div>
              <div className='flex items-center px-3 py-1.5 bg-ring/10 rounded-full border border-ring/10'>
                <Linkedin size={18} className='text-[#0077B5] mr-1.5' />
                <span className='text-sm text-foreground'>LinkedIn</span>
              </div>
              <div className='flex items-center px-3 py-1.5 bg-ring/10 rounded-full border border-ring/10'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  className='text-[#FF0000] mr-1.5'
                >
                  <path d='M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z' />
                  <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' />
                </svg>
                <span className='text-sm text-foreground'>YouTube</span>
              </div>
              <div className='flex items-center px-3 py-1.5 bg-ring/10 rounded-full border border-ring/10'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  className='text-black mr-1.5'
                >
                  <path d='M21 7.5V18c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h4.5L9 3h6l.5 2H20c.6 0 1 .4 1 1v1.5z' />
                </svg>
                <span className='text-sm text-foreground'>Threads</span>
              </div>
              <div className='flex items-center px-3 py-1.5 bg-ring/10 rounded-full border border-ring/10'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  className='text-[#000000] mr-1.5'
                >
                  <path d='M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2'></path>
                  <path d='M8 11.5v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2H8z'></path>
                  <path d='M10 9.5v-1a2 2 0 0 1 4 0v1'></path>
                  <path d='M8 11.5v2a4 4 0 0 0 8 0v-2'></path>
                </svg>
                <span className='text-sm text-foreground'>TikTok</span>
              </div>
              <div className='flex items-center px-3 py-1.5 bg-ring/10 rounded-full border border-ring/10'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  className='text-[#E60023] mr-1.5'
                >
                  <path d='M12 2C6.48 2 2 6.48 2 12c0 4.99 3.67 9.13 8.47 9.87.62.12.85-.27.85-.6v-2.1c-3.45.75-4.17-1.66-4.17-1.66-.56-1.42-1.38-1.8-1.38-1.8-1.12-.76.09-.75.09-.75 1.24.09 1.89 1.28 1.89 1.28 1.1 1.89 2.89 1.34 3.6 1.03.11-.8.43-1.34.78-1.65-2.73-.31-5.6-1.37-5.6-6.08 0-1.34.48-2.44 1.27-3.3-.13-.31-.55-1.57.12-3.27 0 0 1.04-.33 3.4 1.27A11.8 11.8 0 0112 6.77a11.91 11.91 0 013.2.43c2.36-1.6 3.4-1.27 3.4-1.27.67 1.7.25 2.96.12 3.27.79.86 1.27 1.96 1.27 3.3 0 4.72-2.88 5.77-5.62 6.07.45.39.84 1.15.84 2.32v3.44c0 .33.23.72.86.6A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z' />
                </svg>
                <span className='text-sm text-foreground'>Pinterest</span>
              </div>
            </div>
          </div>

          {/* Third Row: Our Approach */}
          <div>
            {/* Solution Explanation */}
            <h4 className='font-semibold text-foreground mb-3'>
              Our Approach Is Different
            </h4>
            <p className='text-foreground/80 mb-4'>
              Our{' '}
              <span className='font-medium text-foreground'>
                Social Growth & Convert
              </span>{' '}
              strategy includes:
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <div className='flex items-start'>
                <div className='bg-primary/20 text-primary rounded-full p-1 mr-2 mt-1'>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path d='M5 12l5 5L20 7' />
                  </svg>
                </div>
                <span className='text-sm text-foreground/80'>
                  Audience analysis to create content that really resonates
                </span>
              </div>

              <div className='flex items-start'>
                <div className='bg-primary/20 text-primary rounded-full p-1 mr-2 mt-1'>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path d='M5 12l5 5L20 7' />
                  </svg>
                </div>
                <span className='text-sm text-foreground/80'>
                  Strategic editorial calendar with value and conversion content
                </span>
              </div>

              <div className='flex items-start'>
                <div className='bg-primary/20 text-primary rounded-full p-1 mr-2 mt-1'>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path d='M5 12l5 5L20 7' />
                  </svg>
                </div>
                <span className='text-sm text-foreground/80'>
                  Community management that builds real relationships
                </span>
              </div>

              <div className='flex items-start'>
                <div className='bg-primary/20 text-primary rounded-full p-1 mr-2 mt-1'>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path d='M5 12l5 5L20 7' />
                  </svg>
                </div>
                <span className='text-sm text-foreground/80'>
                  Email marketing integration to nurture leads into customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
