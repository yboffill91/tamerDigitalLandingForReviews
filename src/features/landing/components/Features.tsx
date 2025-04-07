'use client';

import Image from 'next/image';
import { GridCardSet, IconButton3D, InfoCard } from '@/components/ui';
import { Wrench } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { featuresGrid } from '@/features/landing/utils';
import { CardHoverTopBorder } from '@/components/ui/CardHoverTopBorder';
import Link from 'next/link';

export const Features = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });

  return (
    <div className='container mx-auto'>
      <div className=' mx-auto px-4 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={isInView1 ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='relative'
          >
            <Image
              src='/features/landing/feat-tabs/tools.webp'
              width={800}
              height={600}
              alt='Section image'
              className='rounded-2xl hidden md:block'
              unoptimized
            />
          </motion.div>

          <motion.div
            ref={ref1}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isInView1 ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='space-y-6'
          >
            <IconButton3D
              icon={Wrench}
              className='text-primary hover:text-secondary transition-colors duration-300'
            />
            <h2 className='text-4xl font-bold text-center md:text-left'>
              Start Growing with Our{' '}
              <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                FREE Tools
              </span>
            </h2>
            <p className='text-foreground/80 text-lg leading-relaxed text-center md:text-left'>
              Before investing a single cent, we give you a pack of digital
              marketing tools to outperform 80% of your market. Why? Because we
              want you to see results from day one.
            </p>
          </motion.div>
        </div>
      </div>

      <div className=' mx-auto px-4'>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView2 ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GridCardSet>
            {featuresGrid.map(({ icon, title, description, url }, index) => (
              <CardHoverTopBorder
                key={index}
                index={index}
                className='bg-transparent'
              >
                <Link href={url}>
                  <InfoCard
                    color='blue'
                    description={description}
                    title={title}
                    icon={icon}
                    className='md:min-h-48 min-h-72 w-48 md:w-auto'
                  />
                </Link>
              </CardHoverTopBorder>
            ))}
          </GridCardSet>
        </motion.div>
      </div>
    </div>
  );
};
