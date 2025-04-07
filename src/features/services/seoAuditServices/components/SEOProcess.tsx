'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BorderBeam } from '@/components/ui';
import clsx from 'clsx';
import { processSteps } from '@/features/services/seoAuditServices/utils';
import { Workflow } from 'lucide-react';
import { LeadingSection } from '@/features/services/components';

export function SEOProcess() {
  const [activeTab, setActiveTab] = useState('technical');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <LeadingSection
          badgeText='Our Process'
          description='Our comprehensive 6-phase audit process reveals every opportunity to improve your search rankings. Each phase includes its key benefit to your business.'
          heading='Complete SEO Audit Process'
          icon={Workflow}
        />

        <div className='flex lg:flex-row flex-col gap-12 items-center max-w-5xl mx-auto'>
          <div className='flex lg:flex-col  space-y-4 min-w-[200px] relative'>
            {/* Vertical line with beam */}
            <div className='absolute -left-6 w-px h-full bg-card overflow-hidden'>
              <BorderBeam
                size={250}
                duration={8}
                colorFrom='#3b82f6'
                colorTo='#60a5fa'
                className='-left-0'
              />
            </div>

            {Object.entries(processSteps).map(([key, step], idx) => (
              <div
                key={key}
                className='relative my-2 '
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className='absolute inset-0 h-full w-full bg-card rounded-md'
                      layoutId='hoverBackground'
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setActiveTab(key)}
                  className={clsx(
                    'px-4 py-3 text-foreground/90 relative z-20 w-full text-left rounded-md flex items-center space-x-3 group',
                    activeTab === key
                      ? 'bg-card text-primary'
                      : 'hover:text-foreground',
                    activeTab === key && 'font-semibold'
                  )}
                >
                  <div
                    className={clsx(
                      'p-2 rounded-lg transition-colors',
                      activeTab === key
                        ? 'bg-primary/10 text-primary'
                        : 'bg-card/90 group-hover:bg-card/70'
                    )}
                  >
                    {step.icon}
                  </div>
                  <span className='font-medium'>{step.name}</span>
                </button>
              </div>
            ))}
          </div>

          {/* Content area */}
          <div className=''>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                className='flex flex-col space-y-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                layoutId={processSteps[activeTab].name}
              >
                <h3>{processSteps[activeTab].title}</h3>

                <p className='text-foreground/90 text-sm mb-6'>
                  {processSteps[activeTab].description}
                </p>

                <div className='space-y-4'>
                  {processSteps[activeTab].achievements.map(
                    (achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={clsx(
                          'flex items-start space-x-3 p-3 rounded-lg',
                          index === 3 ? 'bg-card border border-ring/20 ' : ''
                        )}
                      >
                        {index !== 3 && (
                          <div className='h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0' />
                        )}
                        <span
                          className={clsx(
                            'text-sm',
                            index === 3
                              ? 'text-foreground font-medium'
                              : 'text-foreground/90'
                          )}
                        >
                          {achievement}
                        </span>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
