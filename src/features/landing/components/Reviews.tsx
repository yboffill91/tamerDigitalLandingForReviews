'use client';

import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { reviews } from '@/features/landing/utils';

function ReviewsHeader() {
  return (
    <section className='py-2'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mb-8'
          >
            <IconButton3D icon={Star} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-4xl font-bold text-foreground mb-6'
          >
            Trusted by Growing Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-foreground/70 max-w-3xl mx-auto text-lg'
          >
            Join hundreds of businesses that have transformed their digital
            presence and achieved exceptional growth. Our proven strategies have
            helped companies like yours increase revenue by an average of 285%.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function ReviewsCarousel() {
  const [mounted, setMounted] = useState(false);
  const duplicatedReviews = [...reviews, ...reviews];
  const reversedReviews = [...duplicatedReviews].reverse();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className='relative overflow-hidden'>
      {/* Semicircle shadow at bottom */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]'>
        <div className='absolute bottom-0 w-full h-full bg-primary/10 blur-3xl rounded-t-full opacity-30' />
      </div>

      {/* Reviews Rows */}
      <div className='space-y-8 overflow-hidden'>
        {/* Row 1 - Moving Left */}
        <div className='relative'>
          <div className='flex gap-6 animate-scroll-left'>
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}-left`}
                className='flex-shrink-0 w-[400px] p-6 bg-card/30 backdrop-blur-sm border border-ring/10 rounded-xl'
              >
                <div className='flex items-center gap-4 mb-4'>
                  <Image
                    src={review.image}
                    alt={review.author}
                    className='w-12 h-12 rounded-full object-cover'
                    width={3000}
                    height={3000}
                  />
                  <div>
                    <div className='font-medium text-foreground'>
                      {review.author}
                    </div>
                    <div className='text-sm text-foreground/70'>
                      {review.role}
                    </div>
                  </div>
                </div>
                <div className='flex gap-1 mb-3'>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 text-primary fill-primary'
                    />
                  ))}
                </div>
                <p className='text-foreground/60'>{review.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className='relative'>
          <div className='flex gap-6 animate-scroll-right'>
            {reversedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}-right`}
                className='flex-shrink-0 w-[400px] p-6 bg-gard/30 backdrop-blur-sm border border-ring/10 rounded-xl'
              >
                <div className='flex items-center gap-4 mb-4'>
                  <Image
                    src={review.image}
                    alt={review.author}
                    className='w-12 h-12 rounded-full object-cover'
                    width={3000}
                    height={3000}
                  />
                  <div>
                    <div className='font-medium text-foreground'>
                      {review.author}
                    </div>
                    <div className='text-sm text-foreground/70'>
                      {review.role}
                    </div>
                  </div>
                </div>
                <div className='flex gap-1 mb-3'>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 text-primary fill-primary'
                    />
                  ))}
                </div>
                <p className='text-foreground/60'>{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <>
      <ReviewsHeader />
      <div className='pt-6'>
        <ReviewsCarousel />
      </div>
    </>
  );
}
