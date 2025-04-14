import type { ReactNode } from 'react';
import { cn } from '@/lib';

interface PluginCardProps {
  name: string;
  description: string;
  isSelected: boolean;
  setupFee?: number;
  showClientPricing?: boolean;
  children: ReactNode;
}

export function PluginCard({
  name,
  description,
  isSelected,
  setupFee,
  showClientPricing = false,
  children,
}: PluginCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border-2 transition-all',
        isSelected ? 'border-primary bg-ring/5' : 'border-foreground/20'
      )}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-foreground/80">{description}</p>
          </div>
          {showClientPricing && setupFee !== undefined && (
            <div className="text-right">
              <div className="text-xl font-bold text-primary">
                Setup Fee: ${setupFee}
              </div>
              <div className="text-sm text-foreground/80">
                One-time professional setup
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">{children}</div>
      </div>
    </div>
  );
}
