import { ShimmerButton } from '@/components/ui'
import { Download, Share2, Users } from 'lucide-react'
import React from 'react'

export const EBookBenefits = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-10'>
        <h2 className='text-xl font-bold mb-4'>Why Trust Our Expertise?</h2>
        <p className='text-foreground/90 mb-4'>
          We&apos;ve helped over 300 businesses transform their knowledge into
          lead-generating assets. Our ebooks consistently achieve 15-25%
          conversion rates, far above the industry average.
        </p>
        <div className='mt-4 bg-primary/10 rounded-lg p-4'>
          <p className='text-foreground/90'>
            &quot;Our proven framework combines compelling design, strategic
            CTAs, and value-packed content to create resources your audience
            can&apos;t wait to download and share.&quot;
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-2 gap-4 mb-8'>
        <div className='bg-neutral-950/50 rounded-lg p-4'>
          <div className='text-2xl font-bold text-ring'>5,234</div>
          <div className='text-sm text-foreground/90'>Monthly Downloads</div>
        </div>
        <div className='bg-neutral-950/50 rounded-lg p-4'>
          <div className='text-2xl font-bold text-ring'>18.5%</div>
          <div className='text-sm text-foreground/90'>Conversion Rate</div>
        </div>
        <div className='bg-neutral-950/50 rounded-lg p-4'>
          <div className='text-2xl font-bold text-ring'>4.8/5</div>
          <div className='text-sm text-foreground/90'>User Rating</div>
        </div>
        <div className='bg-neutral-950/50 rounded-lg p-4'>
          <div className='text-2xl font-bold text-ring'>89%</div>
          <div className='text-sm text-foreground/90'>Read Rate</div>
        </div>
      </div>

      {/* Action buttons */}
      <div className='mt-auto'>
        <div className='flex justify-between text-sm'>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/90'
          >
            <Download className='w-4 h-4' />
            Download Sample
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/90'
          >
            <Share2 className='w-4 h-4' />
            Share Guide
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/90'
          >
            <Users className='w-4 h-4' />
            See Reviews
          </ShimmerButton>
        </div>
      </div>
    </div>
  )
}
