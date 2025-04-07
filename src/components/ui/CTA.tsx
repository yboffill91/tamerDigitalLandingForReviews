import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib';

interface CTAProps {
  variant?: 'default' | 'green' | 'orange';
  children: React.ReactNode;
}

const CTAVariants = cva(' ', {
  variants: {
    variant: {
      default:
        'bg-gradient-to-tr from-primary via-background-primary  to-secondary',

      green:
        'bg-gradient-to-tr from-green-500  via-transparent via-50% to-emerald-500',
      orange:
        'bg-gradient-to-tr from-orange-500   via-transparent via-50% to-orange-500',
    },
    defaultVariants: {
      variant: 'default',
    },
  },
});

export const CTA = ({ children, variant }: CTAProps) => {
  return (
    <div className='my-10 w-auto '>
      <div className=''>
        <div className=''>
          {/* Background gradient effect */}
          <div
            className={cn(
              ' container mx-auto p-[1px] rounded-3xl    ',
              CTAVariants({ variant })
            )}
          >
            <div className='bg-gradient-to-r from-card/5 via-card/50 to-card/10 rounded-3xl relative z-40  '>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
