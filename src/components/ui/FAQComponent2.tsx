'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn, FAQItem } from '@/lib';
import { ShimmerButton } from './ShimmerButton';

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQComponent2({ items, className }: FAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? 0 : index);
  };

  // Group items by category if categories exist
  const hasCategories = items.some((item) => item.category);

  const groupedItems = hasCategories
    ? items.reduce<Record<string, FAQItem[]>>((acc, item) => {
        const category = item.category || 'Other';
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(item);
        return acc;
      }, {})
    : { All: items };

  return (
    <div className={cn('w-full max-w-3xl mx-auto', className)}>
      {hasCategories ? (
        Object.entries(groupedItems).map(([category, categoryItems]) => (
          <div key={category} className='mb-8'>
            <h3 className=' font-bold mb-4'>{category}</h3>
            <div className='space-y-4'>
              {categoryItems.map((item, index) => (
                <FAQItemComponent
                  key={item.id || index}
                  item={item}
                  isExpanded={expandedIndex === index}
                  onToggle={() => toggleItem(index)}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className='space-y-4'>
          {items.map((item, index) => (
            <FAQItemComponent
              key={item.id || index}
              item={item}
              isExpanded={expandedIndex === index}
              onToggle={() => toggleItem(index)}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface FAQItemProps {
  item: FAQItem;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItemComponent({ item, isExpanded, onToggle, index }: FAQItemProps) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className='border rounded-lg overflow-hidden'
    >
      <ShimmerButton
        variant='ghost'
        onClick={onToggle}
        className={cn(
          'flex items-center justify-between w-full text-left transition-colors',
          isExpanded ? 'bg-card' : ''
        )}
        aria-expanded={isExpanded}
      >
        <div className='flex items-center gap-1'>
          <div className='flex-shrink-0 p-2 rounded-lg bg-card/50'>
            <Icon className='h-5 w-5 text-primary' />
          </div>
          <h3 className='font-medium text-lg'>{item.title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className='size-4 text-foreground' />
        </motion.div>
      </ShimmerButton>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className='p-4 pt-0'>
              <div className='pt-4 border-t'>
                <div className='prose  max-w-none'>
                  <p>{item.content}</p>
                </div>

                {item.image && (
                  <div className='mt-4'>
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={`Image for ${item.title}`}
                      width={600}
                      height={300}
                      className='rounded-md object-cover w-full'
                    />
                  </div>
                )}

                {item.url && (
                  <div className='mt-4'>
                    <Link
                      href={item.url}
                      className='text-primary hover:underline inline-flex items-center'
                    >
                      Learn more
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
