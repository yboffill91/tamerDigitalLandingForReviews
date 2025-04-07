'use client';
import { Inspect } from 'lucide-react';
import { Problems } from '../utils';
import { LeadingSection } from '../../components';
import { CardBorderBeam, InfoCard } from '@/components/ui';

export function Problem() {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        {/* Angled Cards Section */}
        <div className='relative h-[550px]  mb-8'>
          {/* Left Card */}
          <div className='absolute top-[80px] left-[60px] w-[380px] h-[450px]  rounded-xl shadow-2xl overflow-hidden transform -rotate-12 perspective-[1000px] rotate-x-[20deg] z-10 [box-shadow:inset_0_2px_20px_rgba(0,0,0,0.2)]'>
            <div className='p-4 bg-gray-300 text-neutral-800'>
              <div className='flex items-center gap-2 mb-4'>
                <div className='w-6 h-6 text-foreground bg-card flex items-center justify-center rounded font-bold'>
                  T
                </div>
                <div className='font-bold'>Technical Audit</div>
              </div>
              <div className='space-y-3 text-neutral-800'>
                {[
                  { label: 'Critical Errors', value: '8' },
                  { label: 'Index Coverage', value: '64%' },
                  { label: 'Page Speed', value: 'Poor' },
                  { label: 'Mobile Score', value: '52/100' },
                  { label: 'Core Web Vitals', value: 'Failed' },
                  { label: 'Security Issues', value: '3' },
                  { label: 'Technical Health', value: '58/100' },
                ].map((item, index) => (
                  <div key={index} className='bg-black/5 rounded p-2'>
                    <span className='text-neutral-800'>
                      {item.label}: {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Card */}
          <div className='absolute top-[20px] left-1/2 -translate-x-1/2 w-[380px] h-[450px] bg-gradient-to-br from-ring to-primary rounded-xl shadow-2xl overflow-hidden z-30 '>
            <div className='p-4 text-white'>
              <div className='flex items-center gap-2 mb-4'>
                <div className='w-6 h-6 bg-card text-primary flex items-center justify-center rounded font-bold'>
                  C
                </div>
                <div className='font-bold'>Competitor Analysis</div>
              </div>
              <div className='p-2 text-center'>
                <p className='font-bold mb-4'>Current Market Position</p>
                {[
                  { label: 'Keyword Visibility', value: '-32%', width: '23%' },
                  { label: 'Technical SEO', value: '-45%', width: '18%' },
                  { label: 'Search Rankings', value: '-27%', width: '28%' },
                  { label: 'Competitor Gap', value: '+72%', width: '72%' },
                  { label: 'Revenue Impact', value: '-38%', width: '22%' },
                ].map((item, index) => (
                  <div key={index} className='mb-4'>
                    <div className='flex justify-between mb-2'>
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className='w-full h-2 bg-gray-300 rounded'>
                      <div
                        className='h-full bg-primary rounded'
                        style={{ width: item.width }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className='absolute top-[80px] right-[60px] w-[380px] h-[450px] bg-gray-300 rounded-xl shadow-2xl overflow-hidden transform rotate-12 perspective-[1000px] rotate-x-[20deg] z-20'>
            <div className='p-4 text-foreground'>
              <div className='flex items-center gap-2 mb-4'>
                <div className='w-6 h-6 bg-card text-foreground flex items-center justify-center rounded font-bold'>
                  R
                </div>
                <div className='font-bold text-neutral-800'>Revenue Impact</div>
              </div>
              <div className='p-2 text-neutral-800'>
                <p className='font-bold text-center mb-4'>Key Metrics</p>
                {[
                  {
                    label: 'Organic Traffic',
                    value: '+23%',
                    width: '83%',
                    color: '#4caf50',
                  },
                  {
                    label: 'Conversion Rate',
                    value: '+5.2%',
                    width: '65%',
                    color: '#60a5fa',
                  },
                  {
                    label: 'Bounce Rate',
                    value: '-8.7%',
                    width: '35%',
                    color: '#9ca3af',
                  },
                  {
                    label: 'Avg. Session Time',
                    value: '+18%',
                    width: '78%',
                    color: '#60a5fa',
                  },
                  {
                    label: 'Pages Per Visit',
                    value: '+7.4%',
                    width: '67%',
                    color: '#60a5fa',
                  },
                ].map((item, index) => (
                  <div key={index} className='mb-4'>
                    <div className='flex justify-between mb-2'>
                      <span>{item.label}</span>
                      <span style={{ color: item.color }}>{item.value}</span>
                    </div>
                    <div className='w-full h-1.5 bg-black/50 rounded'>
                      <div
                        className='h-full bg-primary rounded'
                        style={{ width: item.width }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='relative -mt-64 mx-auto p-16 bg-card/80 backdrop-blur-3xl rounded-2xl shadow-lg border-2 border-ring/5  z-40 text-center'>
          <LeadingSection
            badgeText='Technical SEO Audit'
            description="Do you recognize any of these symptoms? They*apos;re clear signs that your website's technical foundation needs urgent professional attention. Most businesses don't realize how much revenue they're losing due to these hidden issues."
            heading="Your Website's Technical Foundation Is Crumbling (And It's Costing You Money)"
            icon={Inspect}
            variant='red'
          />

          {/* Problem Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
            {Problems.map(({ icon, title, problem }, index) => (
              <CardBorderBeam
                colorFrom='#fa0f0f'
                colorTo='#b40909'
                size={155}
                duration={40}
                className='bg-background-primary w-full h-full group'
                key={index}
                delay={index + 30}
              >
                <InfoCard
                  color='red'
                  description={problem}
                  icon={icon}
                  title={title}
                  index={index}
                />
              </CardBorderBeam>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
