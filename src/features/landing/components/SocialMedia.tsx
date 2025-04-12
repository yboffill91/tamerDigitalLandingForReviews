'use client';
import { FloatingDock } from '@/features/landing/components/ui';
import { Leaf, Share2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { IconButton3D } from '@/components/ui';
import { socialLinks } from '@/features/landing/utils';
import { useRef } from 'react';

export function SocialMedia() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <IconButton3D icon={Share2} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-foreground mb-6"
          >
            Join Our Community Follow US and Learn Digital Marketing for Free!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/80 max-w-3xl mx-auto text-lg"
          >
            Follow us on social media for daily tips, insights, and success
            stories. Join a community of growing businesses and marketing
            enthusiasts. Want to master digital marketing without spending a
            dime? I&apos;ll show you how! Follow me on these platforms where I
            share all my secrets, strategies, and step-by-step tutorials
            completely free. Let&apos;s get started!
            <Leaf className="inline-block w-5 h-5 text-primary" />
          </motion.p>
        </div>
        {/* Floating Dock */}
        <motion.div
          className="flex items-center justify-center h-[100px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FloatingDock
            items={socialLinks}
            desktopClassName="bg-primary border border-primary"
            mobileClassName=""
          />
        </motion.div>
      </div>
    </section>
  );
}
