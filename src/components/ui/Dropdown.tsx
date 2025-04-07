'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ShimmerButton } from '.';

interface DropdownProps {
  title: string;
  children: ReactNode;
}

export const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ShimmerButton
        variant='ghost'
        className='inline-flex items-center gap-1 hover:text-primary py-2 text-base'
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 opacity-50 ${
            isOpen && 'rotate-180 transition-transform duration-300 ease-in-out'
          }`}
        />
      </ShimmerButton>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-x-0 top-16 !z-50'
          >
            <div className='relative mx-auto max-w-7xl px-4'>
              <div className='absolute left-1/2 -translate-x-1/2 w-full top-0'>
                <div className='bg-card rounded-xl border border-ring/10 shadow-xl p-8'>
                  {children}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
