'use client';
import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'blue' | 'green' | 'red';

interface IconButton3DProps {
  icon: LucideIcon | IconType;
  className?: string;
  variant?: ButtonVariant;
}

export const IconButton3D = ({
  icon: Icon,
  className = '',
  variant = 'blue',
}: IconButton3DProps) => {
  // Map variants to color classes
  const variantColors = {
    blue: 'text-primary',
    green: 'text-secondary-green',
    red: 'text-destructive',
  };

  // Map variants to glow colors
  const variantGlowColors = {
    blue: 'via-primary',
    green: 'via-secondary-green',
    red: 'via-destructive',
  };

  // Determine the color based on variant
  const colorClass = variantColors[variant];
  const glowClass = variantGlowColors[variant];

  return (
    <div className='[perspective:400px] [transform-style:preserve-3d]'>
      <div
        className={cn(
          'h-14 w-14 p-[4px] rounded-md bg-gradient-to-b from-card/80 to-card/90 mx-auto relative',
          colorClass,
          className
        )}
        style={{
          transform: 'rotateX(25deg)',
          transformOrigin: 'center',
        }}
      >
        {/* Main container with icon */}
        <div className='bg-card rounded-[5px] h-full w-full relative z-20 flex justify-center items-center overflow-hidden'>
          <Icon className='size-6' />
        </div>

        {/* Diffused shadow */}
        <div className='absolute bottom-0 inset-x-0 bg-card/50 opacity-50 rounded-full blur-lg h-4 w-full mx-auto z-30' />

        {/* Glow line */}
        <div
          className={cn(
            'absolute bottom-0 inset-x-0 h-px w-[60%] mx-auto bg-gradient-to-r from-transparent to-transparent',
            glowClass
          )}
        />

        {/* Diffused glow */}
        <div
          className={cn(
            'absolute bottom-0 inset-x-0 h-[8px] w-[60%] mx-auto blur-sm bg-gradient-to-r from-transparent to-transparent',
            glowClass
          )}
        />
      </div>
    </div>
  );
};
