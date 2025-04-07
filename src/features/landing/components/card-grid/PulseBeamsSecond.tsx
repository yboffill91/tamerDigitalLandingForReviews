'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { grad1, grad2, grad3, grad4, grad5 } from './animations';

export const PulseBeamsSecond = () => {
  return (
    <div className='flex h-full relative items-center justify-center antialiased overflow-hidden'>
      <button className='w-[180px] z-40 h-[50px] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg text-xs font-semibold leading-6 inline-block overflow-hidden border border-primary'>
        <div className='relative flex justify-center w-full text-center h-full items-center z-10 rounded-lg bg-[#2C2C2C]'>
          <span className='text-xl text-gray-400'>Connect</span>
        </div>
      </button>
      {/* Core SVGs component */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <SVGs />
      </div>
    </div>
  );
};

export const SVGs = () => {
  return (
    <svg
      width='858'
      height='434'
      viewBox='0 0 858 434'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='flex flex-shrink-0 scale-[0.45] absolute'
    >
      <path
        d='M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5'
        stroke='#2C2C2C'
      />
      <path
        d='M568 200H841C846.523 200 851 195.523 851 190V40'
        stroke='#2C2C2C'
      />
      <path
        d='M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5'
        stroke='#2C2C2C'
      />
      <path
        d='M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427'
        stroke='#2C2C2C'
      />
      <path d='M380 168V17C380 11.4772 384.477 7 390 7H414' stroke='#2C2C2C' />

      {/* Gradient Beams */}

      <path
        d='M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5'
        stroke='url(#grad1)'
        strokeWidth='6'
      />
      <path
        d='M568 200H841C846.523 200 851 195.523 851 190V40'
        stroke='url(#grad2)'
        strokeWidth='6'
      />
      <path
        d='M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5'
        stroke='url(#grad3)'
        strokeWidth='6'
      />
      <path
        d='M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427'
        stroke='url(#grad4)'
        strokeWidth='6'
      />
      <path
        d='M380 168V17C380 11.4772 384.477 7 390 7H414'
        stroke='url(#grad5)'
        strokeWidth='6'
      />

      <defs>
        <motion.linearGradient
          variants={grad5}
          animate='animate'
          initial='initial'
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id='grad5'
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad1}
          animate='animate'
          initial='initial'
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id='grad1'
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad2}
          animate='animate'
          initial='initial'
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id='grad2'
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad3}
          animate='animate'
          initial='initial'
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id='grad3'
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad4}
          animate='animate'
          initial='initial'
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id='grad4'
        >
          <GradientColors />
        </motion.linearGradient>
      </defs>
      <circle
        cx='851'
        cy='34'
        r='8'
        fill='#3C3C3C'
        stroke='#4C4C4C'
        strokeWidth='2'
      />
      <circle
        cx='770'
        cy='427'
        r='8'
        fill='#3C3C3C'
        stroke='#4C4C4C'
        strokeWidth='2'
      />
      <circle
        cx='142'
        cy='427'
        r='8'
        fill='#3C3C3C'
        stroke='#4C4C4C'
        strokeWidth='2'
      />
      <circle
        cx='6.5'
        cy='398.5'
        r='8'
        fill='#3C3C3C'
        stroke='#4C4C4C'
        strokeWidth='2'
      />
      <circle
        cx='420.5'
        cy='6.5'
        r='8'
        fill='#3C3C3C'
        stroke='#4C4C4C'
        strokeWidth='2'
      />
      <path
        strokeWidth='2'
        stroke='#2C2C2C'
        d='M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5'
      />
      <path
        strokeWidth='2'
        stroke='#2C2C2C'
        d='M568 200H841C846.523 200 851 195.523 851 190V40'
      />
      <path
        strokeWidth='2'
        stroke='#2C2C2C'
        d='M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5'
      />
      <path
        strokeWidth='2'
        stroke='#2C2C2C'
        d='M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427'
      />
      <path
        strokeWidth='2'
        stroke='#2C2C2C'
        d='M380 168V17C380 11.4772 384.477 7 390 7H414'
      />
    </svg>
  );
};
const GradientColors = () => {
  return (
    <>
      <stop stopColor='#1389FD' stopOpacity='0'></stop>
      <stop stopColor='#1389FD'></stop>
      <stop offset='0.325' stopColor='#87CEFB'></stop>
      <stop offset='1' stopColor='#87CEFB' stopOpacity='0'></stop>
    </>
  );
};
