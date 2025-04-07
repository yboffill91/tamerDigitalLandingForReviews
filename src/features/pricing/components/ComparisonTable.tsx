'use client';
import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib';
import { features } from '@/features/pricing/utils';

export function ComparisonTable() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='w-full max-w-7xl mx-auto px-4 mb-20'>
      {/* Toggle Button */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className='w-full flex items-center justify-between p-6 rounded-lg bg-gradient-to-r from-card to-background-primary border border-primary/20 mt-24 mb-8 group transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20'
      >
        <div className='flex flex-col items-start'>
          <span className='text-lg font-semibold '>
            Explore Our Comprehensive Service Features
          </span>
          <span className='text-sm text-foreground/900'>
            Click to view detailed breakdown of all services and their features
          </span>
        </div>
        <ChevronDown
          className={cn(
            'w-6 h-6 text-primary transition-transform duration-200',
            isExpanded && 'rotate-180'
          )}
        />
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className='relative overflow-hidden pt-8'
          >
            {features.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * categoryIndex }}
                className='mb-8'
              >
                {/* Tool Header */}
                <div className='flex items-center gap-2 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                    <category.icon className='w-5 h-5 text-primary' />
                  </div>
                  <h3 className='text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                    {category.name}
                  </h3>
                </div>

                <div className='grid grid-cols-3 gap-8'>
                  {/* Features */}
                  {category.items.map((item, itemIndex) => (
                    <React.Fragment key={item.name}>
                      {(['starter', 'growth', 'enterprise'] as const).map(
                        (plan, planIndex) => (
                          <motion.div
                            key={`${item.name}-${plan}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.6,
                              delay: 0.05 * (itemIndex * 3 + planIndex),
                            }}
                            className='flex items-center gap-2 pl-8 border-b border-ring/40 h-6 py-1'
                          >
                            <Check className='h-4 w-4 text-primary' />
                            <span className='text-sm '>
                              {item[plan as keyof typeof item]}
                            </span>
                          </motion.div>
                        )
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Ready to commit and push to the main branch
