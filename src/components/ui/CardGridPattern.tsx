import { motion } from 'framer-motion';
import React from 'react';
import { Grid } from './GridPattern';

export const CardGridPattern = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className='group/feature relative'
    >
      <div
        className={`
                flex flex-col lg:border-r border-ring/10 py-10 px-6 relative md:min-h-[420px] h-auto
                bg-gradient-to-b from-background-primary to-primary/10 overflow-hidden cursor-pointer
                ${(index === 0 || index === 4) && 'lg:border-l'}
                ${index < 4 && 'lg:border-b'}
              `}
      >
        {/* Grid Pattern */}
        <Grid />

        {/* Hover Gradients */}
        {index < 4 && (
          <div className='absolute inset-0 h-full w-full bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover/feature:opacity-100 transition-opacity duration-700' />
        )}
        {index >= 4 && (
          <div className='absolute inset-0 h-full w-full bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover/feature:opacity-100 transition-opacity duration-700' />
        )}

        {children}
      </div>
    </motion.div>
  );
};
