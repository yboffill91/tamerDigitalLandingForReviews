'use client';
import { motion } from 'framer-motion';
import { businessTypes } from '@/features/services/utils';
import { ShimmerButton } from '@/components/ui';
import { FaIndustry } from 'react-icons/fa';
import { IndustriesCard, LeadingSection } from '@/features/services/components';

export function Industries() {
  return (
    <div className='relative w-full py-24 md:py-32 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <LeadingSection
            badgeText='Industry Expertise'
            description='   From healthcare to e-commerce, we deliver industry-specific
            technical SEO solutions that drive real business growth'
            heading='            Technical SEO Solutions for Every Industry'
            icon={FaIndustry}
          />
        </div>

        <div className='flex flex-wrap gap-4 items-center justify-center'>
          {businessTypes.map(({ icon, name }, index) => (
            <IndustriesCard key={index} icon={icon} index={index} name={name} />
          ))}
        </div>

        {/* CTA Section */}
        <div className='mt-16 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='bg-gradient-to-r from-ring/10 via-ring/20 to-ring/10 rounded-2xl p-8 border border-primary/20'
          >
            <h3 className='text-2xl font-bold text-foreground mb-4'>
              Don&apos;t See Your Industry?
            </h3>
            <p className='text-foreground/80 max-w-2xl mx-auto mb-8'>
              Our technical SEO expertise extends to every type of business.
              Let&apos;s discuss how we can help your specific industry dominate
              search rankings.
            </p>
            <ShimmerButton variant='solid'>Contact Us Today</ShimmerButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
