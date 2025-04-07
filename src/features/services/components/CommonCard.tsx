'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

interface CommonCardProps {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
  index: number;
  isProblemSection?: boolean;
}

export const CommonCard = ({
  icon: IconElemennt,
  title,
  description,
  index,
  isProblemSection = false,
}: CommonCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`w-72 min-h-44 p-6 rounded-xl border bg-card  ${
        isProblemSection
          ? 'border-destructive/10 group-hover:border-destructive'
          : 'border-secondary/10 group-hover:border-ring'
      }  group hover:border-ring hover:bg-ring transition-all duration-700 ease-in-out`}
    >
      <div className='flex items-center justify-start gap-2 container mx-auto'>
        <span className='size-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary border border-ring/10 group-hover:border-ring transition-colors duration-700 ease-out'>
          <IconElemennt
            size={24}
            className={`${
              isProblemSection ? 'text-destructive' : 'text-primary'
            } group-hover:text-white transition-colors duration-700 ease-in-out`}
          />
        </span>
        <span>
          <h3
            className={`text-sm font-bold ${
              isProblemSection ? 'text-destructive' : 'text-primary'
            } group-hover:text-white transition-colors duration-700 ease-in-out`}
          >
            {title}
          </h3>
        </span>
      </div>
      <p className='mt-4 text-pretty text-foreground group-hover:text-white transition-all duration-700 ease-in-out'>
        {description}
      </p>
    </motion.div>
  );
};
