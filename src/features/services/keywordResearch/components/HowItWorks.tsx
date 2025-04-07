'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { steps } from '../utils';
import { FaLyft } from 'react-icons/fa';
import { LeadingSection } from '@/features/services/components';

export function HowItWorks() {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        {/* Section Header */}
        <LeadingSection
          badgeText='Simple Process'
          heading='How it works - 3 easy steps'
          description='Our streamlined process takes you from initial consultation to implementing a winning keyword strategy that drives real business results.'
          icon={FaLyft}
        />

        {/* Steps */}
        <div className='relative px-4'>
          {/* Steps Container */}
          <div className='relative grid grid-cols-1 md:grid-cols-3 gap-8'>
            {steps.map((step, index) => (
              <div key={step.number} className='relative'>
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className='absolute hidden md:block top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-primary/20'></div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className='relative text-center z-10'
                >
                  {/* Step Number */}
                  <div className='text-4xl font-bold text-primary mb-6'>
                    {step.number}
                  </div>

                  {/* Icon Container */}
                  <div className='relative mx-auto mb-8'>
                    {/* Icon Circle */}
                    <div className='relative w-24 h-24 mx-auto flex items-center justify-center'>
                      <step.icon className='w-12 h-12 text-primary' />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='text-center'>
                    <h3 className='text-2xl font-bold text-foreground mb-3'>
                      {step.title}
                    </h3>
                    <p className='text-foreground/80 max-w-sm mx-auto'>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
