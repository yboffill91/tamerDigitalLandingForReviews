'use client';
import { MousePointer } from 'lucide-react';
import { Step } from '@/features/services/offPageSeo/utils';
import { Progress } from '@/components/ui';

interface StepCardProps extends Step {
  isActive: boolean;
  progress: number;
}

export const StepCard = ({
  number,
  icon: Icon,
  title,
  description,
  isActive,
  progress,
}: StepCardProps) => {
  return (
    <div
      className={`relative p-8 transition-all duration-300 cursor-pointer ${
        isActive
          ? 'bg-card scale-[1.02] shadow-lg border border-ring/10'
          : 'bg-background-primary hover:bg-ring/10'
      } rounded-lg  group`}
    >
      {/* Glowing effect for active card */}

      {/* Progress bar for active step */}
      {isActive && (
        <div className='absolute bottom-0 left-[-1px] right-[-1px] h-[2px] bg-ring/10 overflow-hidden rounded-b-lg flex '>
          <Progress value={progress} className='w-full h-1 bg-card' />
        </div>
      )}

      <div className='relative z-10 flex flex-col h-full'>
        {/* Icon with number */}
        <div className='flex items-center gap-4 mb-6'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-4'>
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-lg bg-ring/10 ${
                  isActive ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                <Icon className='w-6 h-6' />
              </div>

              <span
                className={`text-2xl font-bold ${
                  isActive ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                {number}
              </span>
            </div>

            {/* Status indicator */}
            {isActive && (
              <div className='flex items-center text-ring'>
                <MousePointer
                  size={14}
                  className='mr-2 animate-pointer-pulse'
                />
                <span className='text-sm font-medium'>Active</span>
              </div>
            )}
          </div>
        </div>

        {/* Title with gradient on hover */}
        <h3
          className={`text-xl font-bold mb-4 transition-colors ${
            isActive
              ? 'text-foreground'
              : 'text-foreground/80 group-hover:text-primary'
          }`}
        >
          {title}
        </h3>

        {/* Description with improved readability */}
        <p className='text-foreground/80 text-base'>{description}</p>

        {/* Decorative elements */}
        <div className='absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-r from-primary/5 to-ring/5 rounded-full blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100'></div>
      </div>
    </div>
  );
};
