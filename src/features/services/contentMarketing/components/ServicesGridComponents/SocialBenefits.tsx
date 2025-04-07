import { ShimmerButton } from '@/components/ui'
import { BarChart2, Share2, Users } from 'lucide-react'
import React from 'react'

export const SocialMediaBenefits = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-10'>
        <h2 className='text-xl font-bold mb-4'>Why Trust Our Expertise?</h2>
        <p className='text-foreground/80 mb-4'>
          Our social media strategists have managed accounts reaching over 5M
          followers combined. We understand what makes content go viral and how
          to build engaged communities that drive real business results.
        </p>
        <div className='mt-4 bg-primary/10 rounded-lg p-4'>
          <p className='text-foreground/90'>
            &quot;We&apos;ve helped businesses increase their social engagement
            by an average of 312% in 90 days. Our data-driven approach ensures
            every post contributes to your growth goals.&quot;
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-2 gap-4 my-2'>
        <div className='bg-neutral-950/50 rounded-lg p-4'>
          <div className='text-2xl font-bold text-ring'>312%</div>
          <div className='text-sm text-foreground/80'>Engagement Growth</div>
        </div>
        <div className='bg-neutral-950/50 rounded-lg p-4 my-2'>
          <div className='text-2xl font-bold text-ring'>15.2K</div>
          <div className='text-sm text-foreground/80'>Avg. Reach</div>
        </div>
        <div className='bg-neutral-950/50 rounded-lg p-4 my-2'>
          <div className='text-2xl font-bold text-ring'>8.7%</div>
          <div className='text-sm text-foreground/80'>Click Rate</div>
        </div>
        <div className='bg-neutral-950/50 rounded-lg p-4 my-2'>
          <div className='text-2xl font-bold text-ring'>24/7</div>
          <div className='text-sm text-foreground/80'>Monitoring/50</div>
        </div>
      </div>

      {/* Action buttons */}
      <div className='mt-auto'>
        <div className='flex justify-between text-sm'>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/80'
          >
            <BarChart2 className='w-4 h-4' />
            Analytics
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/80'
          >
            <Share2 className='w-4 h-4' />
            Share Post
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/80'
          >
            <Users className='w-4 h-4' />
            Audience
          </ShimmerButton>
        </div>
      </div>
    </div>
  )
}
