'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { painPoints } from '@/features/services/socialMedia/utils';
import { HeartPulse } from 'lucide-react';
import { LeadingSection } from '@/features/services/components';
import { Card, InfoCard } from '@/components/ui';

export function PainPoints() {
  return (
    <section className='relative w-full  overflow-hidden'>
      <div className='max-w-[1600px] mx-auto px-4 overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <LeadingSection
            badgeText=' Business Health Check'
            description=" Do you identify with any of these symptoms? They're clear
              signs that your social media presence needs urgent professional
              attention."
            heading='Your Business Health is Too Important to Neglect'
            icon={HeartPulse}
            variant='red'
          />

          <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12 py-4'>
            <div className='lg:w-3/4'>
              <div className='grid grid-cols-2 gap-4'>
                {painPoints.map((point, index) => (
                  <Card key={index + point.title}>
                    <InfoCard
                      color='red'
                      description={point.description}
                      icon={point.icon}
                      title={point.title}
                      index={index}
                      className='w-full h-full'
                    />
                  </Card>
                ))}
              </div>
            </div>

            <div className='lg:w-1/4 relative rounded-2xl overflow-hidden'>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='w-full h-full'
              >
                <Image
                  src='/features/services/social-media/issues.webp'
                  alt='Business issues illustration'
                  width={800}
                  height={600}
                  className='w-full h-full object-cover rounded-2xl'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent' />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
