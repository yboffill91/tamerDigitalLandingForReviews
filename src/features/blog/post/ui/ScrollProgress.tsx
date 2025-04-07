import { motion, MotionValue } from 'framer-motion';

interface ScrollProgressProps {
  scaleX: MotionValue<number>;
}

export function ScrollProgress({ scaleX }: ScrollProgressProps) {
  return (
    <motion.div
      className='fixed top-[68px] left-0 right-0 h-1 bg-blue-500 z-50'
      style={{ scaleX, transformOrigin: '0%' }}
    />
  );
}
