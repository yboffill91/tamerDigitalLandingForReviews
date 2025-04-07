import { ShimmerButton } from '@/components/ui'
import { MessageSquare, Share2, Users } from 'lucide-react'
import React from 'react'

export const VideoBenefits = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-10'>
        <h2 className='text-xl font-bold mb-4'>Why Trust Our Expertise?</h2>
        <p className='text-foreground/80'>
          Our team of video experts has produced over 1,000 educational videos
          for tech companies. We started because we saw countless brilliant
          products failing to connect with their audience through traditional
          documentation.
        </p>
        <div className='mt-4 bg-primary/10 rounded-lg p-4'>
          <p className='text-foreground/90'>
            &quot;Our clients see an average 73% reduction in support tickets
            and 2.8x increase in product adoption. We turn complex features into
            clear, engaging stories that your customers can&apos;t wait to
            share.&quot;
          </p>
        </div>
      </div>

      {/* Comments section */}
      <div className='space-y-4'>
        <div className='bg-neutral-950/50 rounded-lg p-4'>
          <div className='flex items-center justify-between mb-2'>
            <span className=''>Great explanation!</span>
            <span className='text-foreground/80 text-sm'>2m ago</span>
          </div>
          <div className='flex items-center gap-2 text-sm text-foreground/80'>
            <span>👍 24</span>
            <span>•</span>
            <button className='text-ring'>Reply</button>
          </div>
        </div>

        <div className='bg-neutral-950/50 rounded-lg p-4'>
          <div className='flex items-center justify-between mb-2'>
            <div>
              <span className=''>Question at </span>
              <span className='text-ring'>2:45</span>
            </div>
            <span className='text-foreground/80 text-sm'>5m ago</span>
          </div>
          <p className='text-foreground/90 mb-2'>
            Could you explain the concept in more detail?
          </p>
          <div className='flex gap-2'>
            <button className='bg-primary  px-4 py-1 rounded text-sm'>
              Answer
            </button>
            <button className='bg-transparent text-foreground/80 px-4 py-1 rounded text-sm'>
              Later
            </button>
          </div>
        </div>
      </div>

      {/* Engagement metrics */}
      <div className='mt-auto space-y-4'>
        <div className='bg-neutral-950/50 rounded-lg p-4'>
          <div className='flex justify-between items-center mb-2'>
            <span className=''>Viewer retention</span>
            <span className='text-ring'>87%</span>
          </div>
          <div className='h-2 bg-foreground/90 rounded-full'>
            <div className='h-full w-[87%] bg-primary rounded-full'></div>
          </div>
        </div>

        <div className='flex justify-between text-sm'>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/80'
          >
            <MessageSquare className='w-4 h-4' />
            Comments (15)
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/80'
          >
            <Users className='w-4 h-4' />
            Viewers (203)
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/80'
          >
            <Share2 className='w-4 h-4' />
            Share
          </ShimmerButton>
        </div>
      </div>
    </div>
  )
}
