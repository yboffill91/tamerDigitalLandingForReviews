'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';

interface IndustriesCardProps {
  index: number;
  length?: number;
  name: string;
  description?: string;
  icon: LucideIcon | IconType;
  isSecondaryCard?: boolean;
  variant?: 'blue' | 'green';
}

export const IndustriesCard = ({
  index,
  length = 1,
  name,
  // description,
  icon: IconElement,
  // isSecondaryCard = false,
  // variant = 'blue',
}: IndustriesCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: (length + index) * 0.05,
      }}
      className='group relative'
    >
      <div
        // className={`relative gap-2 w-64 flex  items-center justify-start py-4 px-2 rounded-xl  ${
        //   isSecondaryCard
        //     ? 'bg-ring/10 text-ring border border-ring/10'
        //     : variant === 'green'
        //     ? 'bg-gradient-to-tr from-emerald-400/5 via-secondary-green/10 to-emerald-700/5  border border-secondary-green/10 text-secondary-green'
        //     : 'bg-gradient-to-tr from-ring/10 via-primary/5 to-secondary/10 text-primary border border-ring/10'
        // }  transition-all duration-300 overflow-hidden group-hover:scale-105`}
        className='flex items-center justify-start gap-4 w-72 py-2 group'
      >
        {/* <div className='absolute inset-0 bg-gradient-to-r from-primary/0 via-black dark:via-white to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-200' /> */}
        <IconElement className='size-6 ' />
        <p className=' text-md font-medium text-center'>{name}</p>
        {/* <div className='absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-3xl backdrop-filter opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-3'>
          <p className='text-white text-sm text-center'>
            {description ? description : name}
          </p>
        </div> */}
      </div>
    </motion.div>
  );
};
