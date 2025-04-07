import { BarChart2, Mail, RefreshCw, Send } from 'lucide-react'
import React from 'react'

export const NewsLetterProblems = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-12'>
        <h2 className='text-xl font-bold mb-4'>
          Your Email List is a Wasted Asset
        </h2>
        <ul className='space-y-3 text-foreground/80'>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Your open rates have dropped below 15%
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Subscribers are unengaged and sales emails get ignored
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Your content feels generic and fails to build relationships
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            You&apos;re losing subscribers faster than you gain them
          </li>
        </ul>
      </div>

      {/* Newsletter Preview */}
      <div className='bg-neutral-950/50 rounded-lg p-6 mb-8'>
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-foreground/90 rounded-lg flex items-center justify-center'>
              <Mail className='w-6 h-6 text-destructive' />
            </div>
            <div>
              <h3 className='font-medium '>Weekly Insights</h3>
              <p className='text-sm text-foreground/80'>Issue #48 • Draft</p>
            </div>
          </div>
          <button className='bg-destructive  px-4 py-2 rounded-full text-sm flex items-center gap-2'>
            <Send className='w-4 h-4' />
            Schedule
          </button>
        </div>

        <div className='space-y-4'>
          <div className='flex items-center justify-between text-sm'>
            <span className='text-foreground/80'>Estimated Impact</span>
            <span className='text-destructive'>32% Open Rate</span>
          </div>
          <div className='h-2 bg-neutral-950/90 rounded-full'>
            <div className='h-full w-1/3 bg-destructive rounded-full'></div>
          </div>
        </div>
      </div>

      {/* Integration info */}
      <div className='mt-auto text-center text-foreground/80'>
        <p className='flex items-center justify-center gap-2'>
          Integrated with
          <BarChart2 className='w-4 h-4 text-foreground/80' /> Analytics and
          <RefreshCw className='w-4 h-4 text-foreground/80' /> CRM
        </p>
      </div>
    </div>
  )
}
