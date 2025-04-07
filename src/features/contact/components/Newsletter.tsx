'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { IconMailFilled } from '@tabler/icons-react';
import {
  Input,
  IconButton3D,
  ShimmerButton,
  Grid,
  ShineBorder,
} from '@/components/ui';

export function Newsletter() {
  return (
    <div className='py-16 relative overflow-hidden'>
      <div className='mx-auto bg-gradient-to-l from-background-primary via-card to-card/50 rounded-lg '>
        <div className='relative rounded-lg   overflow-hidden flex flex-col lg:flex-row pb-12'>
          <ShineBorder
            shineColor={['#1287fd', '#1d4ed8', '#88cffb']}
            borderWidth={2}
            duration={60}
          />
          <Grid />
          <div className='absolute inset-0'></div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='relative z-10 flex flex-col items-start gap-6 p-8 flex-1'
          >
            {/* Left Content */}
            <div className='w-full flex items-center justify-center flex-col '>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='mb-4'
              >
                <IconButton3D icon={IconMailFilled} />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='text-3xl lg:text-4xl font-bold  mb-4 heading-gradient'
              >
                Stay Updated
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='text-foreground/80 max-w-lg'
              >
                Subscribe to our newsletter for expert insights, industry
                trends, and growth strategies delivered straight to your inbox.
              </motion.p>

              {/* Newsletter Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onSubmit={(e) => e.preventDefault()}
                className=' mt-6 w-full mx-auto flex items-center justify-center '
              >
                <div className='relative flex gap-2'>
                  <Input
                    type='email'
                    placeholder='Enter your email'
                    className='w-full pr-32'
                  />
                </div>
                <ShimmerButton type='submit' className='group'>
                  Subscribe
                  <Mail className='ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-500' />
                </ShimmerButton>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
