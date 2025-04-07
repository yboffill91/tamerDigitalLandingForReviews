import { ShimmerButton } from '@/components/ui'
import { Globe, Heart, MessageCircle, Repeat2 } from 'lucide-react'
import React from 'react'

export const SocialMediaProblems = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-12'>
        <h2 className='text-xl font-bold mb-4'>
          Your Social Media Presence is Invisible
        </h2>
        <ul className='space-y-3 text-foreground/80'>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Your posts get buried in the feed with less than 1% engagement
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            You&apos;re posting randomly without a content strategy
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            Your competitors are building communities while you&apos;re being
            ignored
          </li>
          <li className='flex items-start'>
            <span className='text-destructive mr-2'>•</span>
            You&apos;re wasting time on content that doesn&apos;t convert
          </li>
        </ul>
      </div>

      {/* Social Post Preview */}
      <div className='bg-neutral-950/50 rounded-lg p-6 mb-8'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='w-12 h-12 bg-foreground/90 rounded-full'></div>
          <div>
            <h3 className='font-medium '>Digital Growth Tips</h3>
            <p className='text-sm text-foreground/80'>@digitalgrowth • 2h</p>
          </div>
        </div>

        <p className='text-foreground/90 mb-4'>
          🚀 5 Proven Strategies to 10x Your Social Media Engagement
          <span className='text-destructive'> #GrowthHacking</span>
        </p>

        <div className='flex justify-between text-foreground/80 text-sm mt-4'>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2'
          >
            <Heart className='w-4 h-4' />
            <span>2.4K</span>
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2'
          >
            <MessageCircle className='w-4 h-4' />
            <span>482</span>
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2'
          >
            <Repeat2 className='w-4 h-4' />
            <span>1.2K</span>
          </ShimmerButton>
        </div>
        <div className='mt-auto text-center text-foreground/80'>
          <p className='flex items-center justify-center gap-2'>
            Schedule across all
            <Globe className='w-4 h-4 text-foreground/80' /> Social Platforms
          </p>
        </div>
      </div>
    </div>
  )
}
