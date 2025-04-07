import { VISIONITEM } from '@/lib';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const IntercaladeCards = ({
  item,
  index,
}: {
  item: VISIONITEM;
  index: number;
}) => {
  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='relative group'
    >
      <div
        className={`flex items-center gap-2 space-y-2 ${
          item.align === 'left' ? 'flex-row-reverse' : ''
        }`}
      >
        <div className='flex-1  items-center  relative lg:flex hidden'>
          <div className='relative aspect-[4/3] overflow-hidden rounded-3x mx-auto  min-h-96'>
            <Image
              src={item.image || '/placeholder.svg'}
              alt={item.title}
              className='size-64 transition-all duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100 object-contain'
              fill
            />
          </div>
        </div>
        <div
          className={`flex-1 flex flex-col p-[2px] group-hover:p-0 rounded-3xl transition-all duration-300 ease-in-out ${
            item.align === 'right' ? 'bg-gradient-to-tl' : 'bg-gradient-to-tr'
          } from-transparent from-50% ${
            item.align === 'right' ? 'to-secondary' : 'to-ring'
          }`}
        >
          <div className=' bg-card min-h-64 backdrop-blur-lg backdrop-filter p-4 rounded-3xl items-center justify-center text-center sm:items-start sm:text-left flex flex-col group-hover:bg-card/50 transition-all duration-700 ease-in-out '>
            <div className='flex items-center gap-4 mb-6'>
              <div className='size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-ring transition-all duration-700 ease-in-out'>
                <item.icon className='size-6 group-hover:text-white transition-all duration-700 ease-in-out ' />
              </div>
              <h3 className='font-semibold group-hover:text-ring transition-colors duration-300 ease-in-out'>
                {item.title}
              </h3>
            </div>
            <p className='text-foreground/90 leading-relaxed text-lg group-hover:text-foreground transition-all duration-700 ease-in-out'>
              {item.content}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
