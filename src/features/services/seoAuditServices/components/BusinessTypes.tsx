'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { businessTypes } from '@/features/services/utils';
import { Briefcase } from 'lucide-react';
import { ShimmerButton, ShineBorder } from '@/components/ui';
import { IndustriesCard, LeadingSection } from '@/features/services/components';
import { ShineColors } from '@/lib';

export function BusinessTypes() {
  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <LeadingSection
          badgeText='Industry-Specific SEO Audits'
          description='Every industry has unique SEO challenges and opportunities. Our
            comprehensive audits are tailored to your specific market,
            considering industry-specific ranking factors, competitive
            landscapes, and user search behavior patterns.'
          heading='Specialized SEO Audits for Every Industry'
          icon={Briefcase}
        />

        {/* Business Types Grid */}
        <div className='flex items-center justify-center flex-wrap gap-2'>
          {businessTypes.map((business, index) => (
            <IndustriesCard
              icon={business.icon}
              key={index}
              name={business.name}
              index={index}
              isSecondaryCard
            />
          ))}
        </div>
        <div className='flex items-center justify-center flex-col text-center rounded-3xl h-64 mt-12 bg-card relative'>
          <ShineBorder shineColor={ShineColors} />
          <div className='text-foreground text-sm mb-6'>
            <h2 className='heading-gradient p-2'> No matter your industry</h2>{' '}
            <p className='capitalize'>
              our comprehensive SEO audit will uncover the exact opportunities
              to improve your search visibility and outrank competitors.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <ShimmerButton variant='solid'>
              Get Your Industry-Specific SEO Audit
            </ShimmerButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
