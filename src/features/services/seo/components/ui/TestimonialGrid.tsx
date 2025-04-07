import { cn } from '@/lib';
import { FaQuoteLeft } from 'react-icons/fa';

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'p-8 rounded-xl border border-ring/10 relative bg-card shadow-lg hover:border-primary/50 transition-all duration-700 ease-in-out group',
        className
      )}
    >
      <FaQuoteLeft className='absolute top-4 left-4 text-foreground group-hover:text-primary transition-all duration-700 ease-in-out' />
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        'text-base font-normal text-foreground/70 group-hover:text-foreground py-2 relative transition-all duration-300 ease-in-out',
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        'text-xs font-normal text-foreground/60 group-hover:text-foreground max-w-sm transition-all duration-300 ease-in-out',
        className
      )}
    >
      {children}
    </p>
  );
};
