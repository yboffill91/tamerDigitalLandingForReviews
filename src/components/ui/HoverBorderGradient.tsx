'use client';
import type React from 'react';
import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Direction = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT';

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = 'button',
  duration = 1,
  clockwise = true,
  colorVariant = 'blue',
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
    colorVariant?: 'blue' | 'green';
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>('TOP');

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const colorMap = {
    blue: {
      primary: '#1389FD',
      transparent: 'rgba(135, 206, 251, 0)',
    },
    green: {
      primary: '#10B981', // emerald-500 (secondary-green)
      transparent: 'rgba(16, 185, 129, 0)',
    },
  };

  const currentColor = colorMap[colorVariant];

  const movingMap: Record<Direction, string> = {
    TOP: `radial-gradient(30% 70% at 50% 0%, ${currentColor.primary} 0%, ${currentColor.transparent} 100%)`,
    LEFT: `radial-gradient(25% 60% at 0% 50%, ${currentColor.primary} 0%, ${currentColor.transparent} 100%)`,
    BOTTOM: `radial-gradient(30% 70% at 50% 100%, ${currentColor.primary} 0%, ${currentColor.transparent} 100%)`,
    RIGHT: `radial-gradient(25% 60% at 100% 50%, ${currentColor.primary} 0%, ${currentColor.transparent} 100%)`,
  };

  const highlight = `radial-gradient(100% 200% at 50% 50%, ${currentColor.primary} 0%, ${currentColor.transparent} 100%)`;

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 800); // Faster rotation
      return () => clearInterval(interval);
    }
  }, [hovered]);
  return (
    <Tag
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'relative flex rounded-full content-center bg-primary/10 hover:bg-primary/30 transition duration-300 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-[2px] decoration-clone w-fit',
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          'w-auto  z-10 bg-background px-6 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]',
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          'flex-none inset-0 overflow-hidden absolute z-0 rounded-lg'
        )}
        style={{
          filter: 'blur(3px)',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: 'linear', duration: duration ?? 1 }}
      />
      <div className=' absolute z-1 flex-none inset-[2px] rounded-[100px]' />
    </Tag>
  );
}
