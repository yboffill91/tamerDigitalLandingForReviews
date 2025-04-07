'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const OrbitingCircles = ({
  children,
  radius = 150,
  speed = 5,
  iconSize = 30,
  reverse = false,
}: {
  children: React.ReactNode[];
  radius?: number;
  speed?: number;
  iconSize?: number;
  reverse?: boolean;
}) => {
  const numChildren = React.Children.count(children);
  const angleStep = (2 * Math.PI) / numChildren;

  return (
    <div className='relative size-0'>
      {React.Children.map(children, (child, index) => {
        const angle = angleStep * index;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.div
            key={index}
            className='absolute z-40'
            style={{
              width: iconSize,
              height: iconSize,
            }}
            initial={{ x, y }}
            animate={{
              rotate: reverse ? [0, -360] : [0, 360],
            }}
            transition={{
              duration: speed,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};
