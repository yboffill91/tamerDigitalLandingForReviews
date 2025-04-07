'use client';

import { cn } from '@/lib';
import {
  animate,
  AnimatePresence,
  motion,
  stagger,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { testimonials } from '@/features/services/seoAuditServices/utils';
import Image from 'next/image';

interface FeaturedImagesProps {
  textClassName?: string;
  className?: string;
  showStars?: boolean;
  containerClassName?: string;
}

export const FeaturedImages: React.FC<FeaturedImagesProps> = ({
  textClassName,
  className,
  showStars = false,
  containerClassName,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent) => {
    const halfWidth = (event.currentTarget as HTMLElement).offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  useEffect(() => {
    animate(
      '.animation-container',
      {
        scale: [1.1, 1, 0.9, 1],
        opacity: [0, 1],
      },
      { duration: 0.4, delay: stagger(0.1) }
    );
  }, []);

  return (
    <div className={cn('flex flex-col items-center gap-4', containerClassName)}>
      <div className='flex justify-center'>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={
              showStars
                ? 'h-4 w-4 fill-yellow-400 text-yellow-400 mx-1'
                : 'hidden'
            }
          />
        ))}
      </div>
      <div
        className={cn(
          'flex flex-col sm:flex-row items-center justify-center mb-2',
          className
        )}
      >
        <div className='flex flex-row items-center mb-4 sm:mb-0'>
          {testimonials.map((testimonial, idx) => (
            <div
              className='-mr-4 relative group'
              key={testimonial.name}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 160,
                        damping: 20,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,
                      whiteSpace: 'nowrap',
                    }}
                    className='absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-neutral-900 z-50 shadow-[0_4px_20px_-2px_rgba(59,130,246,0.3)] px-4 py-2'
                  >
                    <div className='absolute inset-x-0 z-30 w-[20%] mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px' />
                    <div className='absolute inset-x-0 w-[70%] mx-auto z-30 -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px' />
                    <div className='text-neutral-300 text-xs px-2 py-1 rounded-sm bg-neutral-950'>
                      {testimonial.designation}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className='animation-container'>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    rotate: `${Math.random() * 15 - 5}deg`,
                    scale: 1,
                    opacity: 1,
                  }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 30,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className='rounded-2xl overflow-hidden border-2 border-blue-500/20 relative shadow-[0_2px_10px_-2px_rgba(59,130,246,0.3)]'
                >
                  <Image
                    onMouseMove={handleMouseMove}
                    height={100}
                    width={100}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='object-cover object-top h-14 w-14'
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p
        className={cn(
          'text-center text-neutral-200 font-medium',
          textClassName
        )}
      >
        5/5 Rated by{' '}
        <span className='heading-gradient font-bold'>+100 People</span>
      </p>
    </div>
  );
};
