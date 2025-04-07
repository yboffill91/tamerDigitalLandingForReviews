import { LucideIcon } from 'lucide-react';
import React from 'react';
import { IconType } from 'react-icons';

interface CardBorderToLeftProps {
  title: string;
  content: string;
  icon: LucideIcon | IconType;
}

export const CardBorderTopLeft = ({
  title,
  content,
  icon: Icon,
}: CardBorderToLeftProps) => {
  return (
    <div
      className={`flex-1 flex flex-col p-[2px] rounded-3xl bg-gradient-to-r to-secondary`}
    >
      <div className=' bg-card/90 min-h-64 backdrop-blur-lg backdrop-filter p-4 rounded-3xl items-center justify-center text-center sm:items-start sm:text-left flex flex-col  '>
        <div className='flex items-baseline gap-3'>
          <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
            <Icon className='w-6 h-6 text-white' />
          </div>
          <h3 className='text-3xl font-semibold text-white mb-4'>{title}</h3>
        </div>
        <p className='text-gray-400 leading-relaxed text-lg'>{content}</p>
      </div>
    </div>
  );
};
