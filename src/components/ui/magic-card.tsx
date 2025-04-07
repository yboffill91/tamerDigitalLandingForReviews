'use client';

import { cn } from '@/lib';
import { useRef, useState } from 'react';

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gradientColor?: string;
}

export const MagicCard = ({
  children,
  className,
  gradientColor = '#262626',
  ...props
}: MagicCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn('relative overflow-hidden group', className)}
      {...props}
    >
      {/* Animated border */}
      <div
        className='absolute inset-px z-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500'
        style={{
          background: `linear-gradient(90deg, ${gradientColor}, transparent 20%, transparent 80%, ${gradientColor})`,
        }}
      />

      {/* Spotlight effect */}
      <div
        className='absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-500 group-hover:opacity-100'
        style={{
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Content container */}
      <div
        className='relative z-10'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};
