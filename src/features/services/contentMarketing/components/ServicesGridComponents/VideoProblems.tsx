import { Play } from 'lucide-react'
import React from 'react'

export const VideoProblems = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-12'>
        <h2 className='text-xl font-bold mb-4'>
          Your Product&apos;s Value is Getting Lost in Translation
        </h2>
        <ul className='space-y-3 text-foreground/80'>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Your sales team repeats the same explanations 20+ times per week
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Support tickets pile up because customers can&apos;t find clear
            instructions
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Potential customers leave your site confused about how your product
            helps them
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            You&apos;re missing out on visual learners who prefer video content
          </li>
        </ul>
      </div>

      {/* Video preview */}
      <div className='relative aspect-video bg-neutral-950/50 rounded-lg mb-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-12 h-12 bg-foreground/90 rounded-full flex items-center justify-center'>
            <Play className='w-6 h-6 text-destructive' />
          </div>
        </div>
        <div className='absolute bottom-4 left-4 right-4'>
          <div className='h-1 bg-neutral-950 rounded-full'>
            <div className='w-1/3 h-full bg-destructive rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
