'use client';

import { useRef } from 'react';
import { MapPin, Target, Users, Globe, ZapIcon, Check } from 'lucide-react';
import { InfoCard, ShimmerButton } from '@/components/ui';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LeadingSection } from '@/features/services/components';

const features = [
  {
    title: 'More Visibility, More Customers',
    description:
      'By positioning in Google Maps top 3, you increase your exposure to local customers searching for exactly what you offer.',
    icon: MapPin,
    items: [
      'Appear at the top of search results',
      'Reach more customers ready to buy',
      'Dominate local search visibility',
      'Target high-intent local traffic',
    ],
  },
  {
    title: 'Increased Calls and Sales',
    description:
      'An optimized profile builds trust and motivates customers to contact you directly.',
    icon: Target,
    items: [
      'More direct bookings and calls from Google',
      'Less investment in paid advertising',
      'Higher conversion rates from organic traffic',
      'Direct customer engagement',
    ],
  },
  {
    title: 'Differentiation and Credibility',
    description:
      'Well-positioned businesses with positive reviews generate more trust.',
    icon: Users,
    items: [
      'Attract more customers with high ratings',
      'Stand out with verified reviews',
      'Outperform competition in Google Maps',
      'Build lasting customer trust',
    ],
  },
  {
    title: 'Multi-Location Positioning',
    description:
      'With a local SEO strategy, you can appear in searches from different locations.',
    icon: Globe,
    items: [
      'Increase reach with optimized pages',
      'Expand business without new branches',
      'Target multiple service areas',
      'Dominate regional searches',
    ],
  },
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transform the rocket's Y position based on scroll
  const rocketY = useTransform(scrollYProgress, [0, 1], [100, -500]);
  const rocketScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);

  // Keep clouds relatively static but with slight movement
  const cloudsY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <div ref={containerRef} className='relative  overflow-hidden '>
      {/* Background gradient */}
      <div className='absolute inset-0'>
        <span className='absolute w-[300px] h-[300px] bg-gradient-to-r from-primary to-ring via-secondary rounded-full blur-3xl opacity-5 top-1/3 left-3/4'></span>
        <span className='absolute w-[300px] h-[300px] bg-gradient-to-r from-primary to-ring via-secondary rounded-full blur-3xl opacity-5 bottom-1/3 right-1/2'></span>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-18 container flex items-center justify-center gap-4 flex-col'>
        <LeadingSection
          badgeText='Transform Your Local Presence'
          description="Soon, your business will be the reference in your industry. You won't just climb rankings - you'll attract more customers, increase visibility, and dominate your local market with a strategy designed for success."
          heading="You're About to Become an Authority in Your Industry"
          icon={ZapIcon}
        />

        {/* Features grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-24'>
          {features.map(({ icon, title, description, items }, index) => {
            return (
              <InfoCard
                color='blue'
                key={index}
                title={title}
                description={description}
                icon={icon}
                index={index}
                className='bg-ring/10 min-h-64 z-40 backdrop-blur-md backdrop-filter'
              >
                <ul>
                  {items.map((item, i) => (
                    <li key={i} className='flex items-center space-x-2 ml-8'>
                      <Check className='text-primary  size-4' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            );
          })}
        </div>
      </div>
      <div className='absolute left-0 w-full'>
        {/* CTA Button */}
        <div className='flex justify-center mt-16 mb-10 container mx-auto'>
          <ShimmerButton variant='solid' className='relative z-40'>
            Start Your Transformation Today
          </ShimmerButton>
        </div>
      </div>

      {/* Rocket and Clouds Container */}
      <div className='relative w-full h-64 -z-0 flex items-center justify-center'>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: 'spring',
            stiffness: 50,
          }}
          style={{
            y: rocketY,
            scale: rocketScale,
          }}
          className='absolute top-0 left-0 -z-0'
        >
          <Image
            src='/features/services/local-seo/rocket.png'
            alt='Rocket illustration'
            width={300}
            height={200}
            className='object-contain h-44'
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            type: 'spring',
            stiffness: 50,
          }}
          style={{ y: cloudsY }}
          className='absolute right-0 -z-0 bottom-0 w-full'
        >
          <Image
            src='/features/services/local-seo/clouds.png'
            alt='Cloud illustration'
            width={1920}
            height={200}
            className='object-contain w-full'
          />
        </motion.div>
      </div>
    </div>
  );
}
