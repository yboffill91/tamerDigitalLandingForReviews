'use client';
import { motion } from 'framer-motion';
import { StarRating } from '@/features/services/socialMedia/components/ui';
import { ReactNode } from 'react';

interface ReviewPlatformProps {
  logo: ReactNode | null;
  rating: string;
  description: string;
}

export const ReviewPlatform = ({
  logo,
  rating,
  description,
}: ReviewPlatformProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className='bg-[#1C1C1C] rounded-lg p-6 border border-ring/10 flex flex-col items-center justify-center min-h-[250px]'
  >
    <div className='mb-3 text-foreground text-3xl font-bold'>{logo}</div>
    <div className='text-4xl font-bold mb-2 text-foreground'>{rating}</div>
    <StarRating />
    <p className='text-foreground/80 text-sm mt-3 text-center'>{description}</p>
  </motion.div>
);
