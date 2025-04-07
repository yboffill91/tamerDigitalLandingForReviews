import { motion } from 'framer-motion';
import React from 'react';

export const CardHoverTopBorder = ({
  index = 0,
  children,
  className,
}: {
  index: number;
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <motion.div
      key={index}
      className={`flex flex-col gap-4 group cursor-pointer transition-all duration-300 hover:-translate-y-1 relative p-px bg-card  rounded-lg  ${className}`}
      animate={{
        opacity: [0, 1],
        y: [50, 0],
        transition: {
          duration: 1,
          ease: 'easeInOut',
          delay: 0.2 + index * 0.2,
        },
      }}
    >
      {/* Hover border effect */}
      <div className='absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-primary rounded-tl-lg opacity-0 group-hover:w-24 group-hover:h-32 group-hover:opacity-100 transition-all duration-300 ease-in-out' />

      <div className='flex items-center gap-3 mb-4 '>{children}</div>
    </motion.div>
  );
};
