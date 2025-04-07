import { ShimmerButton } from '@/components/ui'
import { Download, Eye, Share2 } from 'lucide-react'
import React from 'react'

export const InfoBenefits = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-10'>
        <h2 className='text-xl font-bold mb-4'>Why Trust Our Expertise?</h2>
        <p className='text-foreground/80 mb-4'>
          We&apos;ve been in your shoes. Our founder spent years watching
          brilliant insights get ignored because they were&apos;nt presented
          effectively. That frustration led to a mission: making data impossible
          to ignore.
        </p>
        <div className='mt-4 bg-primary/10 rounded-lg p-4'>
          <p className='text-foreground/90'>
            &quot;After transforming data presentations for over 200 companies,
            we&apos;ve perfected the art of visual storytelling. Our clients
            report 82% better information retention and 3x faster
            decision-making when using our infographics.&quot;
          </p>
        </div>
        <div className='bg-neutral-950 rounded-lg p-4 my-2'>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex items-center gap-2'>
              <Eye className='w-4 h-4 text-secondary' />
              <span className=''>Engagement Rate</span>
            </div>
            <span className='text-secondary'>94%</span>
          </div>
          <div className='h-2 bg-foreground/90 rounded-full'>
            <div className='h-full w-[94%] bg-primary rounded-full'></div>
          </div>
        </div>

        <div className='bg-neutral-950 rounded-lg p-4 my-2'>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex items-center gap-2'>
              <Share2 className='w-4 h-4 text-purple-400' />
              <span className=''>Share Rate</span>
            </div>
            <span className='text-purple-400'>78%</span>
          </div>
          <div className='h-2 bg-foreground/90 rounded-full'>
            <div className='h-full w-[78%] bg-purple-500 rounded-full'></div>
          </div>
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
            <Download className='w-4 h-4' />
            Download Template
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/80'
          >
            <Share2 className='w-4 h-4' />
            Share Design
          </ShimmerButton>
          <ShimmerButton
            size='sm'
            variant='ghost'
            className='flex items-center gap-2 text-foreground/80'
          >
            <Eye className='w-4 h-4' />
            Preview
          </ShimmerButton>
        </div>
      </div>
    </div>
  )
}
