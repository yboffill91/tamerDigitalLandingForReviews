'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { ShimmerButton } from '@/components/ui';

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const transform = 'translate(-50%, -50%) rotateX(40deg) scale(0.9)';

  return (
    <div className={cn('relative group/pin z-50', containerClassName)}>
      <div
        style={{
          perspective: '1000px',
          transform: 'rotateX(70deg) translateZ(0deg)',
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl transition duration-700 overflow-hidden"
        >
          <div className={cn('relative', className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </div>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-100">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-auto">
          <Link href={href || '/'}>
            <ShimmerButton size="big" variant="solid">
              <div className="flex items-center gap-2 ">
                <Star className="w-4 h-4 group-hover:rotate-180 group-hover:fill-yellow-500 text-yellow-50 transition-all duration-700 ease-in-out" />
                {title}
              </div>
            </ShimmerButton>
          </Link>
        </div>
        <div
          style={{
            perspective: '1000px',
            transform: 'rotateX(70deg) translateZ(0)',
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-ring/[0.08] shadow-[0_8px_16px_rgb(125,206,160,0.1)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-ring/[0.08] shadow-[0_8px_16px_rgb(125,206,160,0.1)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-ring/[0.08] shadow-[0_8px_16px_rgb(125,206,160,0.1)]"
            ></motion.div>
          </>
        </div>
        <>
          <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-ring translate-y-[14px] w-px h-40 blur-[2px]" />
          <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-ring translate-y-[14px] w-px h-40" />
          <div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-ring translate-y-[14px] w-[4px] h-[4px] rounded-full blur-[3px]" />
          <div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-ring translate-y-[14px] w-[2px] h-[2px] rounded-full" />
        </>
      </div>
    </motion.div>
  );
};
