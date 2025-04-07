'use client';
import React from 'react';
import { SolutionTip } from '../../utils';
import { motion } from 'framer-motion';

export const Tips = ({ icon: IconElement, title, tip }: SolutionTip) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='space-y-3 text-center'
    >
      <div className='flex items-center gap-3 justify-center'>
        <div className='flex-shrink-0 p-2 bg-primary/20 rounded-full'>
          <IconElement className='w-5 h-5 text-primary' />
        </div>
        <h3 className='text-xl text-foreground font-medium'>{title}</h3>
      </div>
      <div>
        <p className='text-foreground/80 leading-relaxed'>{tip}</p>
      </div>
    </motion.div>
  );
};
