'use client';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Phone } from 'lucide-react';
import {
  Grid,
  IconButton3D,
  ShimmerButton,
  ShineBorder,
} from '@/components/ui';
import Link from 'next/link';

export function PricingCTABottom() {
  return (
    <section className='relative overflow-hidden py-32'>
      <span className=' absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background-primary via-transparent to-background-primary -z-10' />
      <Grid />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='relative bg-card rounded-lg max-w-3xl mx-auto'
      >
        <div className='p-6 relative'>
          <div className='mx-auto max-w-4xl text-center rounded-lg'>
            <ShineBorder
              shineColor={['#1287fd', '#1d4ed8', '#88cffb']}
              borderWidth={2}
              duration={60}
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='mb-8'
            >
              <IconButton3D icon={Sparkles} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ready to Transform
              <span className='heading-gradient'> Your Business</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='mt-6 text-lg leading-8 text-foreground/90'
            >
              Join hundreds of businesses that have already transformed their
              digital presence with our innovative solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='mt-10 gap-6 max-w-2xl flex items-center justify-center '
            >
              <Link href='#get-started' className='relative group '>
                <ShimmerButton>
                  Start Free Trial
                  <ArrowRight className='ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1' />
                </ShimmerButton>
              </Link>

              <Link href='#contact' className='relative group gap-2'>
                <ShimmerButton variant='outline'>
                  <Phone className='size-4 group-hover:translate-x-[3px] transition-all duration-300 ease-in-out mr-3' />
                  Talk to Sales
                </ShimmerButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
