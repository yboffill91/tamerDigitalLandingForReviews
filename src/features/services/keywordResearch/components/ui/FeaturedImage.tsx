'use client';

import { cn } from '@/lib';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FeaturedImage } from '@/features/services/keywordResearch/utils';
export const FeaturedImages = ({
  className,
  containerClassName,
  images,
}: {
  textClassName?: string;
  className?: string;
  showStars?: boolean;
  containerClassName?: string;
  images: FeaturedImage[];
}) => {
  return (
    <div className={cn('flex flex-col items-center ', containerClassName)}>
      <div
        className={cn(
          'flex flex-col sm:flex-row items-center justify-center mb-2',
          className
        )}
      >
        <div className='flex flex-row items-center mb-4 sm:mb-0'>
          {images.map((image) => (
            <div className='-mr-4  relative group' key={image.name}>
              <div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    zIndex: 30,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className='rounded-full overflow-hidden border-2  border-foreground  relative'
                >
                  <Image
                    height={100}
                    width={100}
                    unoptimized
                    src={image.src}
                    alt={image.name}
                    className='object-cover object-top md:h-14 md:w-14 h-8 w-8 bg-card'
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
