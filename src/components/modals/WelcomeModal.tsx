'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShimmerButton, ShineBorder } from '../ui';
import { ShineColors } from '@/lib';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black/90 backdrop-filter backdrop-blur-sm flex justify-center items-center z-50 p-4'
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 500 }}
            className='bg-card relative rounded-lg p-6 max-w-4xl w-full max-h-screen overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            <ShineBorder
              className='hidden md:block'
              shineColor={ShineColors}
              borderWidth={1}
            />
            <div className='flex justify-end'>
              <ShimmerButton variant='ghost' onClick={onClose}>
                ✕
              </ShimmerButton>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
