'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Users,
  Scale,
  Zap,
  Brain,
  Blocks,
  Cloud,
  BarChart2,
  Cog,
  Cpu,
  Network,
  Terminal,
  Heart,
} from 'lucide-react';
import { IconButton3D } from '@/components/ui';

export default function CoreValues() {
  return (
    <div className='relative overflow-hidden '>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute w-full h-full'>
          {/* Diagonal Lines */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className='absolute h-px w-[200%] -left-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -rotate-45'
              style={{
                top: `${20 + i * 15}%`,
                opacity: 0.1,
              }}
            />
          ))}
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mb-4'
          >
            <IconButton3D icon={Heart} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-4xl md:text-5xl font-bold  mb-4'
          >
            Built on Strong
            <span className='heading-gradient'> Values</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-foreground/70 max-w-5xl mx-auto text-lg'
          >
            More than principles, these are the cornerstones of our approach to
            digital excellence
          </motion.p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* First Row - One wide card (2x) + one normal card */}
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group lg:col-span-${
                index === 0 || index === 3 ? '2' : '1'
              }`}
              key={index}
            >
              <div className='relative overflow-hidden rounded-2xl  border border-ring/10 p-8 h-full transition-all duration-300 hover:translate-y-[-4px] flex gap-8'>
                <div className='absolute inset-0'>
                  <div className='absolute inset-0 bg-card opacity-5' />
                  <div
                    className='absolute inset-0 bg-gradient-to-l from-primary/10 via-ring/5 to-transparent'
                    style={{
                      maskImage: 'linear-gradient(to left, black, transparent)',
                      WebkitMaskImage:
                        'linear-gradient(to left, black, transparent)',
                    }}
                  />
                </div>
                <div className='pointer-events-none absolute right-0 top-0 h-full w-1/2 z-10'>
                  <div className='absolute inset-0'>
                   
                  </div>
                </div>
                {index === 0 && (
                  <div className='flex-1'>
                    <div className='relative z-10 mb-6'>
                      <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
                        <Scale className='w-6 h-6 ' />
                      </div>
                    </div>
                    <div className='relative z-10'>
                      <h3 className='text-2xl font-semibold  mb-3'>
                        Integrity & Trust
                      </h3>
                      <p className='text-foreground/70 leading-relaxed'>
                        Building Lasting Relationships We believe in
                        transparency and honesty in every interaction. Our
                        commitment to ethical practices forms the foundation of
                        lasting partnerships.
                      </p>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className='flex-1'>
                    <div className='relative z-10 mb-6'>
                      <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
                        <Lightbulb className='w-6 h-6 ' />
                      </div>
                    </div>
                    <div className='relative z-10'>
                      <h3 className='text-2xl font-semibold  mb-3'>
                        Passion for Excellence
                      </h3>
                      <h4 className='heading-gradient text-lg mb-3'>
                        Driven by Quality
                      </h4>
                      <p className='text-foreground/70 leading-relaxed'>
                        Our dedication to excellence goes beyond meeting
                        expectations. We&apos;re passionate about creating
                        solutions that truly make a difference.
                      </p>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className='flex-1'>
                    <div className='relative z-10 mb-6'>
                      <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
                        <Users className='w-6 h-6 ' />
                      </div>
                    </div>
                    <div className='relative z-10'>
                      <h3 className='text-2xl font-semibold  mb-3'>
                        Results-Focused
                      </h3>
                      <h4 className='heading-gradient text-lg mb-3'>
                        Measurable Impact
                      </h4>
                      <p className='text-foreground/70 leading-relaxed'>
                        Every strategy and decision is guided by data and
                        focused on delivering tangible results that drive your
                        business forward.
                      </p>
                    </div>
                  </div>
                )}
                {index === 3 && (
                  <div className='flex-1'>
                    <div className='relative z-10 mb-6'>
                      <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
                        <Zap className='w-6 h-6 text-primary' />
                      </div>
                    </div>
                    <div className='relative z-10'>
                      <h3 className='text-2xl font-semibold  mb-3'>
                        Customer-Centric Approach
                      </h3>
                      <h4 className='heading-gradient text-lg mb-3'>
                        Your Success, Our Priority
                      </h4>
                      <p className='text-foreground/70 leading-relaxed'>
                        We are committed to deeply understanding the needs and
                        goals of our clients to design solutions that really
                        transform your business
                      </p>
                    </div>
                  </div>
                )}
                {index === 0 && (
                  <div className='hidden lg:block relative z-10 flex-1'>
                    <div className='space-y-4'>
                      <div className='bg-card border border-ring/50 rounded-lg p-4'>
                        <div className='flex items-center gap-2 mb-3'>
                          <div className='w-6 h-6 rounded-full bg-background-primary/90' />
                          <span className='text-sm '>TRUST VERIFICATION</span>
                          <div className='ml-auto'>
                            <div className='w-5 h-5 rounded-full bg-background-primary/90' />
                          </div>
                        </div>
                        <div className='space-y-2'>
                          <div className='h-2 bg-background-primary/90 rounded w-3/4' />
                          <div className='h-2 bg-background-primary/90 rounded w-1/2' />
                        </div>
                      </div>
                      <div className='bg-card border border-ring/50 rounded-lg p-4'>
                        <div className='flex items-center gap-2 mb-3'>
                          <div className='w-6 h-6 rounded-full bg-background-primary/90' />
                          <span className='text-sm '>TRANSPARENCY SCORE</span>
                          <div className='ml-auto'>
                            <div className='w-5 h-5 rounded-full bg-background-primary/90' />
                          </div>
                        </div>
                        <div className='space-y-2'>
                          <div className='h-2 bg-background-primary/90 rounded w-2/3' />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {index === 3 && (
                  <div className='hidden lg:block relative z-10 flex-1'>
                    <div className='relative w-full h-full'>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='relative w-[250px] h-[250px]'>
                          {/* Rotating circles */}
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className='absolute inset-0'
                          >
                            <div className='absolute inset-0 rounded-full border-2 border-dashed border-primary/20' />
                          </motion.div>
                          <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                              duration: 15,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className='absolute inset-[15%]'
                          >
                            <div className='absolute inset-0 rounded-full border-2 border-dashed border-primary/30' />
                          </motion.div>

                          {/* Center icon */}
                          <div className='absolute inset-[40%] bg-card border border-ring/50 rounded-full flex items-center justify-center'>
                            <Users className='w-8 h-8 text-primary' />
                          </div>

                          {/* Orbiting elements */}
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className='absolute inset-0'
                          >
                            <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                              <div className='w-10 h-10 bg-card border border-ring/50 rounded-xl flex items-center justify-center'>
                                <Scale className='w-5 h-5 text-primary' />
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                              duration: 15,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className='absolute inset-[15%]'
                          >
                            <div className='absolute bottom-0 right-0'>
                              <div className='w-10 h-10 bg-card border border-ring/50 rounded-xl flex items-center justify-center'>
                                <Lightbulb className='w-5 h-5 text-primary' />
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className='absolute inset-0 border border-primary/0 rounded-2xl transition-all duration-300 group-hover:border-primary/50' />
              </div>
            </motion.div>
          ))}

          {/* Second Row - One normal card + one wide card (2x) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='relative group'
          >
            <div className='relative overflow-hidden rounded-2xl  border border-ring/10 p-8 h-full transition-all duration-300 hover:translate-y-[-4px] flex gap-8'>
              <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-card opacity-5' />
                <div
                  className='absolute inset-0 bg-gradient-to-l from-primary/10 via-primary/5 to-transparent'
                  style={{
                    maskImage: 'linear-gradient(to left, black, transparent)',
                    WebkitMaskImage:
                      'linear-gradient(to left, black, transparent)',
                  }}
                />
              </div>
              <div className='pointer-events-none absolute right-0 top-0 h-full w-1/2 z-10'>
                <div className='absolute inset-0'>
                
                </div>
              </div>
              <div className='flex-1'>
                <div className='relative z-10 mb-6'>
                  <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
                    <Users className='w-6 h-6 ' />
                  </div>
                </div>
                <div className='relative z-10'>
                  <h3 className='text-2xl font-semibold  mb-3'>
                    Results-Focused
                  </h3>
                  <h4 className='heading-gradient text-lg mb-3'>
                    Measurable Impact
                  </h4>
                  <p className='text-foreground/70 leading-relaxed'>
                    Every strategy and decision is guided by data and focused on
                    delivering tangible results that drive your business
                    forward.
                  </p>
                </div>
              </div>
              <div className='absolute inset-0 border border-primary/0 rounded-2xl transition-all duration-300 group-hover:border-primary/50' />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='relative group lg:col-span-2'
          >
            <div className='relative overflow-hidden rounded-2xl  p-8 h-full transition-all duration-300'>
              <div className='absolute inset-0'>
                <div className='absolute right-0 top-0 w-2/3 h-full'>
                  <div className='relative w-full h-full'>
                    <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px]'>
                      <div
                        className='absolute inset-0 rounded-2xl border border-ring/50'
                        style={{
                          transform: 'rotate(45deg)',
                          borderWidth: '2px',
                        }}
                      />
                      <div
                        className='absolute inset-[10%] rounded-2xl border border-ring/30'
                        style={{
                          transform: 'rotate(45deg)',
                          borderWidth: '2px',
                        }}
                      />
                      <div
                        className='absolute inset-[20%] rounded-2xl border border-ring/20'
                        style={{
                          transform: 'rotate(45deg)',
                          borderWidth: '2px',
                        }}
                      />
                      <div
                        className='absolute inset-[30%] rounded-2xl border border-ring/10'
                        style={{
                          transform: 'rotate(45deg)',
                          borderWidth: '2px',
                        }}
                      />

                      {/* Top */}
                      <div
                        className='absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 
                          rounded-xl bg-card border border-ring/50 flex items-center justify-center'
                      >
                        <Brain className='w-6 h-6 text-primary' />
                        <span className='sr-only'>AI/Machine Learning</span>
                      </div>
                      {/* Top Right */}
                      <div
                        className='absolute top-[15%] right-[15%] w-10 h-10 
                          rounded-xl bg-card border border-ring/50 flex items-center justify-center'
                      >
                        <Blocks className='w-6 h-6 text-primary' />
                        <span className='sr-only'>Blockchain</span>
                      </div>
                      {/* Right */}
                      <div
                        className='absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 
                          rounded-xl bg-card border border-ring/50 flex items-center justify-center'
                      >
                        <Cloud className='w-6 h-6 text-primary' />
                        <span className='sr-only'>Cloud Computing</span>
                      </div>
                      {/* Bottom Right */}
                      <div
                        className='absolute bottom-[15%] right-[15%] w-10 h-10 
                          rounded-xl bg-card border border-ring/50 flex items-center justify-center'
                      >
                        <BarChart2 className='w-6 h-6 text-primary' />
                        <span className='sr-only'>Big Data Analytics</span>
                      </div>
                      {/* Bottom */}
                      <div
                        className='absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 
                          rounded-xl bg-card border border-ring/50 flex items-center justify-center'
                      >
                        <Cog className='w-6 h-6 text-primary' />
                        <span className='sr-only'>Automate</span>
                      </div>
                      {/* Bottom Left */}
                      <div
                        className='absolute bottom-[15%] left-[15%] w-10 h-10 
                          rounded-xl bg-card border border-ring/50 flex items-center justify-center'
                      >
                        <Cpu className='w-6 h-6 text-primary' />
                        <span className='sr-only'>IoT</span>
                      </div>
                      {/* Left */}
                      <div
                        className='absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 
                          rounded-xl bg-card border border-ring/50 flex items-center justify-center'
                      >
                        <Network className='w-6 h-6 text-primary' />
                        <span className='sr-only'>APIs/Integration</span>
                      </div>
                      {/* Top Left */}
                      <div
                        className='absolute top-[15%] left-[15%] w-10 h-10 
                          rounded-xl bg-card border border-ring/50 flex items-center justify-center'
                      >
                        <Terminal className='w-6 h-6 text-primary' />
                        <span className='sr-only'>DevOps</span>
                      </div>

                      {/* Center Arrows */}
                      <div className='absolute inset-[40%] rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center'>
                        <Scale className='w-6 h-6 text-foreground' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative z-10 max-w-md'>
                <div className='relative z-10 mb-6'>
                  <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
                    <Lightbulb className='w-6 h-6 text-primary' />
                  </div>
                </div>
                <div className='relative z-10'>
                  <h3 className='text-2xl font-semibold  mb-3'>
                    Continuous Innovation
                  </h3>
                  <p className='text-foreground/70 leading-relaxed'>
                    We stay ahead of digital trends, constantly exploring new
                    technologies and methodologies to provide cutting-edge
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

      
        </div>
      </div>
    </div>
  );
}
