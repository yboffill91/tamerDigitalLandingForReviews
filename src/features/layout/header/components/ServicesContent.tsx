import { services } from '@/features/layout/header/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
export const ServicesContent = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      {services.map((service) => (
        <Link
          key={service.name + service.href}
          href={service.href}
          className={`${
            service.status
              ? 'flex items-center gap-3 p-3 rounded-lg hover:bg-ring/10 transition-colors group duration-300 ease-in-out'
              : 'flex items-center gap-3 p-3 rounded-lg text-foreground/10 pointer-events-auto relative '
          }`}
        >
          <div className='w-8 h-8 rounded-md bg-card flex items-center justify-center group-hover:bg-primary transition-colors shrink-0'>
            <service.icon
              className={`${
                service.status ? ' text-primary' : 'text-foreground/10'
              } w-4 h-4 group-hover:text-[#121212] transition-colors`}
            />
          </div>
          <div className='flex items-center justify-between flex-1'>
            <span
              className={`${
                service.status
                  ? 'font-medium text-foreground group-hover:text-primary transition-colors'
                  : 'text-foreground/10 pointer-events-auto'
              }`}
            >
              {service.name}
            </span>
            <ArrowUpRight className='w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500 ease-in-out' />
            {!service.status && (
              <span className='absolute top-1 right-1 bg-primary text-foreground px-[2px] text-xs rounded-md'>
                Soon
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};
