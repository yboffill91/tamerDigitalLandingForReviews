'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

interface Data {
  month: string;
  revenue: number;
}
const data: Data[] = [
  { month: 'Jan', revenue: 400 },
  { month: 'Feb', revenue: 300 },
  { month: 'Mar', revenue: 200 },
  { month: 'Apr', revenue: 1200 },
  { month: 'May', revenue: 400 },
  { month: 'Jun', revenue: 600 },
  { month: 'Jul', revenue: 800 },
  { month: 'Aug', revenue: 400 },
  { month: 'Sep', revenue: 500 },
  { month: 'Oct', revenue: 700 },
  { month: 'Nov', revenue: 900 },
  { month: 'Dec', revenue: 1000 },
];

const Chart = dynamic(
  () =>
    Promise.resolve(({ data }: { data: Data[] }) => (
      <BarChart
        width={320}
        height={120}
        data={data}
        margin={{ top: 20, right: 0, left: 0, bottom: 10 }}
      >
        <XAxis
          dataKey='month'
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#6B7280', fontSize: 9 }}
          dy={8}
        />
        <YAxis hide={true} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#2C2C2C',
            border: 'none',
            borderRadius: '0.75rem',
            padding: '8px',
          }}
          labelStyle={{ color: '#6B7280', fontSize: '12px' }}
          itemStyle={{ color: '#6B7280', fontSize: '12px' }}
          cursor={{ fill: 'transparent' }}
        />
        <Bar
          dataKey='revenue'
          key={`bar-${Date.now()}`}
          background={{ fill: 'transparent' }}
          radius={[6, 6, 6, 6]}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.month === 'Apr' ? 'url(#blueGradient)' : '#2C2C2C'}
            />
          ))}
        </Bar>
        <defs>
          <linearGradient id='blueGradient' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#1389FD' />
            <stop offset='100%' stopColor='#87CEFB' />
          </linearGradient>
        </defs>
      </BarChart>
    )),
  { ssr: false }
);

export const RevenueDashboard = () => {
  return (
    <div>
      <div
        className='p-4 rounded-lg h-48 flex gap-4 bg-card/90 border border-ring/10'
        style={{
          backdropFilter: 'blur(12px)',
          borderRadius: '12px',
          borderBottom: 'none',
          boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.03)',
        }}
      >
        <div className='flex-1'>
          <div className='flex justify-between items-center mb-4'>
            <span className='text-foreground/80 text-sm font-light'>
              Revenue
            </span>
            <span className='text-white text-xs px-2 py-1 rounded-lg bg-foreground/10'>
              Monthly
            </span>
          </div>

          <div className='relative'>
            <div className='absolute left-[4.5rem] -top-2 w-10 h-6 rounded-lg z-10 bg-gradient-to-r from-[#1389FD] to-[#87CEFB] flex items-center justify-center'>
              <div className='text-sm font-medium text-foreground '>1.2k</div>
            </div>
            <Chart data={data} />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-1.5 mt-3'>
        <span className='text-foreground/80 text-xs px-2 py-1 rounded-lg bg-card border border-ring flex items-center justify-between'>
          <span>Total Sales</span>
          <span className='font-bold text-primary'>+33%</span>
        </span>

        <span className='text-foreground/80 text-xs px-2 py-1 rounded-lg bg-card border border-ring flex items-center justify-between'>
          <span>Customers</span>
          <span className='font-bold text-primary'>+12%</span>
        </span>

        <span className='text-foreground/80 text-xs px-2 py-1 rounded-lg bg-card border border-ring flex items-center justify-between'>
          <span>Growth</span>
          <span className='font-bold text-primary'>+28%</span>
        </span>

        <span className='text-foreground/80 text-xs px-2 py-1 rounded-lg bg-card border border-ring flex items-center justify-between'>
          <span>Orders</span>
          <span className='font-bold text-primary'>+15%</span>
        </span>
      </div>
    </div>
  );
};
