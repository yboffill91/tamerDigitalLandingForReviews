import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div className='border-b border-zinc-800' initial={false}>
      <button
        className='flex w-full items-center justify-between py-4 text-left'
        onClick={onClick}
      >
        <span className='text-base font-medium'>{question}</span>
        <ChevronDown
          className={`h-4 w-4 text-foreground/80 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
        className='overflow-hidden'
      >
        <div className='pb-4 text-sm text-foreground/80'>{answer}</div>
      </motion.div>
    </motion.div>
  );
};
