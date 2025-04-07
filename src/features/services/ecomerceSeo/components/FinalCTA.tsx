'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { HeroButtonsSet } from '@/components/ui';

const messages = [
  {
    text: 'Our organic traffic increased by 312% in 6 months!',
    delay: 0.7,
    avatar: '/avatar2.webp',
    position: 'right',
  },
  {
    text: 'How did you handle the product variations?',
    delay: 1.1,
    avatar: '/avatar3.webp',
    position: 'left',
  },
  {
    text: "Their technical SEO audit found issues we didn't even know existed",
    delay: 1.5,
    avatar: '/avatar4.webp',
    position: 'right',
  },
  {
    text: 'Our conversion rate doubled after implementing their suggestions',
    delay: 1.9,
    avatar: '/avatar1.webp',
    position: 'left',
  },
  {
    text: "Best ROI we've seen from any marketing investment",
    delay: 2.3,
    avatar: '/avatar2.webp',
    position: 'right',
  },
];

export const EcomerceFinalCTA = () => {
  return (
    <div className="w-full py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/30 gap-x-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
            Get Started
          </div>
          <h2 className="text-2xl font-bold  mt-6 mb-6">
            Ready to Dominate E-commerce Search Rankings?
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Join hundreds of e-commerce stores already dominating their markets
          </p>
        </div>
        <div className="absolute inset-0">
          <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/10 relative">
          <div className="flex flex-col lg:flex-row items-center gap-44">
            {/* Left side - Animated Chat Messages */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm text-foreground/80">Live Chat</span>
              </div>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: message.delay, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`flex items-start gap-3 ${message.position === 'right' ? 'justify-end' : ''}`}
                >
                  {message.position === 'left' && (
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={message.avatar}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div
                    className={`bg-foreground/10 backdrop-blur-sm px-4 py-2 rounded-lg ${
                      message.position === 'right'
                        ? 'bg-primary/20'
                        : 'bg-foreground/10 backdrop-blur-sm'
                    }`}
                  >
                    <p className="text-pretty">{message.text}</p>
                  </div>
                  {message.position === 'right' && (
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={message.avatar}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right side - CTA Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold "
              >
                Ready to Dominate E-commerce Search Rankings?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                className="text-xl text-foreground/90"
              >
                Get your free custom SEO strategy and discover how we can help
                your store reach its full potential
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <button className="px-8 py-3 bg-primary  font-semibold rounded-lg hover:bg-ring transition-colors">
                  Get My Free SEO Strategy
                </button>
                <button className="px-8 py-3 bg-foreground/5 backdrop-blur-sm  font-semibold rounded-lg hover:bg-foreground/10 transition-colors border border-foreground/10">
                  Schedule a Call
                </button> */}
                <HeroButtonsSet
                  firstBtnText="Get My Free SEO Strategy"
                  secondBtnText=" Schedule a Call"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                viewport={{ once: true }}
                className="text-sm text-foreground/80"
              >
                Join hundreds of e-commerce stores already dominating their
                markets
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
