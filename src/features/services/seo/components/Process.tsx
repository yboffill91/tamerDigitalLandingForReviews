'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { phases } from '../utils';
import { ChartColumn } from 'lucide-react';
import { LeadingSection } from '@/features/services/components';

export function Process() {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <LeadingSection
            badgeText='Our Proven Process'
            description=' A systematic approach to turn technical challenges into explosive
            growth opportunities'
            heading='Transform Your Technical SEO in 90 Days'
            icon={ChartColumn}
          />
        </div>

        <div className='relative'>
          {/* Vertical Line */}
          <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20'></div>

          {/* Timeline Items */}
          {phases.map((phase, index) => (
            <div key={index} className='relative mb-16 last:mb-0'>
              <div
                className={`flex items-center gap-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <div
                  className={`w-1/2 relative ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                >
                  <h3 className='text-2xl font-bold bg-background-primary mb-4 leading-tight p-3'>
                    {phase.title}
                  </h3>
                  <p className='text-foreground text-sm leading-relaxed p-3 text-pretty'>
                    {phase.description}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full'>
                  <div className='absolute w-8 h-8 bg-primary/20 rounded-full -left-2 -top-2 animate-pulse'></div>
                </div>

                {/* Visual Side */}
                <div className='w-1/2 relative'>
                  <div className='h-[250px] rounded-xl relative overflow-hidden group'>
                    {index === 3 ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 600 300'
                        className='w-full h-full'
                      >
                        {/* Metallic "100%" Text */}
                        <defs>
                          <linearGradient
                            id='metalGradient'
                            x1='0%'
                            y1='0%'
                            x2='0%'
                            y2='100%'
                          >
                            <stop
                              offset='0%'
                              stopColor='#ffffff'
                              stopOpacity='0.9'
                            />
                            <stop
                              offset='20%'
                              stopColor='#d0d0d0'
                              stopOpacity='0.8'
                            />
                            <stop
                              offset='50%'
                              stopColor='#888888'
                              stopOpacity='0.7'
                            />
                            <stop
                              offset='100%'
                              stopColor='#333333'
                              stopOpacity='0.95'
                            />
                          </linearGradient>

                          <filter
                            id='shadow'
                            x='-10%'
                            y='-10%'
                            width='120%'
                            height='120%'
                          >
                            <feGaussianBlur in='SourceAlpha' stdDeviation='5' />
                            <feOffset dx='2' dy='8' result='offsetblur' />
                            <feComponentTransfer>
                              <feFuncA type='linear' slope='0.7' />
                            </feComponentTransfer>
                            <feMerge>
                              <feMergeNode />
                              <feMergeNode in='SourceGraphic' />
                            </feMerge>
                          </filter>

                          <linearGradient
                            id='blueGradient'
                            x1='0%'
                            y1='0%'
                            x2='100%'
                            y2='0%'
                          >
                            <stop offset='0%' stopColor='#2563eb' />
                            <stop offset='50%' stopColor='#3b82f6' />
                            <stop offset='100%' stopColor='#60a5fa' />
                          </linearGradient>
                        </defs>

                        {/* 100% Text */}
                        <text
                          x='300'
                          y='170'
                          fontFamily='Arial, sans-serif'
                          fontSize='140'
                          fontWeight='bold'
                          textAnchor='middle'
                          fill='url(#metalGradient)'
                          filter='url(#shadow)'
                        >
                          100%
                        </text>

                        {/* Performance Text */}
                        <text
                          x='300'
                          y='190'
                          fontFamily='Brush Script MT, cursive'
                          fontSize='50'
                          textAnchor='middle'
                          fill='url(#blueGradient)'
                          filter='url(#shadow)'
                        >
                          Performance
                        </text>
                      </svg>
                    ) : index === 1 ? (
                      <div className='chart-container flex items-end h-full gap-5 justify-center'>
                        {[80, 80, 120, 160, 200].map((height, i) => (
                          <motion.div
                            key={`gray-${i}`}
                            className='bar relative w-[30px] rounded-t-lg bg-gradient-to-b from-zinc-600 to-zinc-800'
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height * 0.6}px` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                          >
                            <div className='shine absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-white/30 to-transparent rounded-t-lg' />
                            <div className='reflection absolute -bottom-5 left-[10%] right-[10%] h-5 bg-gradient-to-b from-white/20 to-transparent blur-[3px] rounded-[50%]' />
                          </motion.div>
                        ))}
                        {[250, 290, 330, 370].map((height, i) => (
                          <motion.div
                            key={`blue-${i}`}
                            className='bar relative w-[30px] rounded-t-lg bg-gradient-to-b from-blue-600 to-blue-800 border-2 border-dashed border-blue-400 border-b-0'
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height * 0.6}px` }}
                            viewport={{ once: true }}
                            transition={{ delay: (i + 5) * 0.1, duration: 1 }}
                          >
                            <motion.div
                              className='arrow absolute -top-10 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-blue-400'
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: (i + 5) * 0.3,
                                duration: 0.5,
                              }}
                            />
                            <div className='shine absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-white/30 to-transparent rounded-t-lg' />
                            <div className='reflection absolute -bottom-5 left-[10%] right-[10%] h-5 bg-gradient-to-b from-white/20 to-transparent blur-[3px] rounded-[50%]' />
                          </motion.div>
                        ))}
                      </div>
                    ) : index === 2 ? (
                      <div className='relative h-full w-full flex items-center justify-center'>
                        <div className='grid grid-cols-2 gap-4 w-full h-full p-6'>
                          {[
                            {
                              label: 'Crawl Rate',
                              value: '+185%',
                              trend: 'up',
                            },
                            {
                              label: 'Index Coverage',
                              value: '98.5%',
                              trend: 'up',
                            },
                            {
                              label: 'Core Web Vitals',
                              value: 'Pass',
                              trend: 'up',
                            },
                            {
                              label: 'Page Speed',
                              value: '95/100',
                              trend: 'up',
                            },
                          ].map((metric, i) => (
                            <motion.div
                              key={i}
                              className='bg-gradient-to-br from-primary/10 to-blue-600/5 rounded-lg p-4 border border-primary/20 relative overflow-hidden group'
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className='absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000' />
                              <p className='text-foreground/80 text-sm mb-1'>
                                {metric.label}
                              </p>
                              <div className='flex items-end gap-2'>
                                <span className='text-2xl font-bold text-foreground'>
                                  {metric.value}
                                </span>
                                <div className='flex items-center gap-1 text-primary text-sm'>
                                  <div className='h-1 w-12 bg-primary/20 rounded-full overflow-hidden'>
                                    <motion.div
                                      className='h-full bg-primary'
                                      initial={{ width: '0%' }}
                                      whileInView={{ width: '100%' }}
                                      viewport={{ once: true }}
                                      transition={{
                                        delay: i * 0.1,
                                        duration: 1,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : index === 2 ? (
                      <div className='relative h-full w-full flex items-center justify-center'>
                        <svg viewBox='0 0 600 300' className='w-full h-full'>
                          <defs>
                            <filter id='glow'>
                              <feGaussianBlur
                                stdDeviation='3.5'
                                result='coloredBlur'
                              />
                              <feMerge>
                                <feMergeNode in='coloredBlur' />
                                <feMergeNode in='SourceGraphic' />
                              </feMerge>
                            </filter>
                            <linearGradient
                              id='lineGradient'
                              x1='0%'
                              y1='0%'
                              x2='100%'
                              y2='0%'
                            >
                              <stop
                                offset='0%'
                                stopColor='#3b82f6'
                                stopOpacity='0.2'
                              />
                              <stop
                                offset='50%'
                                stopColor='#3b82f6'
                                stopOpacity='0.8'
                              />
                              <stop
                                offset='100%'
                                stopColor='#3b82f6'
                                stopOpacity='0.2'
                              />
                            </linearGradient>
                          </defs>

                          {/* Grid Lines */}
                          {[0, 1, 2, 3, 4].map((i) => (
                            <line
                              key={`grid-${i}`}
                              x1='50'
                              y1={50 + i * 50}
                              x2='550'
                              y2={50 + i * 50}
                              stroke='#374151'
                              strokeWidth='1'
                              strokeDasharray='5,5'
                            />
                          ))}

                          {/* Data Points and Connecting Lines */}
                          <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2 }}
                            d='M100,200 Q200,180 300,150 T500,80'
                            fill='none'
                            stroke='url(#lineGradient)'
                            strokeWidth='3'
                            filter='url(#glow)'
                          />

                          {/* Data Points */}
                          {[
                            { x: 100, y: 200 },
                            { x: 200, y: 180 },
                            { x: 300, y: 150 },
                            { x: 400, y: 100 },
                            { x: 500, y: 80 },
                          ].map((point, i) => (
                            <motion.g
                              key={`point-${i}`}
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.2, duration: 0.5 }}
                            >
                              <circle
                                cx={point.x}
                                cy={point.y}
                                r='6'
                                fill='#3b82f6'
                                filter='url(#glow)'
                              />
                              <circle
                                cx={point.x}
                                cy={point.y}
                                r='12'
                                fill='#3b82f6'
                                opacity='0.2'
                                className='animate-ping'
                              />
                            </motion.g>
                          ))}
                        </svg>
                      </div>
                    ) : (
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='relative'>
                          {/* Main gear icon */}
                          <svg
                            viewBox='0 0 24 24'
                            className='w-32 h-32 relative'
                            style={{
                              filter:
                                'drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))',
                            }}
                          >
                            <defs>
                              <radialGradient
                                id='gearGradient'
                                cx='50%'
                                cy='50%'
                                r='50%'
                              >
                                <stop offset='0%' stopColor='#3b82f6' />
                                <stop offset='70%' stopColor='#1d4ed8' />
                                <stop offset='100%' stopColor='#1e3a8a' />
                              </radialGradient>
                            </defs>
                            <path
                              d='M12 15a3 3 0 100-6 3 3 0 000 6z'
                              fill='url(#gearGradient)'
                            />
                            <path
                              d='M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z'
                              fill='url(#gearGradient)'
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
