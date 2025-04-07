import { cn } from '@/lib/utils';
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from '@tabler/icons-react';
import { Sparkles } from 'lucide-react';
import { Grid, IconButton3D } from '@/components/ui';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Advanced SEO Tools',
    description:
      'Comprehensive SEO analysis and optimization tools to improve your search rankings.',
    icon: <IconTerminal2 />,
  },
  {
    title: 'Performance Analytics',
    description:
      'Detailed analytics and reporting to track your digital marketing success.',
    icon: <IconEaseInOut />,
  },
  {
    title: 'Dedicated Support',
    description:
      'Expert support team available to help you achieve your digital marketing goals.',
    icon: <IconCurrencyDollar />,
  },
  {
    title: 'Real-time Monitoring',
    description:
      '24/7 monitoring of your digital presence and campaign performance.',
    icon: <IconCloud />,
  },
  {
    title: 'Custom Strategy',
    description:
      'Tailored digital marketing strategies based on your business needs.',
    icon: <IconRouteAltLeft />,
  },
  {
    title: 'Global Reach',
    description:
      'Expand your reach with international SEO and marketing capabilities.',
    icon: <IconHelp />,
  },
  {
    title: 'Content Optimization',
    description:
      'Expert content optimization to engage and convert your audience.',
    icon: <IconAdjustmentsBolt />,
  },
  {
    title: 'Growth Focus',
    description:
      'Proven strategies to accelerate your business growth and success.',
    icon: <IconHeart />,
  },
];

export function FeaturesSection() {
  return (
    <section className='relative overflow-hidden py-20'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mb-4'
          >
            <IconButton3D icon={Sparkles} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            Everything You Need to
            <span className='heading-gradient'> Succeed Online</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-gray-400 max-w-2xl mx-auto text-lg'
          >
            Comprehensive tools and features designed to help your business
            thrive in the digital world
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 gap-4'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={cn(
                'flex flex-col py-10 relative group/feature  border border-ring/5 bg-card/20 rounded-lg'
              )}
            >
              <div className='pointer-events-none absolute right-0 top-0 h-full w-1/2 z-10'>
                <div className='absolute inset-0 bg-card/30'>
                  <Grid />
                </div>
              </div>

              {index < 4 && (
                <div className='opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-card/90 to-transparent pointer-events-none' />
              )}
              {index >= 4 && (
                <div className='opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-card/50 to-transparent pointer-events-none' />
              )}
              <div className='mb-4 relative z-10 px-10 text-primary'>
                {feature.icon}
              </div>
              <div className='text-lg font-bold mb-2 relative z-10 px-10'>
                <div className='absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-card/90 group-hover/feature:bg-primary transition-all duration-200 origin-center' />
                <span className='group-hover/feature:translate-x-2 transition duration-200 inline-block '>
                  {feature.title}
                </span>
              </div>
              <p className='text-sm text-foreground/90 max-w-xs relative z-10 px-10'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
