'use client';

import { motion } from 'framer-motion';
import { icons } from '@/features/services/socialMedia/utils';

// Duplicate icons to create seamless loop
const duplicatedIcons = [...icons, ...icons];

export const SocialIconsCarousel = () => {
  return (
    <div className='relative w-screenS overflow-hidden bg-transparent py-16'>
      <div className='relative'>
        {/* Left gradient mask */}
        <div className='absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-background-primary to-transparent z-10' />

        {/* Right gradient mask */}
        <div className='absolute right-0 top-0 w-[20%] h-full bg-gradient-to-l from-background-primary to-transparent z-10' />

        <motion.div
          className='flex whitespace-nowrap'
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedIcons.map((Icon, index) => (
            <div
              key={index}
              className='mx-12 inline-flex items-center justify-center'
            >
              <Icon size={40} className='text-primary/80' />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
