'use client';

import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ShimmerButton } from '@/components/ui';
import { usePathname } from 'next/navigation';
import { NAVCONFIG, services, tools } from '@/features/layout/header/utils';
import { HeaderButtons } from './HeaderButtons';
import { MobileDropdown } from './MobileDropdown';
import { FaTools } from 'react-icons/fa';
import { MapPin, Server } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className='xl:hidden'>
      <ShimmerButton
        variant='ghost'
        onClick={() => setIsOpen(!isOpen)}
        className='p-1.5 focus:outline-none text-foreground/80'
        aria-label='Toggle menu'
      >
        {isOpen ? (
          <XMarkIcon className='size-6 text-foreground' />
        ) : (
          <Bars3Icon className='size-6 text-foreground' />
        )}
      </ShimmerButton>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='absolute left-4 right-4 top-[calc(100%+1rem)] bg-card rounded-xl border border-ring/10 shadow-xl p-8 max-h-[80vh] overflow-y-auto'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className='inline-flex gap-2 items-baseline  px-2 py-1 w-full  justify-center text-lg'>
              <MapPin />
              <p>
                You are now on{' '}
                <span className='capitalize'>
                  {' '}
                  {pathname === '/' ? 'home' : pathname.split('/')}
                </span>{' '}
                Section
              </p>
            </div>
            <div className='h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full' />
            <div className='flex flex-col   text-foreground/80'>
              {NAVCONFIG.map(({ icon: IconElement, name, url }) => (
                <ShimmerButton
                  variant='ghost'
                  key={name + url}
                  className={`w-full items-start justify-start ${
                    pathname === url && 'hidden'
                  }`}
                >
                  <Link
                    href={url}
                    className={`  hover:text-foreground hover: transition-colors w-full flex items-center space-x-2 group text-sm py-2  rounded`}
                    onClick={() => setIsOpen(false)}
                  >
                    <IconElement className='w-5 h-5  group-hover:text-foreground rounded transition-all duration-300' />
                    <span className='capitalize'>{name}</span>
                  </Link>
                </ShimmerButton>
              ))}
              <div className='flex flex-col items-start justify-start  text-foreground/80'>
                <MobileDropdown link='Tools' list={tools} icon={FaTools} />
                <MobileDropdown link='Services' list={services} icon={Server} />
              </div>

              <HeaderButtons />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
