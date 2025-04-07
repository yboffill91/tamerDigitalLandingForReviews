'use client';

import { HelpCircle } from 'lucide-react';
import { faqItems } from '@/features/landing/utils';
import { FAQSection, IconButton3D } from '@/components/ui';

export const FAQ = () => {
  return (
    <div className='max-w-4xl mx-auto w-[90vw] min-h-[1024px] flex flex-col items-center justify-start'>
      <div className='flex justify-center mb-24'>
        <div className='text-center'>
          <IconButton3D
            icon={HelpCircle}
            className='text-primary hover:text-secondary transition-colors duration-300 mb-6'
          />
          <h2 className='text-4xl font-bold text-foreground mb-4'>
            Common{' '}
            <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
              Questions
            </span>
          </h2>
          <p className='text-foreground text-lg'>
            We believe in transparency. Here are the answers to some questions
            our clients frequently ask about growing their business online.
          </p>
        </div>
      </div>

      <FAQSection items={faqItems} />
    </div>
  );
};
