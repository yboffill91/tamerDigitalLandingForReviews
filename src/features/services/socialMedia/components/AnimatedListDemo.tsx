'use client';

import { cn } from '@/lib/utils';
import { AnimatedList } from '@/features/services/socialMedia/components';
import { notifications } from '@/features/services/socialMedia/utils';
import { NotificationComponent } from '@/features/services/socialMedia/components/ui';

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-[280px] w-full flex-col overflow-hidden p-2',
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <NotificationComponent {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-background via-background/90 to-transparent'></div>
    </div>
  );
}
