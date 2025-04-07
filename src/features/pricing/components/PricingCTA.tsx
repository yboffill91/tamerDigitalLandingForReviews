'use client';
import Image from 'next/image';
import { Calculator, Clock, MessageSquare } from 'lucide-react';
import { BorderBeam, Grid, ShimmerButton } from '@/components/ui';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function PricingCTA() {
  return (
    <section className='relative overflow-hidden py-2 max-w-7xl mx-auto rounded-3xl '>
      <div className=' mx-auto rounded-3xl relative bg-card/70'>
        <Grid />
        <BorderBeam
          duration={30}
          size={500}
          colorFrom='#88cffb'
          colorTo='#00defa'
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col md:flex-row items-center justify-between'
        >
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='w-full md:w-1/2 p-4 md:p-8 bg-transparent -ml-20'
          >
            <div className='relative w-[120%] aspect-[16/9] rounded-2xl overflow-hidden'>
              <Image
                src='/features/pricing/pricingcustom.webp'
                alt='Custom Solutions'
                fill
                className='object-cover'
                priority
                unoptimized
              />
              <div className='absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent' />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='w-full md:w-1/2 p-8 md:p-12 bg-card/90'
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-4xl font-bold tracking-tight text-foreground sm:text-5xl'
            >
              Need a <span className='heading-gradient'>Custom Plan</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='mx-auto mt-6 max-w-2xl text-lg leading-8 textforeground/90'
            >
              Looking for specific options, different volumes, or a special
              combination of services? Our team can create a package that fits
              your exact needs and budget.
            </motion.p>

            <div className='mt-10 flex flex-col gap-4 max-w-xl mx-auto'>
              {[
                {
                  icon: Calculator,
                  title: 'Custom Quote',
                  description:
                    'Get a personalized quote tailored to your needs',
                },
                {
                  icon: Clock,
                  title: '24h Response',
                  description: 'Quick turnaround on all inquiries',
                },
                {
                  icon: MessageSquare,
                  title: 'Free Consultation',
                  description: 'Schedule a no-obligation consultation',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className=' flex items-center gap-4 p-4 rounded-xl'
                >
                  <div className='flex-shrink-0'>
                    <div className='inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10'>
                      <item.icon className='h-6 w-6 text-primary' />
                    </div>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold '>{item.title}</h3>
                    <p className='text-sm text-foreground/90'>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className='mt-10'
            >
              <Link
                href='#custom-pricing'
                className='inline-flex items-center justify-center w-full'
              >
                <ShimmerButton>Get Custom Pricing</ShimmerButton>
              </Link>
              <p className='mt-4 text-sm text-foreground/80 text-center'>
                No commitment - Guaranteed response within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
