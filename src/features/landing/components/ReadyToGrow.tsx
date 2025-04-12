'use client';

import { motion } from 'framer-motion';
import { Dancing_Script } from 'next/font/google';
import Image from 'next/image';
import { Play } from 'lucide-react';
import Link from 'next/link';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

const metrics = [
  {
    label: 'Projects Completed',
    percentage: 6280,
    description: 'Successful Projects',
  },
  {
    label: 'Satisfied Clients',
    percentage: 9280,
    description: 'Happy Customers',
  },
  {
    label: 'Expert Teams',
    percentage: 380,
    description: 'Specialists',
  },
  {
    label: 'Repeat Customers',
    percentage: 8760,
    description: 'Return Rate',
  },
];

export function ReadyToGrow() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Video/Image */}
          <div className="space-y-6">
            {/* Video Section */}
            <div className="relative aspect-video rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                alt="Team Meeting"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-card/40 group-hover:bg-card/20 transition-colors duration-500" />
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 hover:shadow-[0_0_30px_rgba(125,206,160,0.5)] group">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                <Play className="w-8 h-8 text-primary-foreground ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* About Us Link Card */}
            <Link
              href="/about"
              className="block relative aspect-[16/9] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Our Team"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent group-hover:via-card/70 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover:translate-y-[-8px] transition-all duration-500">
                <div className="flex items-center gap-2 text-primary font-medium mb-3">
                  <span className="w-8 h-[2px] bg-primary" />
                  <span>Meet Our Team</span>
                </div>
                <h3 className="group-hover:text-primary transition-colors">
                  The Minds Behind TAMERDigital
                </h3>
                <p className="text-foreground text-sm max-w-md">
                  Get to know the passionate experts who drive extraordinary
                  results for our clients every day
                </p>
                <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary/10 rounded-lg text-primary text-sm font-medium group-hover:bg-primary/20 transition-colors">
                  <span>Meet Our Experts</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-primary/20 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                Our Expertise
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-bold  mb-6 leading-tight"
              >
                Mastering Digital Growth Through Experience
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-primary font-medium"
              >
                A Decade of Combined Digital Marketing Excellence
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-foreground/80 text-lg leading-relaxed"
            >
              With over a decade of combined experience in digital marketing,
              our team brings deep expertise in SEO, social media, and
              conversion optimization. We&apos;ve mastered the art of turning
              complex digital challenges into growth opportunities, consistently
              delivering results that exceed industry standards.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-foreground/80 text-lg leading-relaxed"
            >
              Our knowledge isn&apos;t just theoretical - it&apos;s
              battle-tested through hundreds of successful campaigns. We
              understand the nuances of digital marketing in ways that only come
              from years of hands-on experience and continuous learning in this
              ever-evolving landscape.
            </motion.p>

            {/* Progress Bars */}
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <div key={metric.label} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className=" font-medium">{metric.label}</span>
                      <span className="text-sm text-foreground/80">
                        / {metric.description}
                      </span>
                    </div>
                    <span className="text-primary text-sm font-medium">
                      {metric.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-card rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CEO Signature */}
            <div className="flex items-center gap-4 pt-8 border-t border-foreground/50">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-ring p-px">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                  alt="CEO"
                  width={64}
                  height={64}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <div
                  className={`${dancingScript.className} text-2xl text-primary`}
                >
                  Jorge R Sanchez
                </div>
                <div className="text-foreground/80 text-sm">CEO & FOUNDER</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
