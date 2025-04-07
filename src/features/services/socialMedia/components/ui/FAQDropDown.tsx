'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '@/features/services/socialMedia/utils';
import { useState } from 'react';

export const FaqDropdown = ({ question, answer }: FaqItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border border-ring rounded-xl mb-4 overflow-hidden bg-card backdrop-blur-sm'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full px-6 py-5 flex justify-between items-center text-left'
      >
        <span className='font-semibold text-foreground'>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className='text-primary'
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='overflow-hidden'
          >
            <div className='px-6 pb-5 text-foreground'>{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
