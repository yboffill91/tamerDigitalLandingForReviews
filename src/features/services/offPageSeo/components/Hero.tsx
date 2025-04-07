'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faChevronDown,
  faChevronRight,
  faPlay,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  analysisConsole,
  analysisEndpoints,
  navItems,
  resultsConsole,
  resultsEndpoints,
} from '@/features/services/offPageSeo/utils';
import { Badge, HeroButtonsSet } from '@/components/ui';
import { IconAnalyze } from '@tabler/icons-react';

export function Hero() {
  const [activeTab, setActiveTab] = React.useState('analysis');

  return (
    <div className='min-h-screen flex flex-col items-center'>
      {/* Header Content - Added from HeroSection */}
      <div className='w-full container mx-auto px-4 pt-32 pb-10 text-center'>
        {/* Badge */}
        <Badge
          text='Free Off-Page SEO Analysis - Boost Your Authority'
          icon={IconAnalyze}
        />

        {/* Heading */}
        <h1 className='mb-6 text-balance'>
          Boost Your Business Authority with
          <span className='heading-gradient'>
            {' '}
            High Impact Off Page Strategies
          </span>
        </h1>

        {/* Subheading */}
        <p className='text-sm md:text-base text-foreground mx-auto max-w-2xl mb-8'>
          We build natural, high-quality, and relevant link profiles that
          elevate your online presence, strengthen your credibility with Google,
          and generate organic traffic for sustainable business growth.
        </p>

        {/* CTA Buttons */}
        <div className='mb-16'>
          <HeroButtonsSet
            firstBtnText='Analyze My Backlink Profile'
            secondBtnText='Boost My Rankings'
            isCentered
          />
        </div>

        <div className='flex-1 w-full flex flex-col justify-center items-center px-4 pb-12'>
          <div className='relative w-full max-w-[850px] h-[500px] mb-20 overflow-visible'>
            {/* Auto Generated APIs label */}
            {activeTab === 'analysis' && (
              <div className='absolute top-[-30px] left-[-80px] transform -rotate-[5deg] text-primary font-semibold text-lg flex items-center gap-2 z-10'>
                <FontAwesomeIcon
                  icon={faStar}
                  className='text-primary text-[1.3rem]'
                />
                <span>SEO Analysis</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className='transform rotate-[40deg] text-[1.3rem] ml-1'
                />
              </div>
            )}

            {/* API Playground label */}
            {activeTab === 'results' && (
              <div className='absolute top-[-30px] left-[-80px] transform -rotate-[5deg] text-primary font-semibold text-lg flex items-center gap-2 z-10'>
                <FontAwesomeIcon
                  icon={faStar}
                  className='text-primary text-[1.3rem]'
                />
                <span>Live Results</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className='transform rotate-[40deg] text-[1.3rem] ml-1'
                />
              </div>
            )}

            {/* Left vertical card (API endpoints) */}
            <div className='absolute left-[20px] top-[15px] w-[380px] h-[470px] bg-[rgba(255,255,255,0.02)] backdrop-blur-[10px] rounded-lg shadow-lg border border-[rgba(255,255,255,0.05)] z-[0]' />
            <div className="absolute left-[30px] top-[25px] w-[360px] h-[450px] bg-card backdrop-blur-[10px] rounded-lg shadow-lg border border-ring/10 text-foreground z-[1] overflow-hidden after:content-[''] after:absolute after:inset-[1px] after:rounded-lg after:border after:border-foreground/30 after:pointer-events-none">
              <div className='flex items-center px-4 py-3 border-b border-white/[0.05] bg-neutral-800'>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className='mr-3 text-white text-base'
                />
                <span className='text-lg capitalize text-white'>backlinks</span>
              </div>

              <div className='py-[5px] h-[calc(100%-35px)] overflow-y-auto'>
                {(activeTab === 'analysis'
                  ? analysisEndpoints
                  : resultsEndpoints
                ).map((endpoint, index) => (
                  <div key={index} className='flex items-center px-4 py-[8px]'>
                    <span
                      className='text-[0.9rem] w-12 mr-3 font-semibold'
                      style={{ color: endpoint.color }}
                    >
                      {endpoint.method}
                    </span>
                    <span className='text-base'>{endpoint.desc}</span>
                  </div>
                ))}

                <div className='flex items-center px-4 py-3 border-t border-ring/5 bg-card/60'>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='mr-3 text-foreground/90 text-base'
                  />
                  <span className='text-lg'>citations</span>
                </div>
              </div>
            </div>

            {/* Top horizontal card (API tabs) */}
            <div className='absolute right-[50px] top-[15px] text-primary text-sm font-medium flex items-center gap-2'>
              <span>See your business</span>
              <div className='flex items-center gap-4 px-4 py-1 rounded-lg bg-card border border-primary/20'>
                <span
                  className={
                    activeTab === 'analysis'
                      ? 'text-primary'
                      : 'text-foreground/80'
                  }
                >
                  Before
                </span>
                <span className='text-foreground/70'>|</span>
                <span
                  className={
                    activeTab === 'results'
                      ? 'text-primary'
                      : 'text-foreground/80'
                  }
                >
                  After
                </span>
              </div>
            </div>
            <div className='absolute right-[50px] top-[50px] w-[380px] h-[80px] bg-[rgba(255,255,255,0.02)] backdrop-blur-[10px] rounded-lg shadow-lg border border-[rgba(255,255,255,0.05)] z-[1]' />
            <div className="absolute right-[60px] top-[60px] w-[360px] h-[60px] bg-card backdrop-blur-[10px] rounded-lg shadow-lg border border-ring/10 z-[2] overflow-hidden after:content-[''] after:absolute after:inset-[1px] after:rounded-lg after:border after:border-foreground/30 after:pointer-events-none">
              <div className='flex w-full h-full'>
                <button
                  onClick={() => setActiveTab('analysis')}
                  className={`flex-1 flex items-center justify-center font-medium text-lg cursor-pointer transition-colors duration-200 ${
                    activeTab === 'analysis'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card'
                  } text-foreground`}
                >
                  Analysis
                </button>
                <button
                  onClick={() => setActiveTab('results')}
                  className={`flex-1 flex items-center justify-center font-medium text-lg cursor-pointer transition-colors duration-200 ${
                    activeTab === 'results'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card'
                  } text-foreground`}
                >
                  Results
                </button>
              </div>
            </div>

            {/* Bottom right horizontal card (Code viewer) */}
            <div className='absolute right-[10px] bottom-[70px] w-[500px] h-[250px] bg-[rgba(255,255,255,0.02)] backdrop-blur-[10px] rounded-lg shadow-lg border border-[rgba(255,255,255,0.05)] z-[2]' />
            <div className="absolute right-[20px] bottom-[80px] w-[480px] h-[230px] bg-card backdrop-blur-[10px] rounded-lg shadow-lg border border-ring/10 flex flex-col z-[3] overflow-hidden after:content-[''] after:absolute after:inset-[1px] after:rounded-lg after:border after:border-foreground/30 after:pointer-events-none">
              <div className='flex items-center px-4 py-3 bg-neutral-800 border-b border-white/[0.05]'>
                <span className='text-[#4caf50] text-lg font-medium'>
                  {activeTab === 'analysis' ? 'SCAN' : 'REPORT'}
                </span>
                <span className='text-white text-base ml-3'>
                  {activeTab === 'analysis'
                    ? '/analysis/backlinks'
                    : '/results/summary'}
                </span>
                <button className='ml-auto text-white text-xl'>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>

              <div className='p-4 font-mono text-base leading-[1.8] bg-card h-[calc(100%-37px)]'>
                {(activeTab === 'analysis'
                  ? analysisConsole
                  : resultsConsole
                ).map((line, index) => (
                  <div
                    key={index}
                    className='whitespace-nowrap mb-1 inline-flex items-start w-full'
                  >
                    <span className='text-foreground/70 mr-4 select-none inline-block w-[20px]'>
                      {index + 1}
                    </span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM NAVBAR - Moved here from the top */}
          <div className='w-full max-w-[1400px] relative mb-10 '>
            {/* Outer background for nav bar */}

            <div className='relative w-full min-h-[70px]  border  border-[rgba(255,255,255,0.05)]  rounded-lg gap-2 container mx-auto p-2'>
              <div className='border-2   flex w-full p-1 rounded-lg  flex-wrap items-center justify-center'>
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    className={`flex flex-col items-center px-4 py-2 rounded-lg transition-colors ${
                      item.active
                        ? 'bg-ring text-primary-foreground'
                        : 'text-foreground/70 hover:text-foreground/80'
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      style={{ color: item.color }}
                      className='text-lg mb-1.5'
                    />
                    <span className='text-sm font-medium'>{item.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
