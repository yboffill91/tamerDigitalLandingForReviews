'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { leftImages, rightImages, testimonials } from '../utils';
import Image from 'next/image';
import { IconSpeakerphone } from '@tabler/icons-react';
import { LeadingSection } from '@/features/services/components';

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className='relative w-full overflow-hidden bg-gradient-to-b from-transparent to-primary/5 pb-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        {/* Left Floating Images */}
        {leftImages.map((image, index) => (
          <div
            key={index}
            className='absolute w-16 h-16 rounded-full overflow-hidden z-10'
            style={{
              left: index === 0 || index === 2 ? '15%' : '5%',
              top: index === 0 ? '15%' : index === 1 ? '50%' : '85%',
            }}
          >
            <Image
              src={image}
              alt='Customer'
              className='w-full h-full object-cover'
              width={1000}
              height={1000}
            />
          </div>
        ))}

        {/* Right Floating Images */}
        {rightImages.map((image, index) => (
          <div
            key={index}
            className='absolute w-16 h-16 rounded-full overflow-hidden z-10'
            style={{
              right: index === 0 || index === 2 ? '15%' : '5%',
              top: index === 0 ? '15%' : index === 1 ? '50%' : '85%',
            }}
          >
            <Image
              src={image}
              alt='Customer'
              className='w-full h-full object-cover'
              width={1000}
              height={1000}
            />
          </div>
        ))}

        {/* Section Header */}
        <div className='text-center mb-16 relative z-10'>
          <LeadingSection
            badgeText='Customer Reviews'
            heading='What our customers say'
            description='Discover how our keyword research service has helped businesses like yours achieve remarkable growth and success in their digital presence.'
            icon={IconSpeakerphone}
          />
        </div>

        {/* Testimonials */}
        <div className='relative max-w-3xl mx-auto'>
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='text-center'
          >
            {/* Stars */}
            <div className='flex justify-center  mb-6'>
              {[...Array(testimonials[currentTestimonial].rating)].map(
                (_, i) => (
                  <Star
                    key={i}
                    className='w-6 h-6 fill-yellow-500 text-yellow-500'
                  />
                )
              )}
            </div>

            {/* Testimonial Text */}
            <blockquote className='text-xl text-foreground/90 mb-8'>
              &quot;{testimonials[currentTestimonial].text}&quot;
            </blockquote>

            {/* Author Image */}
            <div className='mb-4'>
              <div className='w-20 h-20 rounded-full overflow-hidden mx-auto border-4 border-primary/20'>
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className='w-full h-full object-cover'
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            {/* Author Info */}
            <div className='mb-8'>
              <h4 className='text-foreground font-semibold text-lg'>
                {testimonials[currentTestimonial].name}
              </h4>
              <p className='text-foreground/80'>
                {testimonials[currentTestimonial].company}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className='flex justify-center gap-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Total Reviews */}
        <div className='mt-16 text-center'>
          <div className='flex items-center justify-center gap-2 mb-2'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className='w-5 h-5 fill-yellow-500 text-yellow-500'
              />
            ))}
            <span className='text-foreground font-semibold ml-2'>
              5.0 / 5.0
            </span>
          </div>
          <div className='text-6xl font-bold text-foreground mb-4'>2578</div>
          <a
            href='#'
            className='text-primary hover:text-secondary transition-colors font-medium inline-flex items-center'
          >
            TOTAL USER REVIEWS
            <svg
              className='w-4 h-4 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
