'use client';

import { motion } from 'framer-motion';
import {
  Clock,
  Target,
  TrendingUp,
  Users,
  ArrowUpRight,
  Star,
} from 'lucide-react';
import Image from 'next/image';
import {
  IconButton3D,
  InfoCard,
  ShimmerButton,
  ShineBorder,
} from '@/components/ui';
import { ShineColors } from '@/lib';

const stats = [
  {
    value: <span className="text-primary">70%</span>,
    label: 'Small Businesses Fail Without Digital',
    description: "Stay ahead of the curve and secure your business's future",
  },
  {
    value: (
      <span className="text-primary">
        {Math.floor(Math.random() * 90) + 10}%
      </span>
    ),
    label: 'Small Businesses Fail Without Digital',
    description: `Stay ahead of the curve and secure your business's future, because ${Math.floor(Math.random() * 90) + 10}% of small businesses fail without a strong digital presence`,
  },
  {
    value: <span className="text-primary">200%</span>,
    label: 'Average Growth in 6 Months',
    description: 'Experience rapid, sustainable business expansion',
  },
];

const consequences = [
  {
    icon: Target,
    title: 'Market Share Loss',
    description:
      'While you wait, competitors are capturing your potential customers through strategic digital presence',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Stagnation',
    description:
      'Without proper digital strategies, your business growth hits a ceiling',
  },
  {
    icon: Users,
    title: 'Missed Opportunities',
    description: 'Every day without optimization means lost leads and sales',
  },
];

export function WhyNeedUs() {
  return (
    <section className=" relative overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <IconButton3D icon={Clock} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Your Business Can&apos;t Wait.
            <br />
            Your Competition Won&apos;t Stop.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/80 max-w-3xl mx-auto text-pretty mt-4"
          >
            While you&apos;re focused on running your business, your competitors
            are already moving ahead, leveraging cutting-edge digital strategies
            and positioning themselves first to capture success, attract your
            target customers, and dominate the top spots on Google. Don&apos;t
            let them get ahead of you.
          </motion.p>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={`stat-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative h-[200px] p-6 bg-card/90 backdrop-blur-sm border border-foreground/20/10 rounded-lg overflow-hidden group hover:border-primary/20 transition-all duration-300`}
            >
              <div className="relative z-10">
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="font-medium text-foreground/60 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-foreground/60">
                  {stat.description}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
        {/* Main Content Grid */}
        <div className="grid xl:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[350px]">
              <Image
                src="/features/landing/tobbitime.webp"
                alt="Digital Growth"
                fill
                priority
                className="object-contain relative z-40"
                style={{
                  maskImage: 'linear-gradient(black 80%, transparent)',
                }}
              />
              <span className="absolute top-1/4 left-1/2 -translate-x-1/2 blur-3xl bg-gradient-to-tr from-primary to-secondary size-64 -z-10 opacity-20" />
            </div>
            {/* Floating Stats */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-ring/10 backdrop-blur-sm border border-foregtound/20 rounded-lg p-4 shadow-xl mr-2 ">
              <ShineBorder shineColor={ShineColors} duration={50} />
              <div className="flex items-center gap-2 mb-2 ">
                <Star className="w-5 h-5 text-primary" fill="currentColor" />
                <span className=" font-medium">Success Rate</span>
              </div>
              <div className="text-2xl font-bold text-primary">93.5%</div>
              <div className="text-sm text-foreground/80">Client Growth</div>
            </div>
          </motion.div>

          {/* Right Column - Consequences */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold "
            >
              The Cost of Waiting
            </motion.h3>
            <div className="space-y-6">
              {consequences.map((consequence, index) => (
                <InfoCard
                  color="blue"
                  description={consequence.description}
                  icon={consequence.icon}
                  title={consequence.title}
                  index={index}
                  key={index + consequence.title}
                  className="h-40"
                />
              ))}
            </div>
          </div>
        </div>
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center gap-6"
        >
          <ShimmerButton variant="solid" size="big" className="text-sm group">
            Let&apos;s see if you meet the requirements to grow
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:scale-105" />
          </ShimmerButton>
          <p className="text-foreground/60 text-sm">
            Free Strategy Session · No Commitment Required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
