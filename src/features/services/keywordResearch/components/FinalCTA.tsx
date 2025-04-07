'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { ShimmerButton } from '@/components/ui';
import { FaCheck } from 'react-icons/fa';
import { LeadingSection } from '../../components';

export function FinalCTA() {
  return (
    <div className='relative w-full pb-14 overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-shine'></div>

      {/* Glowing orbs */}
      <div className='absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute bottom-1/2 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <div className='text-center mb-12'>
          <LeadingSection
            badgeText='Take Action Now'
            description='Schedule your free strategy session now and discover how our proven keyword research process can help you attract more qualified leads and grow your business.'
            heading='Ready to Transform Your Search Visibility?'
            icon={FaCheck}
          />
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Left side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='space-y-6'
          >
            <h3 className='text-2xl font-bold text-foreground mb-8'>
              What You&apos;ll Get in Your Free Session:
            </h3>
            {[
              'Comprehensive analysis of your current keyword strategy',
              'Identification of untapped ranking opportunities',
              'Custom action plan tailored to your business goals',
              'Clear roadmap for implementing winning strategies',
              'ROI projection based on your market potential',
            ].map((benefit, index) => (
              <div key={index} className='flex items-start gap-4'>
                <div className='flex-shrink-0'>
                  <CheckCircle className='w-6 h-6 text-primary' />
                </div>
                <p className='text-foreground/90'>{benefit}</p>
              </div>
            ))}
          </motion.div>

          {/* Right side - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className='relative'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-ring/10 rounded-xl blur-xl'></div>
            <div className='relative bg-card/90 backdrop-blur-xl p-8 rounded-2xl  border-ring border-2 flex justify-center flex-col'>
              <div className='flex items-center justify-start gap-4 mb-8'>
                <div className='w-12 h-12 rounded-full bg-ring flex items-center justify-center'>
                  <Calendar className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h3 className=' font-semibold text-foreground'>
                    Book Your Free Strategy Session
                  </h3>
                  <p className='text-foreground/80'>30-minute consultation</p>
                </div>
              </div>

              <ShimmerButton variant='solid' className='mx-auto group'>
                Schedule Now
                <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
              </ShimmerButton>

              <p className='text-center text-foreground/80 text-sm mt-6'>
                No credit card required • 100% free consultation
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
