'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PluginVersionOptionProps {
  title: string;
  price: number | string;
  isSelected: boolean;
  onClick: () => void;
  isPremiumOnly?: boolean;
  children?: ReactNode;
}

export function PluginVersionOption({
  title,
  price,
  isSelected,
  onClick,
  isPremiumOnly = false,
  children,
}: PluginVersionOptionProps) {
  if (isPremiumOnly) {
    return (
      <div className="rounded-lg border-2 border-foreground/20 p-4 bg-card">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
              Premium Only Plugin
            </span>
            <p className="text-foreground/80 text-sm">
              This plugin is only available in Premium version
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-lg border-2 p-4 cursor-pointer transition-all',
        isSelected
          ? 'border-primary bg-card'
          : 'border-foreground/20 hover:border-primary'
      )}
    >
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <span className="text-xl font-bold">
          {typeof price === 'number' ? `$${price}` : price}
        </span>
      </div>
      {children}
    </div>
  );
}
