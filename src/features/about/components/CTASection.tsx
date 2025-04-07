'use client';
import { motion } from 'framer-motion';
import { Sparkles, BarChartIcon as ChartBarStacked } from 'lucide-react';
import { ShimmerButton, IconButton3D, Grid, BorderBeam } from '@/components/ui';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className=' relative overflow-hidden mb-12 container mx-auto rounded-lg'>
      <div className=' mx-auto'>
        <div className='relative overflow-hidden bg-card rounded-lg '>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='relative z-10 px-6 sm:px-16 sm:pb-24 sm:pt-12 rounded-lg '
          >
            <BorderBeam
              colorFrom='#1e40af'
              colorTo='#38bdf8'
              duration={30}
              size={300}
            />
            <div className='mx-auto max-w-4xl text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='mb-8'
              >
                <IconButton3D icon={ChartBarStacked} />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='text-4xl font-bold tracking-tight  sm:text-5xl'
              >
                Ready to Elevate Your
                <span className='heading-gradient'> Business</span>?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='mx-auto mt-6 max-w-xl text-lg leading-8 text-foreground/80'
              >
                We&apos;re here to support your journey and provide the tools
                you need to succeed.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className='grid grid-cols-1 lg:grid-cols-3 gap-2 mt-6 mx-auto'
              >
                <Link href='#explore'>
                  <ShimmerButton
                    variant='outline'
                    size='big'
                    className='group w-full'
                  >
                    Let&apos;s Explore Solutions Together
                  </ShimmerButton>
                </Link>

                <Link href='#tools'>
                  <ShimmerButton
                    variant={'solid'}
                    size='big'
                    className='group w-full'
                  >
                    Find the Perfect Tools
                    <Sparkles className='mx-2 size-4 group-hover:rotate-12 transition-transform duration-500 ease-in-out' />
                  </ShimmerButton>
                </Link>

                <Link href='#consultation'>
                  <ShimmerButton
                    variant={'outline'}
                    size='big'
                    className='group w-full'
                  >
                    Schedule Your Free Consultation
                  </ShimmerButton>
                </Link>
              </motion.div>
            </div>
            <Grid />

            <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-card via-transparent to-card -z-10'></span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
