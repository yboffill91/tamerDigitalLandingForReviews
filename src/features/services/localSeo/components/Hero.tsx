'use client'

import React from 'react'
import { Badge, HeroButtonsSet } from '@/components/ui'
import {
  RankingCard,
  FeaturedImages,
} from '@/features/services/localSeo/components/ui'
import { BookOpen } from 'lucide-react'

export const HeroSection = () => {
  return (
    <div
      className=' overflow-hidden flex flex-col pt-32 md:min-h-[1080px] relative'
      style={{
        backgroundImage:
          'url(/features/services/local-seo/background_att.webp)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='absolute z-0 bottom-0 left-0 h-52 w-screen bg-gradient-to-b from-transparent  to-background-primary' />
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute right-1/2 translate-x-1/2 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-primary via-secondary to-ring rounded-full blur-3xl opacity-10'></div>
      </div>

      <div className='max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center '>
          {/* Left Column */}
          <div className='space-y-6 md:space-y-8 text-center lg:text-left'>
            {/* Badge */}
            <div className='flex justify-center lg:justify-start mt-8'>
              <Badge
                icon={BookOpen}
                text='Free High Value Book Summary Video - Just One Click'
              />
            </div>

            {/* Heading */}
            <h1 className='text-balance mx-auto text-white'>
              Why Chase The Customer When They{' '}
              <span className='heading-gradient'> Can Easily </span>Find You On
              Local Pack
            </h1>

            {/* Subheading */}
            <p className='text-sm md:text-md text-pretty text-foreground/90 mx-auto lg:mx-0 max-w-2xl lg:max-w-none text-white'>
              Local customers are looking for services, shops, and restaurants
              right now. Make sure your business is front and center in
              Miami&apos;s competitive market. Our Local SEO services help you
              rise above the noise—optimizing your Google Business Profile,
              enhancing your on-page content, and ensuring that every local
              citation and review spotlights your brand.
            </p>

            {/* CTA Buttons */}
            <HeroButtonsSet
              firstBtnText='See Where My Business Rank Right Now'
              secondBtnText='Claim My 1st Position'
            />

            {/* Reviews Section */}
            <FeaturedImages
              textClassName='text-center lg:text-left'
              className='justify-center lg:justify-start items-center mt-8'
              showStars
            />
          </div>

          {/* Right Column with Image and Floating Elements */}
          <div className='relative w-full h-full flex items-center overflow-visible order-last bg-transparent lg:-ml-24'>
            {/* Floating Ranking Card */}
            <div className='absolute -right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block'>
              <RankingCard />
            </div>

            {/* Main Image */}
          </div>
        </div>
      </div>
    </div>
  )
}
