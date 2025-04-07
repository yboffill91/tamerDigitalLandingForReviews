'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { FAQSection, IconButton3D } from '@/components/ui';
import { faqs } from '@/features/pricing/utils';

type Category =
  | 'All Questions'
  | 'Billing'
  | 'Features'
  | 'Support'
  | 'General';

export function PricingFAQ() {
  const [activeCategory, setActiveCategory] =
    useState<Category>('All Questions');

  const filteredFaqs = faqs.filter(
    (faq) =>
      activeCategory === 'All Questions' || faq.category === activeCategory
  );

  const categories: Category[] = [
    'All Questions',
    'Billing',
    'Features',
    'Support',
    'General',
  ];

  return (
    <section className='py-2 relative overflow-hidden'>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center mb-16'
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mb-8'
        >
          <IconButton3D icon={HelpCircle} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-4xl font-bold text-foreground mb-6'
        >
          Frequently Asked
          <span className='heading-gradient'> Questions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-foreground max-w-3xl mx-auto text-lg'
        >
          Find answers to common questions about our pricing, features, and
          services
        </motion.p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='flex justify-center mb-12'
      >
        <div className='bg-card rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10 p-1'>
          <div className='flex space-x-2'>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-black rounded-lg'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* FAQ Grid */}
      <div className='max-w-4xl mx-auto px-4 min-h-[600px]'>
        <div className='space-y-4'>
          <FAQSection items={filteredFaqs} />
        </div>
      </div>
    </section>
  );
}
