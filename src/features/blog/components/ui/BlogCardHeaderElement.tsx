import { LucideIcon } from 'lucide-react';
import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface BlogCardCardHeaderElementProps {
  children: ReactNode;
  icon: LucideIcon | IconType;
}

export const BlogCardHeaderElement = ({
  children,
  icon: Icon,
}: BlogCardCardHeaderElementProps) => {
  return (
    <span className='flex items-center justify-start text-sm text-foreground gap-2'>
      <Icon className='text-foregroun/90 size-4' />
      {children}
    </span>
  );
};
