import { ReactNode } from 'react';
import { BorderBeam } from './BorderBeam';

interface CardBorderBeam {
  children: ReactNode;
  className?: string;
  colorFrom?: string;
  colorTo?: string;
  size?: number;
  duration?: number;
  index?: number;
  delay?: number;
}

export const CardBorderBeam = ({
  children,
  className,
  colorFrom = '#2563eb',
  colorTo = '#1e40af',
  size = 120,
  duration = 25,
  index = 0,
  delay = index + 300,
}: CardBorderBeam) => {
  return (
    <div className='relative w-full h-full  rounded-lg'>
      <BorderBeam
        colorFrom={colorFrom}
        colorTo={colorTo}
        size={size}
        duration={duration}
        delay={delay}
      />
      <div className={`rounded-lg p-px ${className}`}>{children}</div>
    </div>
  );
};
