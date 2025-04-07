import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'solid'
    | 'solidGreen';
  size?: 'sm' | 'normal' | 'big';
  type?: 'submit';
}

export function ShimmerButton({
  children,
  className,
  onClick,
  variant = 'primary',
  size = 'normal',
  type,
  ...props
}: ShimmerButtonProps) {
  const baseStyles =
    'group/button relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 ease[cubic-bezier(.98,-0.42,0,1.04)]  font-semibold rounded-lg gap-2';

  const variantStyles = {
    primary:
      'bg-gradient-to-br from-secondary border to-primary hover:-translate-y-[2px] hover:shadow-ring/20 hover:bg-ring text-neutral-950 hover:shadow-xl',
    secondary:
      'bg-secondary/80 text-secondary-foreground backdrop-blur-sm border border-ring  hover:bg-primary hover:border-ring hover:shadow-black/20 hover:shadow-xl',
    outline:
      'bg-background-primary border border-foreground/10 text-card-foreground/80 hover:text-card-foreground hover:bg-secondary/5 hover:shadow-xl',
    ghost: 'bg-transparent text-foreground hover:text-primary ',
    solid:
      'bg-primary text-primary-foreground hover:bg-secondary hover:-translate-y-[2px] hover:shadow-ring/20 hover:bg-ring hover:text-white hover:shadow-xl',
    solidGreen:
      'bg-secondary-green text-card hover:bg-emerald-600 hover:-translate-y-[2px] hover:shadow-secondary-green/20 font-bold hover:shadow-xl',
  };

  const variantSize = {
    sm: 'text-[.75rem] p-px ',
    normal: 'px-4 py-1.5 text-sm',
    big: 'py-2 px-6',
  };

  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      className={twMerge(
        baseStyles,
        variantStyles[variant],
        variantSize[size],
        className
      )}
    >
      {children}
      <div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-12deg)_translateX(120%)]'>
        <div
          className={`relative h-full w-8 ${
            variant === 'primary' ||
            variant === 'solid' ||
            variant === 'solidGreen'
              ? 'bg-white/80'
              : variant === 'ghost'
              ? ''
              : variant === 'outline' && size === 'sm'
              ? ''
              : 'bg-foreground/80'
          }`}
        />
      </div>
    </button>
  );
}
