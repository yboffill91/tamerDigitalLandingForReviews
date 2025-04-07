'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Circle, type LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';
import Image from 'next/image';
import { ShineBorder } from './shine-border';
import { ShineColors } from '@/lib';

interface TabItem {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
  bullets?: string[];
  image: string;
}

interface VerticalTabsProps {
  tabs: TabItem[];
}

export function VerticalTabs({ tabs }: VerticalTabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleTab = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div ref={ref} className='w-full'>
      <div className='flex flex-col lg:flex-row gap-6 '>
        <div className='w-full lg:w-1/2 space-y-4'>
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = index === activeTabIndex;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <div
                    className={`cursor-pointer p-2 animation-all duration-700 ease-in-out relative ${
                      isActive
                        ? 'bg-card px-8 py-16 rounded-lg'
                        : 'bg-background-primary'
                    }`}
                    onClick={() => toggleTab(index)}
                  >
                    {isActive && (
                      <ShineBorder shineColor={ShineColors} duration={60} />
                    )}
                    <div className='flex items-start gap-3 flex-col'>
                      <div
                        className={`mt-1 ${
                          isActive ? 'text-foreground' : 'text-primary'
                        } flex gap-2 items-center justify-start`}
                      >
                        <Icon className='size-8' />
                        <h3
                          className={`font-medium ${
                            isActive &&
                            'text-2xl transition-all duration-700 ease-in-out'
                          }`}
                        >
                          {tab.title}
                        </h3>
                      </div>
                      <div className='flex-1'>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className='mt-2'
                          >
                            <motion.h3
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3, delay: 0.3 }}
                            >
                              {tab.description}
                            </motion.h3>
                            {tab.bullets && (
                              <ul>
                                {tab.bullets.map((bullet, index) => (
                                  <li
                                    key={index}
                                    className='text-foreground/70'
                                  >
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      transition={{
                                        duration: 0.3,
                                        delay: 0.6 + (index + 0.3) * 0.3,
                                      }}
                                      className='flex gap-3 items-baseline justify-start  p-1'
                                    >
                                      <span className='w-3'>
                                        <Circle className='size-2 text-primary fill-primary' />
                                      </span>
                                      {bullet}
                                    </motion.div>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Right column - Images */}
        <div className='hidden lg:block lg:w-1/2'>
          <div className='relative h-full'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTabIndex}
                initial={{ opacity: 0, rotateY: -20 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 20 }}
                transition={{ duration: 0.5 }}
                className='rounded-lg overflow-hidden'
              >
                <Image
                  src={tabs[activeTabIndex].image || '/placeholder.svg'}
                  alt={tabs[activeTabIndex].title}
                  className='w-auto h-[1000px] object-contain object-center'
                  width={500}
                  height={1200}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
