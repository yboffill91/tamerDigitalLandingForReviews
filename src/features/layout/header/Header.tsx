'use client';

import Link from 'next/link';
import { MobileMenu, HeaderButtons } from '@/features/layout/header/components';
import { usePathname } from 'next/navigation';
import { Logo, ShimmerButton, Dropdown } from '@/components/ui';
import { motion } from 'framer-motion';
import { NAVCONFIG } from '@/features/layout/header/utils';
import {
  ToolsDropdownContent,
  ServicesContent,
} from '@/features/layout/header/components';
import { useState, useEffect } from 'react';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled &&
        'shadow shadow-background-primary  transition-all duration-300 ease-in-out'
      }`}
      animate={{
        opacity: [0, 1],
        y: [-100, 0],
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delay: 0.5,
      }}
    >
      <div className='absolute -inset-x-8 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary/80 to-transparent'></div>
      <div
        className={`mx-auto relative z-10 transition-all duration-700 ease-in-out ${
          scrolled ? 'w-full px-0' : 'px-4 sm:px-6 lg:px-8'
        }`}
      >
        <nav
          className={`relative mx-auto  transition-all duration-700 ease-in-out lg:items-center lg:justify-evenly gap-6 flex z-50 backdrop-filter backdrop-blur-2xl 
          ${
            scrolled
              ? 'max-w-full rounded-none py-4 px-8 bg-card/90 '
              : 'max-w-7xl rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 bg-card  mt-2 border border-ring/10'
          } 
            shadow-ring/10 `}
        >
          <div className='flex items-center justify-between container mx-auto  '>
            <Logo />
            <div className='hidden xl:flex items-center justify-between flex-1 pl-8'>
              <div className='flex items-center gap-1'>
                {NAVCONFIG.map(({ name, url }) => (
                  <Link href={url} key={name + url}>
                    <ShimmerButton
                      variant='ghost'
                      className={`${
                        pathname === url
                          ? 'text-primary font-bold !pointer-events-none'
                          : ''
                      } capitalize text-base`}
                    >
                      {name}
                    </ShimmerButton>
                  </Link>
                ))}
                <Dropdown title='Tools'>
                  <ToolsDropdownContent />
                </Dropdown>
                <Dropdown title='Services'>
                  <ServicesContent />
                </Dropdown>
              </div>
              <HeaderButtons />
            </div>
            <MobileMenu />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
