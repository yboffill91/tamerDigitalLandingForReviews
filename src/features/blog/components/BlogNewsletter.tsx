'use client';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';
import {
  Input,
  IconButton3D,
  ShimmerButton,

  ShineBorder,
} from '@/components/ui';
import { ShineColors } from '@/lib';

const features = [
  'Weekly SEO Tips',
  'Marketing Insights',
  'Growth Strategies',
  'Industry Updates',
];

export function BlogNewsletter() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='pt-36 px-4 relative overflow-hidden  rounded-lg  '
    >
      <div className='w-full relative bg-card rounded-lg shadow-lg shadow-primary/60 dark:shadow-primary/20'>
       <ShineBorder shineColor={ShineColors} borderWidth={2}/>
        <div className='absolute inset-0'>
        </div>
        <div className='relative rounded-lg overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0' />
            <div
              className='absolute inset-0'
              style={{
                maskImage: 'linear-gradient(to left, black, transparent)',
                WebkitMaskImage: 'linear-gradient(to left, black, transparent)',
              }}
            />
            <div className='pointer-events-none absolute right-0 top-0 h-full w-1/2'></div>
          </div>

          <div className='relative z-10 flex flex-col items-center justify-between gap-8 p-8 md:p-12'>
            <div className='flex-1 text-center md:text-left'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='mb-4 '
              >
                <IconButton3D icon={Mail} />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='text-2xl md:text-3xl font-bold mb-4'
              >
                Stay Updated with Our Newsletter
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='text-foreground/90 max-w-xl'
              >
                Join 2,000+ marketers and entrepreneurs getting actionable
                strategies straight to their inbox.
              </motion.p>

              <div className='mt-6 grid grid-cols-2 gap-3 bg-card p-4 rounded-lg'>
                {features.map((feature, index) => (
                  <div key={index} className='flex items-center gap-2'>
                    <div className='w-5 h-5 rounded-full bg-ring flex items-center justify-center'>
                      <Check className='w-3 h-3 ' />
                    </div>
                    <span className='text-sm text-foreground/90'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex-1 w-full'>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onSubmit={(e) => e.preventDefault()}
                className='flex items-center justify-center gap-1'
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Input
                    type='email'
                    placeholder='Enter your email'
                    className='w-full'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <ShimmerButton type='submit'>
                    Subscribe
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </ShimmerButton>
                </motion.div>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
