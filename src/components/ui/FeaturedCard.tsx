//  Card con animaci'on en useonview y border beam

'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BorderBeam } from './BorderBeam';

export const FeatureCard = ({
  children,
  minHeight = '250px',
  index,
}: {
  children: React.ReactNode;
  minHeight?: string;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`text-pretty p-8 w-[300px] h-[${minHeight}] flex-shrink-0 rounded-3xl bg-neutral-900 flex flex-col justify-start items-start relative overflow-hidden`}
      variants={cardVariants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
    >
      <BorderBeam
        size={100 + index * 2 + 15}
        duration={15}
        colorFrom='#3b82f6'
        colorTo='#1d4ed8'
      />
      {children}
    </motion.div>
  );
};
