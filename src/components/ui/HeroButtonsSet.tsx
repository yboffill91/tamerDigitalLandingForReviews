'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HoverBorderGradient, ShimmerButton } from '@/components/ui';

interface HeroButtonsSetProps {
  firstBtnText: string;
  firstBtnLink?: string;
  secondBtnText: string;
  secondBtnLink?: string;
  isCentered?: boolean;
  accentColor?: string;
  variant?: 'blue' | 'green';
}

export const HeroButtonsSet = ({
  firstBtnText,
  firstBtnLink = '#',
  secondBtnText,
  secondBtnLink = '#',
  isCentered = false,
  variant = 'blue',
}: HeroButtonsSetProps) => {
  return (
    <motion.div
      className={`flex flex-wrap gap-2  justify-center ${
        !isCentered && 'lg:justify-start'
      } `}
      animate={{
        opacity: [0, 1],
        y: [10, 0],
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
        delay: 0.7,
      }}
    >
      <Link href={firstBtnLink} className=''>
        <HoverBorderGradient
          containerClassName='rounded-lg  w-full sm:w-auto text-center '
          className='bg-background-primary/70 backdrop-blur-xl backdrop-filter flex items-center justify-center hover:bg-card/10  w-full sm:w-auto h-10 '
          colorVariant={variant}
        >
          <span>{firstBtnText}</span>
        </HoverBorderGradient>
      </Link>
      <Link href={secondBtnLink} className='group '>
        <ShimmerButton
          variant={variant === 'green' ? 'solidGreen' : 'solid'}
          className={`group w-full h-full text-md py-2 `}
        >
          {secondBtnText}
        </ShimmerButton>
      </Link>
    </motion.div>
  );
};
