'use client';
import { motion } from 'framer-motion';
import { MountainIcon } from 'lucide-react';
import { IconButton3D, IntercaladeCards } from '@/components/ui';
import { visionItems } from '@/features/about/utils/Vision.const';
export default function VisionSection() {
  return (
    <section className=' relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mb-4'
          >
            <IconButton3D icon={MountainIcon} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-4xl md:text-5xl font-bolde mb-4'
          >
            Shaping the
            <span className='heading-gradient'> Digital Future</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-dforeground/90 max-w-2xl mx-auto text-lg'
          >
            Our commitment to excellence drives us to push boundaries and create
            innovative solutions
          </motion.p>
        </div>

        <div className='relative space-y-2'>
          {visionItems.map((item, index) => (
            <IntercaladeCards item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
