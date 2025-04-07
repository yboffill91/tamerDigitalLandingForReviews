'use client';
import React from 'react';
import { Input, BorderBeam, ShimmerButton } from '@/components/ui';
import { cn } from '@/lib';

export function SEOAuditForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className='w-full h-full rounded-none md:rounded-2xl shadow-input bg-card p-8 relative overflow-hidden'>
      {/* BorderBeam posicionado absolutamente con respecto al contenedor principal */}
      <BorderBeam
        size={250}
        duration={8}
        colorFrom='#3b82f6'
        colorTo='#60a5fa'
        className='absolute inset-0 z-0'
      />

      {/* Contenido del formulario con z-index para que aparezca sobre el BorderBeam */}
      <div className='relative z-10'>
        <div className='flex flex-wrap gap-4 mb-6'>
          <div className='flex items-center'>
            <div className='text-primary mr-2 rounded-full bg-primary/10 p-1'>
              <svg
                viewBox='0 0 24 24'
                width='16'
                height='16'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                <polyline points='22 4 12 14.01 9 11.01'></polyline>
              </svg>
            </div>
            <span className='text-foreground text-sm'>Free Analysis</span>
          </div>

          <div className='flex items-center'>
            <div className='text-primary mr-2 rounded-full bg-primary/10 p-1'>
              <svg
                viewBox='0 0 24 24'
                width='16'
                height='16'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                <polyline points='22 4 12 14.01 9 11.01'></polyline>
              </svg>
            </div>
            <span className='text-foreground text-sm'>Instant Results</span>
          </div>
        </div>

        <form className='space-y-4' onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Input placeholder='Your Name' type='text' />
          </LabelInputContainer>

          <LabelInputContainer>
            <Input placeholder='Your Website URL' type='url' />
          </LabelInputContainer>

          <LabelInputContainer>
            <Input placeholder='Work Email' type='email' />
          </LabelInputContainer>

          <LabelInputContainer>
            <Input placeholder='Company Name' type='text' />
          </LabelInputContainer>

          <ShimmerButton type='submit' variant='solid' className='w-full'>
            <div className='flex items-center justify-center'>
              <svg
                className='h-4 w-4 mr-2'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='12' cy='12' r='10'></circle>
                <line x1='12' y1='8' x2='12' y2='16'></line>
                <line x1='8' y1='12' x2='16' y2='12'></line>
              </svg>
              <span>Analyze My Site Now</span>
            </div>
            <BottomGradient />
          </ShimmerButton>

          <p className='text-foreground/60 text-xs text-center mt-2'>
            Your data is secure • No credit card required
          </p>
        </form>

        <div className='mt-10 text-center'>
          <p className='text-foreground text-sm font-medium mb-4'>
            Want to check your site SEO score instantly?
          </p>

          <div className='text-foreground/60 text-lg mb-4'>or</div>

          <ShimmerButton variant='outline'>
            <div className='flex items-center justify-center'>
              <svg
                className='h-4 w-4 mr-2'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
              </svg>
              <span>Try Our Free SEO Scanner</span>
              <svg
                className='h-4 w-4 ml-2'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='5' y1='12' x2='19' y2='12'></line>
                <polyline points='12 5 19 12 12 19'></polyline>
              </svg>
            </div>
            <BottomGradient />
          </ShimmerButton>

          <p className='text-foreground/60 text-xs mt-4'>
            Email Report and AI Analysis Recommendations
          </p>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-blue-400 to-transparent' />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('w-full', className)}>{children}</div>;
};
