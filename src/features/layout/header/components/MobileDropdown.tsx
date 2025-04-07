'use client';
import React, { useState } from 'react';
import { ShimmerButton } from '@/components/ui';
import { ChevronDownIcon, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { SERVICE, TOOL } from '@/features/layout/header/utils';
import { IconType } from 'react-icons';
import { AnimatePresence, motion } from 'framer-motion';

interface MobileDropdownProps {
  link: string;
  list: TOOL[] | SERVICE[];
  icon: LucideIcon | IconType;
}

export const MobileDropdown = ({
  link,
  list,
  icon: IconElement,
}: MobileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='flex flex-col w-full '>
      <ShimmerButton
        variant='ghost'
        onClick={clickHandle}
        className='gap-2 py-3 px-5 py=2 w-full items-start justify-between '
      >
        <span className='flex gap-2 items-center justify-center'>
          <IconElement className='size-4 text-foreground' />
          {link}
        </span>
        <ChevronDownIcon
          className={`${
            isOpen ? 'rotate-180' : ''
          } transition-all duration-300 ease-in-out text-foreground size-4`}
        />
      </ShimmerButton>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='bg-card/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4 rounded-xl border  border-ring/10'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {list.map(({ icon: IconElement, name, href, status }) => (
              status && (
                <Link key={href + name + IconElement.toString()} href={href}>
                <ShimmerButton
                  variant='ghost'
                  className='gap-2 w-full items-start justify-start mb-2'
                >
                  <IconElement className='size-4 text-foreground ' />
                  <span>{name}</span>
                </ShimmerButton>
              </Link>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
