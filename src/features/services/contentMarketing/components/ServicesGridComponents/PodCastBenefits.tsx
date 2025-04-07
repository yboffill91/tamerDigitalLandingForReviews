import { ShimmerButton } from '@/components/ui'
import { Download, MessageSquare, Share2 } from 'lucide-react'
import React from 'react'

export const PodcastBenefits = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-10'>
        <h2 className='text-xl font-bold mb-4'>Why Trust Our Expertise?</h2>
        <p className='text-foreground/80 mb-4'>
          Our podcast production team has helped launch over 150 successful
          business podcasts. We understand the unique challenges of creating
          engaging audio content that builds authority and drives business
          growth.
        </p>
        <div className='mt-4 bg-primary/10 rounded-lg p-4'>
          <p className='text-foreground/90'>
            &quot;Our clients average 10,000+ monthly listeners and have seen a
            40% increase in inbound leads. We handle everything from strategy to
            production, letting you focus on sharing your expertise.&quot;
          </p>
        </div>
      </div>

      {/* Episode Comments */}
      <div className='space-y-4 mb-8'>
        <div className='bg-neutral-950/50 rounded-lg p-4'>
          <div className='flex items-center justify-between mb-2'>
            <span className=''>Fantastic episode!</span>
            <span className='text-foreground/80 text-sm'>2h ago</span>
          </div>
          <p className='text-foreground/80 text-sm mb-2'>
            The insights on market trends were eye-opening.
          </p>
          <div className='flex items-center gap-2 text-sm text-foreground/80'>
            <span>👍 32</span>
            <span>•</span>
            <button className='text-ring'>Reply</button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className='mt-auto space-y-4'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-neutral-950/50 rounded-lg p-4 text-center'>
            <div className='text-2xl font-bold text-ring'>15K</div>
            <div className='text-sm text-foreground/80'>Monthly Listeners</div>
          </div>
          <div className='bg-neutral-950/50 rounded-lg p-4 text-center'>
            <div className='text-2xl font-bold text-ring'>4.9</div>
            <div className='text-sm text-foreground/80'>Rating</div>
          </div>
          <div className='bg-neutral-950/50 rounded-lg p-4 text-center'>
            <div className='text-2xl font-bold text-ring'>89%</div>
            <div className='text-sm text-foreground/80'>Completion</div>
          </div>
        </div>

        {/* Action buttons */}
        <div className='flex justify-between text-sm'>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/80'
          >
            <MessageSquare className='w-4 h-4' />
            Comments (45)
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/80'
          >
            <Share2 className='w-4 h-4' />
            Share
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/80'
          >
            <Download className='w-4 h-4' />
            Download
          </ShimmerButton>
        </div>
      </div>
    </div>
  )
}
