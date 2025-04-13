'use client';

import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { IconButton3D } from '@/components/ui';
import { tools } from '@/features/layout/header/utils/TOOLS.const';
import Image from 'next/image';

export function FreeTools() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <IconButton3D icon={Wrench} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className=" mb-4"
        >
          Start Growing with Our <span className="text-primary">FREE</span>{' '}
          Tools
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground/80 max-w-2xl mx-auto text-base"
        >
          Before investing a single cent, we give you a pack of digital
          marketing tools to outperform 80% of your market. Why? Because we want
          you to see results from day one.
        </motion.p>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
        {/* Left Column - Tools */}
        <div className="flex items-center justify-center gap-1 flex-wrap">
          {tools.map(
            ({ icon: IconElement, name, description, status, href }, index) => (
              <motion.div
                key={`tool-${name}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-72"
              >
                <Link
                  href={href}
                  className={`${status ? '' : 'pointer-events-none'}`}
                >
                  <div
                    className={`w-full h-32  flex flex-col gap-2 rounded-lg border px-4 py-2 relative ${status ? 'bg-ring/10 border-foreground/20 group hover:bg-ring/20 transition-all duration-700 ease-in-out ' : 'bg-foreground/5'}`}
                  >
                    <div className="flex gap-2 items-center">
                      <span
                        className={`p-1 rounded-lg border ${
                          status
                            ? 'bg-ring text-primary-foreground border-primary group-hover:scale-110 transition-all duration-700 ease-in-out'
                            : 'bg-foreground/20 text-foreground/40'
                        }`}
                      >
                        <IconElement />
                      </span>
                      <h3
                        className={
                          status ? 'text-primary' : 'text-foreground/40'
                        }
                      >
                        {name}
                      </h3>
                    </div>
                    <p
                      className={` ${status ? 'text-foreground/60' : 'text-foreground/20'} text-sm`}
                    >
                      {description}
                    </p>
                    <ArrowUpRight className="opacity-0 absolute top-2 right-2 text-primary size-4 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-700 ease-in-out" />
                    <span
                      className={
                        status
                          ? 'hidden'
                          : 'flex items-center justify-center bg-ring/50 p-1 text-primary-foreground text-[0.7rem] rounded absolute top-2 right-2'
                      }
                    >
                      Soon
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          )}
        </div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center h-full min-h-[350px]"
        >
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/features/landing/Tobby herramientas.png"
              alt="Digital Growth Tools"
              fill
              className="object-contain relative z-40"
              style={{
                maskImage: 'linear-gradient(black 80%, transparent)',
              }}
            />
            <span className="absolute top-1/4 left-1/2 -translate-x-1/2 blur-3xl bg-gradient-to-tr from-primary to-secondary size-64 -z-10 opacity-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
