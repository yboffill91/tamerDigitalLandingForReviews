import { BarChart2, PieChart } from 'lucide-react'
import React from 'react'

export const InfoProblems = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-12'>
        <h2 className='text-xl font-bold mb-4'>
          Your Business Insights Are Being Ignored
        </h2>
        <ul className='space-y-3 text-foreground/80'>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            You spend hours creating reports that executives only skim through
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Your quarterly presentations fail to drive the decisions you know
            are crucial
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Stakeholders miss critical trends buried in complex spreadsheets
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Your market research gets forgotten because it&apos;s not visually
            compelling
          </li>
        </ul>
      </div>

      {/* Infographic preview */}
      <div className='bg-neutral-950 rounded-lg p-6 mb-8'>
        <div className='space-y-4 mb-6'>
          <div className='flex items-center gap-4'>
            <div className='bg-foreground/90 w-10 h-10 rounded-lg flex items-center justify-center'>
              <BarChart2 className='w-5 h-5 text-destructive' />
            </div>
            <p className='text-foreground/90'>
              Performance Metrics: Track and visualize key business indicators
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <div className='bg-foreground/90 w-10 h-10 rounded-lg flex items-center justify-center'>
              <PieChart className='w-5 h-5 text-destructive' />
            </div>
            <p className='text-foreground/90'>
              Market Distribution: Analyze market segments and trends
            </p>
          </div>
        </div>
        <p className='text-foreground/80 text-sm'>
          Transform complex data into compelling visual stories that drive
          action and decision-making
        </p>
      </div>
    </div>
  )
}
