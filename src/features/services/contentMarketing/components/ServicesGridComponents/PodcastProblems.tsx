import { ShimmerButton } from '@/components/ui'
import {
  Headphones,
  Mic2,
  Music,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
} from 'lucide-react'
import React from 'react'

export const PodCastProblems = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-12'>
        <h2 className='text-xl font-bold mb-4'>
          Your Voice is Missing from the Conversation
        </h2>
        <ul className='space-y-3 text-foreground/80'>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Your competitors are building audience loyalty through audio content
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            You&apos;re missing the 464.7M podcast listeners worldwide
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Mail, Your expertise isn&apos;t reaching people during/50 their
            commute or workout
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            You lack a platform for deep-dive conversations with industry
            leaders
          </li>
        </ul>
      </div>

      {/* Podcast Player */}
      <div className='bg-neutral-950/50 rounded-lg p-6 my-2'>
        <div className='flex items-center gap-4 mb-6'>
          <div className='w-12 h-12 bg-foreground/90 rounded-lg flex items-center justify-center'>
            <Mic2 className='w-6 h-6 text-destructive' />
          </div>
          <div>
            <h3 className='font-medium '>Industry Insights</h3>
            <p className='text-sm text-foreground/80'>Episode 23 • 45:12</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className='mb-4'>
          <div className='h-1 bg-foreground/90 rounded-full'>
            <div className='h-full w-2/3 bg-destructive rounded-full'></div>
          </div>
          <div className='flex justify-between text-xs text-foreground/80 mt-1'>
            <span>29:45</span>
            <span>-15:27</span>
          </div>
        </div>

        {/* Controls */}
        <div className='flex items-center justify-between'>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='text-foreground/80 hover:'
          >
            <SkipBack className='w-5 h-5' />
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='w-12 h-12 bg-destructive rounded-full flex items-center justify-center'
          >
            <Play className='w-6 h-6 ' />
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='text-foreground/80 hover:'
          >
            <SkipForward className='w-5 h-5' />
          </ShimmerButton>
        </div>
        <div className='flex items-center gap-4 my-2'>
          <Volume2 className='w-5 h-5 text-foreground/80' />
          <div className='flex-1 h-1 bg-foreground/90 rounded-full'>
            <div className='h-full w-3/4 bg-destructive rounded-full'></div>
          </div>
        </div>
      </div>

      {/* Volume control */}

      {/* Integration info */}
      <div className='mt-auto text-center text-foreground/80'>
        <p className='flex items-center justify-center gap-2'>
          Available on
          <Headphones className='w-4 h-4 text-foreground/80' /> Spotify and
          <Music className='w-4 h-4 text-foreground/80' /> Apple Podcasts
        </p>
      </div>
    </div>
  )
}
