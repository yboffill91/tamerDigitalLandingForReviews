import { ShimmerButton } from '@/components/ui'
import { FileText } from 'lucide-react'
import React from 'react'

export const ArticleProblems = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold mb-4'>
        Your Online Presence is Too Important to Neglect
      </h2>
      <ul className='space-y-3 text-foreground/80'>
        <li className='flex items-start'>
          <span className='text-destructive mr-2'>•</span>
          Your competitors dominate the first page of Google while your business
          remains invisible
        </li>
        <li className='flex items-start'>
          <span className='text-destructive mr-2'>•</span>
          You&apos;re losing $10,000+ in potential monthly revenue to
          better-ranking competitors
        </li>
        <li className='flex items-start'>
          <span className='text-destructive mr-2'>•</span>
          Your expertise isn&apos;t reaching the 90% of customers who research
          online before buying
        </li>
        <li className='flex items-start'>
          <span className='text-destructive mr-2'>•</span>
          Your team wastes hours creating content that does&apos;nt drive
          results
        </li>
      </ul>
      <div className='relative mt-4'>
        <div className='absolute -left-5 top-2'>
          <div className='bg-neutral-950/90 w-10 h-10 rounded-full flex items-center justify-center'>
            <FileText className='w-5 h-5 text-destructive' />
          </div>
        </div>
        <div className='bg-neutral-950/50 rounded-lg p-4 ml-8'>
          <h3 className='font-medium mb-2'>
            10 Ways to Boost Your SEO Rankings
          </h3>
          <p className='text-foreground/80 text-sm mb-3'>
            Learn the latest strategies to improve your website&apos;s
            visibility...
            <span className='text-destructive'>@Editor</span> Can you review
            this section?
          </p>
          <div className='flex gap-3'>
            <ShimmerButton
              size='sm'
              variant='ghost'
              className='text-foreground/60 hover:text-foreground/90'
            >
              @
            </ShimmerButton>
            <ShimmerButton
              variant='ghost'
              size='sm'
              className='text-foreground/60 hover:text-foreground/90'
            >
              😊
            </ShimmerButton>
            <ShimmerButton
              size='sm'
              variant='ghost'
              className='text-foreground/60 hover:text-foreground/90'
            >
              🔗
            </ShimmerButton>
          </div>
        </div>
      </div>
      <div className='mt-auto text-center text-foreground/80'>
        <p>Optimized for Mobile and Search Engines</p>
      </div>

      {/* Customization section */}
      <div className='mt-10'>
        <h2 className='text-xl font-bold mb-2'>Lost Opportunities</h2>
        <p className='text-foreground/80'>
          Without high-ranking content, you&apos;re missing out on 67% of all
          clicks that go to the first five organic results.
        </p>
      </div>
    </div>
  )
}
