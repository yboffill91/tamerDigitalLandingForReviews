'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib';
import { faqs } from '@/features/services/offPageSeo/utils';
import { QueueListIcon } from '@heroicons/react/24/outline';
import { LeadingSection } from '@/features/services/components';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className='relative w-full overflow-hidden'>
      <div className='max-w-4xl mx-auto px-4'>
        <LeadingSection
          badgeText='FAQ'
          heading='Common Concerns About Off-Page SEO'
          description="Let's address the key questions you might have about investing in off-page SEO and building your site's authority."
          icon={QueueListIcon}
        />

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='bg-card border border-ring/10 rounded-lg overflow-hidden'
            >
              <button
                className='w-full px-6 py-4 text-left flex items-center justify-between'
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className='text-foreground font-medium'>
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-primary transition-transform duration-200',
                    openIndex === index ? 'rotate-180' : ''
                  )}
                />
              </button>
              <div
                className={cn(
                  'px-6 transition-all duration-200 ease-in-out',
                  openIndex === index
                    ? 'py-4 border-t border-ring/10'
                    : 'max-h-0 overflow-hidden'
                )}
              >
                <p className='text-foreground/80'>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
