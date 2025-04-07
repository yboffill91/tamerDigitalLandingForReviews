'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';

const Input = React.forwardRef<
  HTMLInputElement | null,
  React.ComponentPropsWithoutRef<'input'>
>(({ className, type, ...props }, ref) => {
  const radius = 100; // change this to increase the rdaius of the hover effect
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  interface handleMouseMoveProps {
    currentTarget: HTMLElement;
    clientX: number;
    clientY: number;
  }
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: handleMouseMoveProps) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <motion.div
      style={{
        background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          hsla(221.2, 83.2%, 53.3%, 0.75),
          transparent 80%
        )
      `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className='p-[3px] rounded-lg transition duration-300 group/input'
    >
      <input
        type={type}
        className={cn(
          `flex h-10 w-full border-none bg-background-primary/90 text-foreground rounded-md px-3 py-2 text-sm 
           file:border-0 file:bg-transparent file:text-sm file:font-medium 
           placeholder:text-foreground/80
           focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring
           disabled:cursor-not-allowed disabled:opacity-50
          shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `,
          className
        )}
        ref={ref}
        {...props}
      />
    </motion.div>
  );
});
Input.displayName = 'Input';

export { Input };
