'use client';

import React from 'react';
import {
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
} from 'recharts';
import { Target, Search, Users, ChevronDown } from 'lucide-react';
import { problems } from '@/features/services/offPageSeo/utils';
import { LeadingSection } from '@/features/services/components';

export const DigitalAuthoritySection = () => {
  const renderTrafficDecline = () => {
    const data = [
      { month: 'Jan', organic: 85, potential: 90 },
      { month: 'Feb', organic: 79, potential: 95 },
      { month: 'Mar', organic: 70, potential: 100 },
      { month: 'Apr', organic: 58, potential: 105 },
      { month: 'May', organic: 42, potential: 110 },
      { month: 'Jun', organic: 30, potential: 115 },
    ];

    return (
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='colorOrganic' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#ef4444' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#ef4444' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorPotential' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#3b82f6' stopOpacity={0.2} />
              <stop offset='95%' stopColor='#3b82f6' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='month' stroke='#606060' />
          <CartesianGrid
            strokeDasharray='3 3'
            stroke='#242424'
            vertical={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#242424',
              border: 'none',
              borderRadius: '4px',
            }}
            itemStyle={{ color: '#ffffff' }}
            labelStyle={{ color: '#a0a0a0' }}
          />
          <Area
            type='monotone'
            dataKey='organic'
            stroke='#ef4444'
            strokeWidth={2}
            fillOpacity={1}
            fill='url(#colorOrganic)'
          />
          <Area
            type='monotone'
            dataKey='potential'
            stroke='#3b82f6'
            strokeWidth={1}
            strokeDasharray='5 5'
            fillOpacity={1}
            fill='url(#colorPotential)'
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  };

  // Trust and Credibility Visualization
  const renderTrustAndCredibility = () => {
    const data = [
      { name: 'Perception', value: 30 },
      { name: 'Reliability', value: 35 },
      { name: 'Authority', value: 25 },
      { name: 'Engagement', value: 20 },
      { name: 'Influence', value: 15 },
    ];

    return (
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart
          cx='50%'
          cy='50%'
          outerRadius='70%'
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
        >
          <PolarGrid stroke='#242424' />
          <PolarAngleAxis dataKey='name' stroke='#606060' />
          <Radar
            name='Current Levels'
            dataKey='value'
            stroke='#3b82f6'
            fill='#3b82f6'
            fillOpacity={0.3}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#242424',
              border: 'none',
              borderRadius: '4px',
            }}
            itemStyle={{ color: '#ffffff' }}
            labelStyle={{ color: '#a0a0a0' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  };

  // Competition Comparison Visualization
  const renderCompetitionComparison = () => {
    const topSearchPositions = [
      { position: 1, competitor: 'Competitor A', color: '#10b981' },
      { position: 2, competitor: 'Competitor B', color: '#f59e0b' },
      { position: 3, competitor: 'Competitor C', color: '#8b5cf6' },
    ];

    const yourPosition = {
      position: 12,
      competitor: 'Your Business',
      color: '#ef4444',
      isYou: true,
    };

    return (
      <div className='w-full h-full flex flex-col justify-between relative'>
        {/* Top positions */}
        <div className='max-w-[80%] mx-auto space-y-2'>
          {topSearchPositions.map((item, idx) => (
            <div
              key={idx}
              className='flex items-center rounded-lg px-2 py-1 bg-[#242424]'
              style={{
                opacity: 1 - idx * 0.1,
              }}
            >
              <div
                className='w-6 h-6 flex items-center justify-center rounded-lg mr-2'
                style={{ backgroundColor: item.color }}
              >
                {item.position}
              </div>
              <span className='text-sm text-[#a0a0a0]'>{item.competitor}</span>
            </div>
          ))}
        </div>

        {/* Visibility threshold line */}
        <div className='w-full border-t border-dashed border-[#ef4444] opacity-70 my-2'>
          <div className='absolute right-2 top-[50%] transform -translate-y-1/2 text-xs text-[#ef4444]'>
            Visibility threshold
          </div>
        </div>

        {/* Your position - far below */}
        <div className='max-w-[80%] mx-auto pt-2'>
          <div className='flex items-center rounded-lg px-2 py-1 bg-[#242424] border border-[#3b82f6]/30'>
            <div
              className='w-6 h-6 flex items-center justify-center rounded-lg mr-2'
              style={{ backgroundColor: yourPosition.color }}
            >
              {yourPosition.position}
            </div>
            <span className='text-sm text-foreground font-medium'>
              {yourPosition.competitor}
            </span>
            <span className='ml-auto text-xs text-[#ef4444] flex items-center'>
              <ChevronDown size={14} className='mr-0.5' />
              Out of view
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Missed Opportunities Visualization
  const renderMissedOpportunities = () => {
    const opportunitiesData = [
      { name: 'Referral Traffic', value: 35 },
      { name: 'Brand Mentions', value: 25 },
      { name: 'Direct Inquiries', value: 20 },
      { name: 'Conversions', value: 15 },
      { name: 'Industry Authority', value: 5 },
    ];

    const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef'];
    const totalValue = opportunitiesData.reduce(
      (sum, item) => sum + item.value,
      0
    );

    return (
      <div className='w-full h-full flex'>
        <div className='w-1/2 h-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
              <Pie
                data={opportunitiesData}
                cx='50%'
                cy='50%'
                innerRadius={40}
                outerRadius={60}
                paddingAngle={3}
                dataKey='value'
              >
                {opportunitiesData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value}%`, 'Missed']}
                contentStyle={{
                  backgroundColor: '#242424',
                  border: 'none',
                  borderRadius: '4px',
                }}
                itemStyle={{ color: '#ffffff' }}
                labelStyle={{ color: '#a0a0a0' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className='w-1/2 h-full flex flex-col justify-center'>
          <div className='space-y-1.5'>
            {opportunitiesData.map((item, idx) => (
              <div key={idx} className='flex items-center text-xs'>
                <div
                  className='w-2 h-2 rounded-lg mr-2'
                  style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                ></div>
                <span className='text-[#a0a0a0] truncate'>{item.name}</span>
                <span className='ml-auto text-foreground'>{item.value}%</span>
              </div>
            ))}
            <div className='pt-1 mt-1 border-t border-[#242424] flex items-center text-xs'>
              <span className='text-[#a0a0a0]'>Total Missed</span>
              <span className='ml-auto text-foreground font-medium'>
                {totalValue}%
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Array of rendering functions for each visualization
  const renderVisualizations = [
    renderTrafficDecline,
    renderTrustAndCredibility,
    renderCompetitionComparison,
    renderMissedOpportunities,
  ];

  return (
    <div className='relative w-full overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4'>
        <LeadingSection
          badgeText='Problems'
          description="Do you feel stuck in search results while watching your competition move forward? We know that in the digital world, having an attractive website isn't enough if nobody knows about it."
          heading='Lack of Digital Authority'
          icon={Target}
          variant='red'
        />

        {/* Grid of cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {problems.map((problem, index) => (
            <div
              key={index}
              className='bg-card rounded-lg p-8 shadow-lg border border-ring '
            >
              {/* Chart title with more spacing */}
              <div className='flex justify-center items-center text-xs text-foreground/80 mb-6'>
                {index === 0 && <Search size={14} className='mr-1.5' />}
                {index === 1 && <Users size={14} className='mr-1.5' />}
                {index === 2 && <Search size={14} className='mr-1.5' />}
                {index === 3 && <Target size={14} className='mr-1.5' />}
                <span>
                  {index === 0 && 'Search Visibility'}
                  {index === 1 && 'Trust Metrics'}
                  {index === 2 && 'Search Rankings'}
                  {index === 3 && 'Missed Opportunities'}
                </span>
              </div>

              {/* Dynamic visualizations - each unique */}
              <div className='h-48'>{renderVisualizations[index]()}</div>

              <div className='flex items-center gap-2 mt-5 mb-2'>
                <problem.icon size={20} color={problem.color} />
                <h3 className='text-xl font-semibold text-foreground'>
                  {problem.title}
                </h3>
              </div>
              <p className='text-foreground/80'>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
