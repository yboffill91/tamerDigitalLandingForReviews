'use client'
import { motion } from 'framer-motion';

export const SVG = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='inline-block h-14 w-14 stroke-white stroke-[1px]'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='#ffffff'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <motion.path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <motion.path
        initial={{
          pathLength: 0,
          fill: '#3b82f6',
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          fill: '#3b82f6',
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
          repeatDelay: 0.5,
        }}
        d='M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11'
      />
    </svg>
  );
};
