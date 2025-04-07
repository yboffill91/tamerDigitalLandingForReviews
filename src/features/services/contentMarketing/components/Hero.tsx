'use client';

import {
  FileText,
  Video,
  LineChart,
  Mic2,
  BookOpen,
  Share2,
  Mail,
  ChartBarBig,
} from 'lucide-react';
import { Cover } from '@/features/services/contentMarketing/ui';
import { Badge, HeroButtonsSet } from '@/components/ui';

export const ContentMarketingHero = () => {
  return (
    <div className='relative my-32 overflow-hidden flex flex-col'>
      <div className='max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center'>
        <div className='space-y-6 md:space-y-8 text-center max-w-3xl'>
          {/* Badge */}
          <div className='flex justify-center'>
            <Badge
              text='Free High Value Book Summary Video - Just One Click'
              icon={ChartBarBig}
            />
          </div>

          {/* Heading */}
          <h1>
            Content that <Cover>Converts</Cover>,<br /> Stories that Connect
          </h1>

          {/* Subheading */}
          <p className='text-sm md:text-base text-foreground/80 mx-auto max-w-2xl leading-7'>
            Let your content speak for itself, whether it&apos;s{' '}
            <span className='inline-flex items-baseline gap-2 mx-2'>
              <FileText className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
              articles or blogs
            </span>
            ,
            <span className='inline-flex items-baseline gap-2 mx-2'>
              <Video className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
              educational videos or tutorials
            </span>
            ,
            <span className='inline-flex items-baseline gap-2 mx-2'>
              <LineChart className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
              infographics
            </span>
            ,
            <span className='inline-flex items-baseline gap-2 mx-2'>
              <Mic2 className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
              podcasts
            </span>
            ,
            <span className='inline-flex items-baseline gap-2 mx-2'>
              <BookOpen className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
              ebooks or downloadable guides
            </span>
            ,
            <span className='inline-flex items-baseline gap-2 mx-2'>
              <Share2 className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
              social media posts
            </span>
            , and
            <span className='inline-flex items-baseline gap-2 mx-2'>
              <Mail className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
              newsletters
            </span>{' '}
            that foster an organic community around your service/product.
          </p>

          {/* CTA Buttons */}
          <HeroButtonsSet
            firstBtnText='See Where My Business Rank Right Now'
            secondBtnText='Claim My First Position'
            isCentered
          />
        </div>
      </div>
    </div>
  );
};
