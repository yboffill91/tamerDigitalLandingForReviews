'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../utils';

export const ContentMarketingFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className='max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-32'>
      <div className='flex flex-col lg:flex-row gap-16'>
        {/* Left side - Title */}
        <div className='lg:w-1/3'>
          <div className='sticky top-8'>
            <div className='inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/30 gap-x-1.5'>
              <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
              Support
            </div>
            <h2 className='text-3xl font-bold  mt-6 mb-6'>
              Frequently Asked Questions
            </h2>
            <p className='text-foreground/80 mb-8'>
              Everything you need to know about our content marketing services
              and process.
            </p>
            <button className='bg-primary  px-6 py-3 rounded-lg hover:bg-ring transition-colors flex items-center gap-2'>
              <span>I Have More Questions</span>
              <Plus className='w-4 h-4' />
            </button>
          </div>
        </div>

        {/* Right side - FAQs */}
        <div className='lg:w-2/3'>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='border-b border-foreground/20 last:border-0'
              >
                <button
                  className='flex w-full items-center justify-between py-6 text-left'
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className='text-lg font-medium '>{faq.question}</span>
                  <Plus
                    className={`h-5 w-5 text-primary transition-transform ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className='pb-6 text-foreground/80'>{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

