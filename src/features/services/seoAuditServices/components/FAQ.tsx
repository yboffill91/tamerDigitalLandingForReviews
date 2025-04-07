'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { faqs } from '@/features/services/seoAuditServices/utils';
import { FAQItem } from '@/features/services/seoAuditServices/components/ui';
import { BsQuestionDiamond } from 'react-icons/bs';
import { ShimmerButton } from '@/components/ui';
import Image from 'next/image';
import { LeadingSection } from '@/features/services/components';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className='w-full mb-12 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <LeadingSection
          badgeText='Common Questions'
          description='Get answers to common questions about our SEO audit process and how
            it can help your business grow.'
          heading='Frequently Asked Questions'
          icon={BsQuestionDiamond}
        />

        <div className='flex flex-col md:flex-row gap-12'>
          <div className='md:w-1/3'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='sticky top-24'
            >
              <div className='space-y-4'>
                <p className='text-lg font-medium '>Still have questions?</p>
                <ShimmerButton variant='solid'>
                  Chat with our Experts
                </ShimmerButton>
                <div className='mt-8'>
                  <p className=' text-sm mb-2'>Contact our SEO experts!</p>
                  <p className='text-sm text-foreground/70'>
                    We&apos;re here to help you succeed.
                  </p>
                  <div className='flex -space-x-2 mt-4'>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className='relative inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-ring/20 bg-card'
                      >
                        <Image
                          src={`https://i.pravatar.cc/32?img=${i}`}
                          alt={`Team member ${i}`}
                          className='h-full w-full rounded-full object-cover'
                          width={1200}
                          height={1200}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className='md:w-2/3'>
            <div className='rounded-lg bg-card p-6'>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
