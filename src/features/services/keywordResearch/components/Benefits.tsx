'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Search,
  TrendingUp,
  Target,
  Users,
  HeartPulse,
} from 'lucide-react';
import { InteractiveCards } from './InteractiveCards';
import {
  benefitsList,
  features,
} from '@/features/services/keywordResearch/utils';
import { LeadingSection } from '@/features/services/components';
import { InfoCard } from '@/components/ui';

export const Benefits = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* First Row */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <div className='space-y-8'>
            <LeadingSection
              badgeText='Strategic Approach'
              heading='Transform Your Search Visibility'
              icon={HeartPulse}
              description='Our keyword research service combines advanced analytics with strategic insights to help you capture more qualified traffic and convert it into real business growth.'
            />

            <div className='space-y-6'>
              {benefitsList.map((benefit, index) => (
                <InfoCard
                  icon={benefit.icon}
                  color='blue'
                  description={benefit.description}
                  title={benefit.title}
                  index={index}
                  key={benefit.title + index}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className='relative'>
            <motion.div className='relative h-[500px] overflow-hidden'>
              {/* Search Intent Analysis */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col gap-4 p-8'
              >
                <div className='flex items-center gap-3'>
                  <Search className='w-6 h-6 text-primary' />
                  <h3 className='text-lg font-semibold text-foreground'>
                    Search Intent Analysis
                  </h3>
                </div>

                {/* Keyword Categories */}
                <div className='grid grid-cols-2 gap-4 mt-4'>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='bg-card p-4 rounded-lg'
                  >
                    <h4 className='text-foreground font-medium mb-2'>
                      Commercial Intent
                    </h4>
                    <div className='space-y-2'>
                      <div className='flex items-center justify-between'>
                        <span className='text-foreground/80 text-sm'>
                          buy [product]
                        </span>
                        <span className='text-green-500'>92%</span>
                      </div>
                      <div className='flex items-center justify-between'>
                        <span className='text-foreground/80 text-sm'>
                          best [product] for
                        </span>
                        <span className='text-green-500'>87%</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className='bg-card p-4 rounded-lg'
                  >
                    <h4 className='text-foreground font-medium mb-2'>
                      Research Intent
                    </h4>
                    <div className='space-y-2'>
                      <div className='flex items-center justify-between'>
                        <span className='text-foreground/80 text-sm'>
                          how to [action]
                        </span>
                        <span className='text-primary'>75%</span>
                      </div>
                      <div className='flex items-center justify-between'>
                        <span className='text-foreground/80 text-sm'>
                          what is [term]
                        </span>
                        <span className='text-primary'>68%</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Metrics Cards */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className='flex justify-between mt-8'
                >
                  <div className='bg-card rounded-lg p-4 w-[30%]'>
                    <div className='flex items-center gap-3'>
                      <TrendingUp className='w-5 h-5 text-primary' />
                      <div>
                        <p className='text-sm font-medium text-foreground'>
                          +127%
                        </p>
                        <p className='text-xs text-foreground/80'>Growth</p>
                      </div>
                    </div>
                  </div>
                  <div className='bg-card rounded-lg p-4 w-[30%]'>
                    <div className='flex items-center gap-3'>
                      <Target className='w-5 h-5 text-primary' />
                      <div>
                        <p className='text-sm font-medium text-foreground'>
                          92%
                        </p>
                        <p className='text-xs text-foreground/80'>Accuracy</p>
                      </div>
                    </div>
                  </div>
                  <div className='bg-card rounded-lg p-4 w-[30%]'>
                    <div className='flex items-center gap-3'>
                      <Users className='w-5 h-5 text-primary' />
                      <div>
                        <p className='text-sm font-medium text-foreground'>
                          2.4K
                        </p>
                        <p className='text-xs text-foreground/80'>Leads</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Second Row */}
        <div className='mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - App Preview */}
          <InteractiveCards />

          {/* Right Column - Content */}
          <div className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <h2 className='text-3xl font-bold text-foreground mb-4'>
                Maximize Your <span className='text-primary'>Search ROI</span>
              </h2>
              <p className='text-foreground/80'>
                Our comprehensive keyword research service helps you identify
                and target the most valuable search opportunities in your
                market. We don&apos;t just find keywords - we uncover the
                specific terms and phrases that drive qualified traffic and
                conversions.
              </p>

              {/* Features List */}
              <div className='space-y-4'>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='flex items-center gap-3'
                  >
                    <div className='flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center'>
                      <Check className='w-3 h-3 text-primary' />
                    </div>
                    <p className='text-foreground/80'>{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
