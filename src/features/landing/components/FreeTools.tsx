'use client';

import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  BorderBeam,
  Card,
  CardContent,
  CardHeader,
  GridCardSet,
  IconButton3D,
  InfoCard,
  ShimmerButton,
} from '@/components/ui';
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
        <div className="grid md:grid-cols-2 gap-2">
          {tools.map(
            (
              { icon: Icon, name, description, status, href, action },
              index
            ) => (
              <Card
                className={`border border-foreground/10 rounded-lg relative p-2 min-h-48 bg-card group hover:bg-ring/20 transition-colors duration-700 ease-in-out ${!status ? 'opacity-20 pointer-events-none' : ''}`}
                key={index}
              >
                {!status ? (
                  <span className="bg-primary px-1 py-px rounded-lg text-[.6rem] absolute top-2 right-2 opacity-100">
                    Soon
                  </span>
                ) : (
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-700 ease-in-out absolute top-2 right-2 opacity-5 group-hover:opacity-100 text-ring" />
                )}
                <CardHeader className="flex gap-2 items-center">
                  <span className="p-1 bg-primary rounded-lg group-hover:rotate-45 transition-all duration-700 ease-in-out">
                    <Icon className="group-hover:-rotate-45 transition-all duration-700 ease-in-out group-hover:scale-125 text-primary-foreground" />
                  </span>
                  <h3 className="text-primary group-hover:text-ring group-hover:translate-x-3 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:font-semibold flex">
                    {name}
                  </h3>
                </CardHeader>
                <CardContent className="flex flex-col bg-ring/10 p-2 rounded-lg min-h-28 justify-between">
                  <p className="text-pretty text-sm">{description}</p>
                  <Link href={href}>
                    <ShimmerButton className="w-full" variant="solid">
                      {action}
                    </ShimmerButton>
                  </Link>
                </CardContent>
              </Card>
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
