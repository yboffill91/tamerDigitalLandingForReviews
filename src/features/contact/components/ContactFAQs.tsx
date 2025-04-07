'use client';

import { motion } from 'framer-motion';
import { FAQSection, IconButton3D } from '@/components/ui';
import { HelpCircle } from 'lucide-react';
import { faqs } from '@/features/contact/utils';

export function ContactFAQs() {
  return (
    <section className='  relative overflow-hidden min-h-[1100px]'>
      {/* Header */}
      <div className='text-center mb-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-8'
        >
          <IconButton3D icon={HelpCircle} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className='text-4xl font-bold text-white mb-6'
        >
          Common Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='text-foreground/90 max-w-3xl mx-auto text-lg'
        >
          Learn more about how we can help transform your digital presence and
          drive business growth.
        </motion.p>
      </div>

      {/* FAQ Grid */}
      <FAQSection items={faqs} />
    </section>
  );
}
