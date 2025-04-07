'use client';
import React from 'react';
import { IconMailFilled } from '@tabler/icons-react';
import { cn } from '@/lib';
import { Grid, Input, Label, ShimmerButton } from '@/components/ui';
import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MailCheck } from 'lucide-react';

export function ContactFormGridWithDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='relative flex flex-col items-center overflow-hidden lg:items-start'
      >
        <div className='flex items-start justify-start'>
          <FeatureIconContainer className='flex items-center justify-center overflow-hidden'>
            <div className='h-6 w-6'>
              <IconMailFilled className='h-6 w-6 text-primary' />
            </div>
          </FeatureIconContainer>
        </div>
        <h2 className='mt-9 text-left text-xl font-bold  md:text-3xl lg:text-5xl'>
          Contact US
        </h2>
        <p className='mt-8 max-w-lg text-center text-base text-foreground/80 md:text-left'>
          We are always looking for ways to improve our tools and services.
          Contact us and let us know how we can help you.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='div relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32'
        >
          <Pin className='-left-1 -top-1' />

          <Image
            src='/features/contact/world.svg'
            width={500}
            height={500}
            alt='world map'
            className='[transform:rotateX(45deg)_translateZ(0px)] [filter:invert(70%)_sepia(0%)_saturate(1371%)_hue-rotate(180deg)_brightness(95%)_contrast(95%)]'
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-lg border border-card p-4 sm:p-10 bg-gradient-to-l from-card via-card/90 to-card/20'
      >
        <Grid />
        <form
          className='relative z-40 w-full'
          onSubmit={(e) => e.preventDefault()}
        >
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 items-center justify-center'>
            <LabelInputContainer>
              <Label htmlFor='firstname'>First name</Label>
              <Input id='firstname' placeholder='John' type='text' />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor='lastname'>Last name</Label>
              <Input id='lastname' placeholder='Doe' type='text' />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='email'>Email Address</Label>
            <Input id='email' placeholder='you@example.com' type='email' />
          </LabelInputContainer>
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='company'>Company</Label>
            <Input id='company' placeholder='Your company' type='text' />
          </LabelInputContainer>
          <LabelInputContainer className='mb-2'>
            <Label htmlFor='message'>Message</Label>
            <TextArea id='message' placeholder='Your message' rows={4} />
          </LabelInputContainer>

          <ShimmerButton type='submit' variant='solid' className='gap-4 w-full'>
            Send Message
            <MailCheck className='size-4' />
          </ShimmerButton>
        </form>
      </motion.div>
    </motion.div>
  );
}

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  const radius = 100;
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
              ${
                visible ? radius + 'px' : '0px'
              } circle at ${mouseX}px ${mouseY}px,
              rgba(19, 137, 253, 0.75),
              transparent 80%
            )
          `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className='p-[3px] rounded-lg transition duration-300 group/input'
    >
      <textarea
        ref={ref}
        className={cn(
          'w-full rounded-lg border-none bg-card px-3 py-2 text-sm  placeholder:text-foreground/80 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400',
          className
        )}
        {...props}
      />
      <BottomGradient />
    </motion.div>
  );
});
TextArea.displayName = 'TextArea';

const BottomGradient = () => {
  return (
    <>
      <span className='absolute inset-x-0 -bottom-px h-[3px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100' />
      <span className='absolute inset-x-10 -bottom-px mx-auto h-[3px] w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover/btn:opacity-100' />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};

const Pin = ({ className }: { className?: string }) => {
  const handleClick = () => {
    window.open(
      'https://www.google.com/maps/place/TAMERDigital/@25.9437461,-80.302546,1672m/data=!3m2!1e3!4b1!4m6!3m5!1s0xac2f005d1eb885a5:0x21d75ef84ccb829f!8m2!3d25.9437414!4d-80.2976751!16s%2Fg%2F11vpdt7f8m?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D',
      '_blank'
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
      style={{
        transform: 'translateZ(1px)',
      }}
      className={cn(
        'absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500',
        className
      )}
    >
      <div className='h-full w-full'>
        <button
          onClick={handleClick}
          className='absolute inset-x-0 top-0 z-20 mx-auto inline-block w-fit rounded-lg bg-card/70 px-3 py-2 text-xs font-medium  hover:bg-card transition-colors duration-200 cursor-pointer'
        >
          Click to see us
          <div className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0 transition-opacity duration-500' />
        </button>

        <div
          style={{
            perspective: '800px',
            transform: 'rotateX(70deg) translateZ(0px)',
          }}
          className='absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2'
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
              className='absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-primary/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'
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
              className='absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-primary/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'
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
              className='absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-primary/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className='absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-primary blur-[2px]' />
          <motion.div className='absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-primary' />
          <motion.div className='absolute bottom-1/2 right-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-primary blur-[3px]' />
          <motion.div className='absolute bottom-1/2 right-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-primary' />
        </>
      </div>
    </motion.div>
  );
};

export const FeatureIconContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative h-14 w-14 rounded-lg bg-gradient-to-b from-background- to-card p-[4px]',
        className
      )}
    >
      <div
        className={cn(
          'relative z-20 h-full w-full rounded-lg bg-card',
          className
        )}
      >
        {children}
      </div>
      <div className='absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-card opacity-50 blur-lg'></div>
      <div className='absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-primary to-transparent'></div>
      <div className='absolute inset-x-0 bottom-0 mx-auto h-[8px] w-[60%] bg-gradient-to-r from-transparent via-primary to-transparent blur-sm'></div>
    </div>
  );
};
