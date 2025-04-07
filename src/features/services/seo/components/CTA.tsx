'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ShimmerButton } from '@/components/ui';

export function CTA() {
  return (
    <div className='relative w-full py-24 md:py-32 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='relative bg-gradient-to-b from-background-primary/10 to-ring/20 rounded-[32px] p-12 md:p-20 overflow-hidden backdrop-blur-sm border border-ring/20/50 group'>
          {/* Background gradient blob */}
          <div className='absolute top-0 right-0 w-[800px] h-[800px] bg-primary/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse' />

          {/* Modern decorative icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring' }}
            className='absolute top-12 right-12 md:top-20 md:right-20'
          >
            <div className='relative w-24 h-24 md:w-32 md:h-32'>
              {/* Outer ring */}
              <div className='absolute inset-0 rounded-full border-4 border-primary/30 animate-[spin_10s_linear_infinite]' />

              {/* Middle ring with gradient */}
              <div className='absolute inset-2 rounded-full border-4 border-primary animate-[spin_8s_linear_infinite_reverse]' />

              {/* Inner circle with pulse */}
              <div className='absolute inset-4 rounded-full bg-primary animate-pulse flex items-center justify-center'>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  className='w-12 h-12 md:w-16 md:h-16 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                    stroke='currentColor'
                    strokeWidth='2'
                  />
                  <path
                    d='M7.5 12.5L10.5 15.5L16.5 9.5'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          <div className='relative'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='max-w-3xl'
            >
              <h2 className=' mb-6'>
                Ready to Transform
                <br />
                Your Technical SEO?
              </h2>

              <p className='text-lg text-foreground/80 mb-12 max-w-xl'>
                Schedule your{' '}
                <span className='text-ring font-medium'>free consultation</span>{' '}
                now and discover how our technical expertise can boost your
                search rankings by an average of 312% in 90 days.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center'>
                <ShimmerButton variant='solid' className='gap-2 group'>
                  Book Your Free Audit
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </ShimmerButton>

                <div className='flex items-center gap-3'>
                  <p className='text-sm text-foreground/70'>
                    30-minute strategy session
                    <br />
                    Actionable insights guaranteed
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className='mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8'>
            {[
              { value: '312%', label: 'Average Traffic Increase' },
              { value: '90', label: 'Days to See Results' },
              { value: '100%', label: 'Satisfaction Guaranteed' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='text-center'
              >
                <div className='text-3xl font-bold text-primary mb-2'>
                  {stat.value}
                </div>
                <div className='text-sm text-foreground/80'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
