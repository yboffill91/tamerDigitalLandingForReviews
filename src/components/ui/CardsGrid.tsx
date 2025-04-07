import { Features } from '@/lib';
import { motion } from 'framer-motion';

export const CardsGrid = ({ features }: { features: Features[] }) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap:4 gap-1'>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.a
            key={index + feature.title}
            href={feature.url ? feature.url : '#'}
            className='flex flex-col gap-4 group cursor-pointer transition-all duration-300 hover:-translate-y-1 relative p-4 bg-card  rounded-lg '
            animate={{
              opacity: [0, 1],
              y: [50, 0],
              x: [50, 0],
              transition: {
                duration: 1,
                ease: 'easeInOut',
                delay: 0.2 + index * 0.1,
              },
            }}
          >
            {/* Hover border effect */}
            <div className='absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-primary rounded-tl-lg opacity-0 group-hover:w-16 group-hover:h-16 group-hover:opacity-100 transition-all duration-300 ease-in-out' />

            <div className='flex items-center gap-3 mb-4 bg-gree'>
              <Icon className='w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300' />
              <h3 className='text-xl font-semibold group-hover:text-secondary transition-colors duration-300'>
                {feature.title}
              </h3>
            </div>
            <p className='text-foreground/70 group-hover:text-foreground/50 transition-colors duration-300'>
              {feature.description}
            </p>
          </motion.a>
        );
      })}
    </div>
  );
};
