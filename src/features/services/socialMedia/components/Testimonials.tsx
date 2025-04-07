'use client';

import React from 'react';
import { ChevronRight, Speaker } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ReviewPlatform,
  StarRating,
  TestimonialImage,
} from '@/features/services/socialMedia/components/ui';
import {
  testimonialImages,
  writtenTestimonials,
} from '@/features/services/socialMedia/utils';
import { IconButton3D } from '@/components/ui';
import Link from 'next/link';

export function Testimonials() {
  return (
    <section className='relative w-full  overflow-hidden'>
      <div className='container mx-auto px-4'>
        {/* Header Section */}

        <div className='flex flex-col items-start'>
          <IconButton3D icon={Speaker} className='mb-8' />
          <div className='flex justify-between items-center mb-12 w-full'>
            <h2 className='text-2xl md:text-3xl font-bold text-foreground'>
              Hear from our
              <br />
              happy customers.
            </h2>
            <Link href='$'>
              <motion.div
                className='flex items-center text-primary hover:text-secondary transition-colors'
                whileHover={{ x: 5 }}
              >
                <span className='mr-1'>See more customers</span>
                <ChevronRight size={18} />
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Client Images */}
        <div className='mb-16'>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
            {testimonialImages.map((client, index) => (
              <TestimonialImage
                key={index}
                testimonialImage={client}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Demo and Review Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
          {/* Demo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='bg-[#1C1C1C] text-foreground p-8 rounded-lg border border-ring/10'
          >
            <div className='inline-block bg-primary/20 text-secondary text-sm px-3 py-1 rounded-full mb-6'>
              Join Our Family
            </div>
            <h3 className='text-3xl font-bold mb-4'>
              Ready to Transform Your Social Media?
            </h3>
            <p className='mb-6 text-foreground/80'>
              Take the first step towards extraordinary growth. Join our family
              of successful businesses and let&apos;s create something amazing
              together.
            </p>
            <button className='bg-primary text-foreground font-medium px-6 py-3 rounded-full hover:bg-ring transition-colors'>
              Join our growing family
            </button>
          </motion.div>

          {/* G2 Reviews */}
          <ReviewPlatform
            logo={<div className='text-green-500'>Trustpilot</div>}
            rating='4.8'
            description='Average review on Trustpilot, trusted by millions'
          />

          {/* Google Reviews */}
          <ReviewPlatform
            logo={
              <div className='flex items-center gap-1 text-3xl'>
                <span className='text-primary'>G</span>
                <span className='text-red-500'>o</span>
                <span className='text-yellow-500'>o</span>
                <span className='text-primary'>g</span>
                <span className='text-green-500'>l</span>
                <span className='text-red-500'>e</span>
              </div>
            }
            rating='4.9'
            description='Average rating from our Google reviews'
          />
        </div>

        {/* Written Testimonials */}
        <div>
          <h3 className='text-2xl font-bold mb-8 text-foreground'>
            Client Success Stories
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {writtenTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-[#1C1C1C] p-6 rounded-lg border border-ring/10'
              >
                <h4 className='text-xl font-bold text-primary mb-2'>
                  {testimonial.title}
                </h4>
                <StarRating variant='yellow' />
                <p className='my-4 text-foreground/80'>
                  &quot;{testimonial.content}&quot;
                </p>
                <div className='flex items-center'>
                  <div className='relative size-12 rounded-full overflow-hidden mr-4'>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <p className='font-semibold text-foreground'>
                      {testimonial.author}
                    </p>
                    <p className='text-sm text-foreground/80'>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
