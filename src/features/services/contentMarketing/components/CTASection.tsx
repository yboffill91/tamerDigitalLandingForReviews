'use client';

import { ShimmerButton } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ArrowRight, MessageCircle } from 'lucide-react';
import React from 'react';

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          '--background': '#000000',
          '--color': 'rgba(255, 255, 255, 0.1)',
          '--height': '1px',
          '--width': '5px',
          '--fade-stop': '90%',
          '--offset': offset || '200px',
          '--color-dark': 'rgba(255, 255, 255, 0.1)',
          maskComposite: 'exclude',
        } as React.CSSProperties
      }
      className={cn(
        'absolute w-[calc(100%+var(--offset))] h-[var(--height)] left-[calc(var(--offset)/2*-1)]',
        'bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]',
        '[background-size:var(--width)_var(--height)]',
        '[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]',
        '[mask-composite:exclude]',
        'z-30',
        className
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          '--background': '#000000',
          '--color': 'rgba(255, 255, 255, 0.1)',
          '--height': '5px',
          '--width': '1px',
          '--fade-stop': '90%',
          '--offset': offset || '150px',
          '--color-dark': 'rgba(255, 255, 255, 0.1)',
          maskComposite: 'exclude',
        } as React.CSSProperties
      }
      className={cn(
        'absolute h-[calc(100%+var(--offset))] w-[var(--width)] top-[calc(var(--offset)/2*-1)]',
        'bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]',
        '[background-size:var(--width)_var(--height)]',
        '[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]',
        '[mask-composite:exclude]',
        'z-30',
        className
      )}
    ></div>
  );
};

export function ContentMarketingCTASection() {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-3 my-20 md:my-40 justify-start relative z-20 max-w-7xl mx-auto'>
      <GridLineHorizontal className='top-0' offset='200px' />
      <GridLineHorizontal className='bottom-0 top-auto' offset='200px' />
      <GridLineVertical className='left-0' offset='80px' />
      <GridLineVertical className='left-auto right-0' offset='80px' />
      <div className='md:col-span-2 p-8 md:p-14'>
        <h2 className='text-left text-foreground/80 text-xl md:text-3xl tracking-tight font-medium'>
          Transform your content into{' '}
          <span className='font-bold '>business results</span>
        </h2>
        <p className='text-left text-foreground/80 mt-4 max-w-lg text-xl md:text-3xl tracking-tight font-medium'>
          Get expert <span className='text-primary'>content strategy</span> and{' '}
          <span className='text-primary'>execution</span> that drives growth.
        </p>

        <div className='flex items-start sm:items-center flex-col sm:flex-row sm:gap-4 py-6'>
          <ShimmerButton variant='solid' size='big' className='group'>
            Start Your Content Journey{' '}
            <ArrowRight className='group-hover:translate-x-2 transition-transform duration-300 ease-in-out size-4 group-hover:size-5' />
          </ShimmerButton>
          <ShimmerButton variant='outline' size='big' className='group'>
            Schedule Consultation
            <MessageCircle className='group-hover:translate-x-2 transition-transform duration-300 ease-in-out size-4 group-hover:size-5' />
          </ShimmerButton>
        </div>
      </div>
      <div className='border-t md:border-t-0 md:border-l border-dashed border-foreground/20 p-8 md:p-14'>
        <p className='text-base text-foreground/80'>
          &quot;Their content strategy completely transformed our online
          presence. We&apos;ve seen a 285% increase in organic traffic and our
          content now consistently ranks in the top 3 for our target
          keywords.&quot;
        </p>
        <div className='flex flex-col text-sm items-start mt-4 gap-1'>
          <p className='font-bold '>Sarah Chen</p>
          <p className='text-gray-500'>
            Marketing Director, TechFlow Solutions
          </p>
        </div>
      </div>
    </div>
  );
}
