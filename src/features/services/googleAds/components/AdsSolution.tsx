'use client';

import Image from 'next/image';
import { LeadingSection } from '../../components';
import { FaGoogle } from 'react-icons/fa';

export function GoogleAdsSolution() {
  return (
    <section className='relative bg-ring/20 pt-40 pb-20 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0'>
        <div className='absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-r from-ring/20 to-transparent rounded-full blur-3xl'></div>
        <div className='absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-ring/20 to-transparent rounded-full blur-3xl'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-4'>
          {/* Left Column - Image */}
          <div className='relative flex w-full '>
            <Image
              src='/features/services/google-ads/googlepartner.png'
              alt='Google Ads Partner'
              className='w-1/2 md:block hidden object-contain object-center '
              width={1000}
              height={400}
            />
            <div className='md:w-1/2 w-full'>
              <LeadingSection
                badgeText='Expert Google Ads Management'
                description='Only 10% of Google Ads accounts achieve a quality score above
              6/10.'
                heading=" We're Your Certified Google Ads Partners, Ready to
              Transform Your Ad Performance"
                icon={FaGoogle}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Text */}

        <div className='text-foreground/90'>
          <p className='text-base mb-2'>
            Our expertise lies in crafting high-performing Google Ads campaigns
            that capture qualified leads while maximizing your return on ad
            spend (ROAS).
          </p>

          <p className='text-base mb-6'>
            With over a decade of experience managing millions in ad spend
            across diverse industries, we combine advanced AI-driven
            optimization, strategic audience targeting, and conversion-focused
            campaign structures to deliver results that matter to your bottom
            line.
          </p>

          <p className='text-lg font-semibold '>We DELIVER.</p>
        </div>
      </div>
    </section>
  );
}
