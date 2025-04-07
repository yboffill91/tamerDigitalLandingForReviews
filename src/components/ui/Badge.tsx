'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import Link from 'next/link';

export const Badge = ({
  text,
  link = '#',
  icon: Icon = Globe2,
  promo = 'New',
}: {
  text: string;
  icon?: React.ElementType;
  link?: string;
  promo?: string;
}) => {
  return (
    <Link
      href={link}
      className='bg-card no-underline group mb-8 cursor-pointer relative shadow-2xl shadow-ring/10 rounded-full p-px text-xs font-semibold leading-6 inline-block'
    >
      <span className='absolute inset-0 overflow-hidden rounded-full'>
        <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(19,137,253,0.6)_0%,rgba(135,206,251,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></span>
      </span>
      <div className='relative flex space-x-2 items-center z-10 rounded-full bg-card py-0.5 px-4 ring-1 ring-ring/10'>
        <Icon className='w-4 h-4 text-primary' />
        <span className='text-[.6rem] sm:text-base'>{text}</span>
        <span className='text-primary flex items-center gap-1'>
          {promo}
          <motion.svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <motion.path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M10.75 8.75L14.25 12L10.75 15.25'
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            ></motion.path>
          </motion.svg>
        </span>
      </div>
      <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-primary/5 via-secondary to-primary/5 transition-opacity duration-500 group-hover:opacity-40'></span>
    </Link>
  );
};
