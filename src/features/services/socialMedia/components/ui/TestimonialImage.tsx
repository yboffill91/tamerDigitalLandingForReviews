'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TestimonilaImage } from '../../utils';

export const TestimonialImage = ({
  testimonialImage,
  index,
}: {
  testimonialImage: TestimonilaImage;
  index: number;
}) => (
  <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='relative rounded-lg overflow-hidden shadow-md group'
    >
      <div className='aspect-video'>
        <Image
          src={testimonialImage.image}
          alt={`${name} testimonial`}
          height={1024}
          width={1024}
          className='object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full'
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'>
        <div className='absolute bottom-0 left-0 right-0 p-4'>
          <p className='text-foreground text-sm font-medium'>
            {testimonialImage.personName}
          </p>
        </div>
      </div>
    </motion.div>
  </>
);
