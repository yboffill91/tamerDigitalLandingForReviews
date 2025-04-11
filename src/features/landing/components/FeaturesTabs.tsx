'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { BarChart, Circle } from 'lucide-react';
import { IconButton3D } from '@/components/ui';
import {
  EmailMarketingCard,
  GMBStatsCard,
  MarketAnalysis,
  RankTrackingCard,
  SalesFunnelCard,
} from './card-grid';

const timelineData = [
  {
    title: 'Email Marketing Results',
    content: <EmailMarketingCard />,
    description: {
      title: 'Email Marketing Results',
      text: 'Transform your customer relationships with proven email marketing strategies that drive engagement and sales:',
      points: [
        'Capture attention with 48% higher open rates, meaning more people will see your branded offers and messages',
        'Drive 65% more website visits through engaging email content that converts readers into active customers, educating your customers',
        'Generate 36% more revenue from each email campaign through targeted messaging and automation',
        'Build lasting relationships that increase customer value by 25% through personalized engagement',
      ],
    },
  },
  {
    title: 'Local Business Growth',
    content: <GMBStatsCard />,
    description: {
      title: 'Local Business Growth',
      text: 'Watch your local presence skyrocket with proven tactics that put your business at the top of the local pack:',
      points: [
        'Dominate local searches : Stand out with an 85% optimized Google Business profile that makes your business the preferred choice in your area',
        'Increase visibility : Get 127% more profile views from local customers actively searching for your services',
        'Increase direct engagement : ​Get the phone ringing with 89% more client inquiries and appointment requests ready to connect',
        'Drive foot traffic : Attract 156% more customers asking for directions to your door',
      ],
    },
  },
  {
    title: 'Search Rankings & Visibility',
    content: <RankTrackingCard />,
    description: {
      title: 'Search Rankings & Visibility',
      text: 'Experience the power of having a fast website that responds with fast speed so you don’t lose visitors.:',
      points: [
        'Attract customers with high purchase intent: Get top positions on page 1 for your most valuable keywords, like 93.5% of our customers',
        'Increase website traffic: Increase visitors by 6.6 times with organic traffic growth tailored to your audience without ads',
        'Attract visitors seamlessly: Keep them engaged with pages loading 45% faster, improving rankings and conversions',
        'Maximize your marketing budget: Get a 4.2x ROI through sustainable, long-term organic growth strategies',
      ],
    },
  },
  {
    title: 'Sales & Conversion Growth',
    content: <SalesFunnelCard />,
    description: {
      title: 'Sales & Conversion Growth',
      text: 'Turn visitors into customers with a data-driven approach to conversion optimization:',
      points: [
        'Nearly triple your sales with a 285% boost in conversion rates through optimized user journeys',
        'Attract 15,000+ ready-to-buy visitors monthly through targeted traffic strategies',
        'Fill your sales pipeline with 4,500 qualified leads every month - each pre-sold on your value',
        'Add $187,500 to your monthly revenue through systematic conversion optimization',
      ],
    },
  },
  {
    title: 'Multi-Channel Growth',
    content: <MarketAnalysis />,
    description: {
      title: 'Multi-Channel Growth Results',
      text: 'Maximize your market presence with a synchronized approach across every digital touchpoint:',
      points: [
        'Paid Advertising: Get more from every ad dollar with 45% higher returns and 30% lower acquisition costs',
        'Organic Search: Dominate your market with top 3 rankings for 80% of valuable keywords',
        'Content Strategy: Convert readers to customers with content that generates 67% more qualified leads',
        'Social Media: Build a thriving community with 180% higher engagement and sustainable audience growth',
        'Total Impact: Multiply your marketing investment by 4.2x through synchronized channel growth',
      ],
    },
  },
];

export function FeaturesTabs() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10 py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
          <IconButton3D icon={BarChart} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-center"
        >
          It&apos;s not a dream.
          <br />
          It&apos;s what our clients achieve every day.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground/80 max-w-3xl mx-auto text-center text-pretty"
        >
          Turn your vision into reality with our digital marketing agency; we
          focus on delivering measurable and lasting results. Our clients
          experience extraordinary growth in revenue and visibility every day.
        </motion.p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {timelineData.map((item, index) => (
          <div key={index} className="flex justify-start pt-40 gap-10 pl-16">
            <div className="relative w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Card Component */}
                <div className="space-y-4">
                  <h3 className="text-primary text-2xl font-bold">
                    {item.title}
                  </h3>
                  <div className="h-[400px]">{item.content}</div>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <p className="text-foreground/80 leading-relaxed">
                    {item.description.text}
                  </p>
                  <ul className="space-y-4">
                    {item.description.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-foreground/80 "
                      >
                        <Circle className="text-primary h-2 mt-2 fill-ring" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-10 absolute -left-5 w-10 rounded-full bg-[#202020] flex items-center justify-center z-20">
              <div
                className={`h-4 w-4 rounded-full transition-all duration-300 ${
                  scrollYProgress.get() * height >
                  index * (height / timelineData.length)
                    ? 'bg-primary border-primary'
                    : 'bg-primary/20 border-primary/30'
                } border`}
              />
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute left-0 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-primary/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-10 ml-[1px]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
