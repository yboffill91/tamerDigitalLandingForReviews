'use client';
import { ShimmerButton } from '@/components/ui';
import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';
import Link from 'next/link';

export function AnimatedPinWithLines() {
  return (
    <div className="flex flex-col items-center justify-center p-8 relative rounded-lg bg-[url('/features/landing/miami_ubication.webp')] bg-cover bg-center ">
      <span className="absolute top-0 right-0 rounded-lg w-full h-full bg-black/80 group-hover:bg-black/50 transition-all duration-300 ease-in-out group-hover:border-primary group-hover:border-2" />
      {/* CTA Button */}
      <Link
        href="https://www.google.com/maps/place/TAMERDigital/@25.9437414,-80.2976751,1672m/data=!3m2!1e3!4b1!4m6!3m5!1s0xac2f005d1eb885a5:0x21d75ef84ccb829f!8m2!3d25.9437414!4d-80.2976751!16s%2Fg%2F11vpdt7f8m?hl=en&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        className="absolute top-5"
      >
        <div className="flex items-center justify-center -translate-y-10 -translate-x-[1px] ">
          <ShimmerButton variant="solid" size="big">
            <StarIcon className="size-4 fill-yellow-500 text-primary-foreground group-hover:rotate-180 transition-all duration-700" />{' '}
            Leave us a Review on Google
          </ShimmerButton>
        </div>
      </Link>

      {/* Line with glow effect */}
      <motion.div
        className="w-2 bg-primary mt-4 opacity-25 -top-4 relative h-96"
        initial={{ height: 0 }}
        animate={{
          height: 100,
          boxShadow: '0 0 15px 3px rgba(16, 185, 129, 0.6)',
        }}
        transition={{
          duration: 1.2,
          boxShadow: { delay: 0.8, duration: 0.8 },
        }}
      />

      {/* Circles with pinging animation */}
      <div className="relative mt-2">
        {/* Main circle */}
        <motion.div
          className="size-12 bg-gradient-to-r from-primary to-secondary rounded-full opacity-25 shadow-lg shadow-primary/50  transform"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />

        {/* Pinging circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="size-12 border-2 border-secondary rounded-full absolute bottom-[.05rem] transform -translate-x-1/2 opacity-25 shadow-xl shadow-primary/50"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{
              scale: [1, 2.5],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1.5 + i * 0.6,
              repeatDelay: 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
