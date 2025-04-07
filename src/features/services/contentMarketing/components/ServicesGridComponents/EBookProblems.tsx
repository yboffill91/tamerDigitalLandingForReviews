import { BookOpen, Star } from 'lucide-react'
import React from 'react'

export const EBookProblems = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-12'>
        <h2 className='text-xl font-bold mb-4'>
          Your Expertise is Trapped in Your Head
        </h2>
        <ul className='space-y-3 text-foreground/90'>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Your lead magnet conversion rate is below 2%
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Potential clients don&apos;t see you as an authority in your field
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Your email list growth has stagnated
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            You&apos;re losing leads to competitors with better resources
          </li>
        </ul>
      </div>

      {/* Ebook Preview */}
      <div className='bg-neutral-950/50 rounded-lg p-6 mb-8'>
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-4'>
            <div className='w-16 h-20 bg-foreground/80 rounded-lg flex items-center justify-center'>
              <BookOpen className='w-8 h-8 text-destructive' />
            </div>
            <div>
              <h3 className='font-medium '>Ultimate Guide 2024</h3>
              <p className='text-sm text-foreground/90'>
                42 pages • PDF Format
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <Star className='w-5 h-5 text-yellow-400 fill-yellow-400' />
            <span className=''>4.9</span>
          </div>
        </div>

        <div className='space-y-4'>
          <div className='flex items-center justify-between text-sm'>
            <span className='text-foreground/90'>Downloads</span>
            <span className='text-destructive'>Only 127 this month</span>
          </div>
          <div className='h-2 bg-neutral-950/80 rounded-full'>
            <div className='h-full w-1/4 bg-destructive rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
