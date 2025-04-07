'use client';

import React from 'react';
import {
  AlertTriangle,
  Info,
  ShoppingCart,
  BookOpen,
  HelpCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { problemItems } from '../utils';
import { LeadingSection } from '@/features/services/components';
import { InfoCard } from '@/components/ui';
// import Flag from '@weston/react-world-flags';

export function Problems() {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Warning Badge */}
        <LeadingSection
          badgeText='Warning Signs'
          description="Many businesses are unknowingly sabotaging their growth with ineffective keyword research. Here's what you might be experiencing:"
          heading='Is Your Business Losing Money Due to Poor Keyword Strategy?'
          icon={AlertTriangle}
          variant='red'
        />

        {/* Problem Grid */}
        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Left Column - Problems */}
          <div className='grid gap-2'>
            {problemItems.map((item, index) => (
              <InfoCard
                index={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                key={index + item.title}
                color='red'
              />
            ))}
          </div>

          {/* Right Column - Metric Cards */}
          <div className=' justify-around items-center flex-col hidden lg:flex'>
            {[
              {
                title: 'Global Reach',
                value: '6.2K',
                data: [
                  { code: 'US', value: 590 },
                  { code: 'MX', value: 170 },
                  { code: 'IN', value: 140 },
                  { code: 'BR', value: 110 },
                  { code: 'CA', value: 90 },
                  { code: 'AE', value: 70 },
                ],
                other: '5.0K',
              },
              {
                title: 'Keyword Difficulty',
                value: '71%',
                difficulty: 'Hard',
                description:
                  'This keyword will demand 82 high-authority referring domains and well-optimized content to start ranking for it.',
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className='flex items-center justify-center gap-2 bg-card rounded-lg p-4 min-w-72 border border-ring/5 hover:border-ring transition-all duration-700 ease-in-out'
              >
                <div className='space-y-6 w-full'>
                  <h3 className='text-foreground/90 text-base font-medium'>
                    {card.title}
                  </h3>

                  <div className='flex items-baseline gap-3'>
                    <span className='text-4xl font-bold text-foreground'>
                      {card.value}
                    </span>
                  </div>

                  {card.data ? (
                    <div className='space-y-2'>
                      {card.data.map((item) => (
                        <div
                          key={item.code}
                          className='flex items-center gap-3'
                        >
                          <div className='w-8 flex items-center gap-2'>
                            {item.code}
                          </div>
                          <div className='flex-1 h-2 rounded-full bg-foreground/[0.06]'>
                            <div
                              className='h-full rounded-full bg-blue-500'
                              style={{ width: `${(item.value / 590) * 100}%` }}
                            />
                          </div>
                          <span className='text-sm text-blue-500 w-12 text-right font-medium'>
                            {item.value}
                          </span>
                        </div>
                      ))}
                      <div className='flex items-center gap-3 pt-2 mt-2 border-t border-white/10'>
                        <div className='w-8'>
                          <span className='text-sm text-[#a0a0a0]'>Other</span>
                        </div>
                        <div className='flex-1 h-2 rounded-full bg-foreground/[0.06]'>
                          <div
                            className='h-full rounded-full bg-[#a0a0a0]'
                            style={{ width: '85%' }}
                          />
                        </div>
                        <span className='text-sm text-[#a0a0a0] w-12 text-right font-medium'>
                          {card.other}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className='space-y-6'>
                      <div className='relative w-full h-4 bg-foreground/[0.06] rounded-full overflow-hidden'>
                        <div
                          className='absolute top-0 left-0 h-full bg-red-500 rounded-full'
                          style={{ width: card.value }}
                        />
                      </div>
                      <div className='space-y-2'>
                        <div className='flex items-center gap-2'>
                          <div className='w-2 h-2 rounded-full bg-red-500' />
                          <span className='text-red-500 font-medium'>
                            {card.difficulty}
                          </span>
                        </div>
                        <p className='text-foreground/90 text-sm'>
                          {card.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Search Intent Analysis Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className='flex items-center justify-center gap-2 bg-card rounded-lg p-4 min-w-72 border border-ring/5 hover:border-ring transition-all duration-700 ease-in-out'
            >
              <div className='space-y-6'>
                <h3 className='text-foreground/90 text-base font-medium'>
                  Search Intent Types
                </h3>
                <div className='grid grid-cols-2 gap-4'>
                  {[
                    {
                      type: 'Informational',
                      icon: Info,
                      color: 'text-blue-500',
                      bgColor: 'bg-blue-500/20',
                      examples: ['how to', 'what is', 'guide'],
                      percentage: 45,
                    },
                    {
                      type: 'Commercial',
                      icon: ShoppingCart,
                      color: 'text-green-500',
                      bgColor: 'bg-green-500/20',
                      examples: ['best', 'vs', 'review'],
                      percentage: 30,
                    },
                    {
                      type: 'Navigational',
                      icon: BookOpen,
                      color: 'text-purple-500',
                      bgColor: 'bg-purple-500/20',
                      examples: ['login', 'download', 'app'],
                      percentage: 15,
                    },
                    {
                      type: 'Transactional',
                      icon: HelpCircle,
                      color: 'text-orange-500',
                      bgColor: 'bg-orange-500/20',
                      examples: ['buy', 'order', 'price'],
                      percentage: 10,
                    },
                  ].map((intent) => (
                    <div key={intent.type} className='space-y-2'>
                      <div className='flex items-center gap-2'>
                        <div className={`p-1.5 rounded-lg ${intent.bgColor}`}>
                          <intent.icon className={`w-4 h-4 ${intent.color}`} />
                        </div>
                        <span className={`text-sm font-medium ${intent.color}`}>
                          {intent.type}
                        </span>
                      </div>
                      <div className='relative w-full h-1.5 bg-foreground/10 rounded-full overflow-hidden'>
                        <div
                          className={`absolute top-0 left-0 h-full rounded-full ${intent.bgColor}`}
                          style={{ width: `${intent.percentage}%` }}
                        />
                      </div>
                      <div className='flex items-center gap-1.5 flex-wrap'>
                        {intent.examples.map((example) => (
                          <span
                            key={example}
                            className='text-xs text-foreground/90 bg-foreground/5 px-1.5 py-0.5 rounded'
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
