'use client';
import Image from 'next/image';
import { LeadingSection } from '@/features/services/components';
import { User } from 'lucide-react';

export function About() {
  return (
    <div className='relative overflow-hidden py-12'>
      {/* Background gradient */}
      <div className='absolute inset-0'>
        <span className='absolute w-[300px] h-[300px] bg-gradient-to-r from-primary to-ring via-secondary rounded-full blur-3xl opacity-5 top-1/3 left-3/4'></span>
        <span className='absolute w-[300px] h-[300px] bg-gradient-to-r from-primary to-ring via-secondary rounded-full blur-3xl opacity-5 bottom-1/3 right-1/2'></span>
      </div>

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          {/* Left Column - Image without card styling */}
          <div className=''>
            <Image
              src='/features/services/local-seo/hero-image.webp'
              alt='Jorge Raydel Sanchez'
              className='w-full h-[32rem] object-center object-scale-down '
              width={1200}
              height={400}
              style={{
                maskImage: 'linear-gradient(black 80%, transparent)',
              }}
            />
          </div>

          {/* Right Column - Text */}
          <div>
            <LeadingSection
              badgeText="Here's The Fix"
              description="52% of local businesses haven't even claimed their Google Business Profile."
              heading='Google Business Profile Expert'
              icon={User}
            />

            <div className='space-y-4 text-foreground/90'>
              <p className='text-2xl font-bold text-foreground'>
                I&apos;m Jorge R Sanchez, founder of TAMERDigital, and I&apos;m
                here to help you grow.
              </p>

              <p className='text-base'>
                My superpower is making your business stand out in Google&apos;s
                Local Pack where countless people are desperately searching for
                services or products just like yours.
              </p>

              <p className='text-base'>
                As a certified Local SEO specialist with over a decade of
                experience optimizing businesses for Google Maps, I combine the
                expertise of working with businesses of all types and sizes,
                battle tested positioning strategies, and a few tricks up my
                sleeve that can only be gained by successfully ranking companies
                that are a real challenge.
              </p>

              <h3 className=' font-semibold'>I GET it.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
