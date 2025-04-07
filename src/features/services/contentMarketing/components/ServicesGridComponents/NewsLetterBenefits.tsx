import {
  Clock,
  Eye,
  Users,
} from 'lucide-react'
import React from 'react'

export const NewsLettersBenefits = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-10'>
        <h2 className='text-xl font-bold mb-4'>Why Trust Our Expertise?</h2>
        <p className='text-foreground/80 mb-4'>
          Our email marketing specialists have sent over 10 million newsletters
          that consistently achieve 2-3x industry average engagement rates. We
          know how to turn subscribers into loyal customers.
        </p>
        <div className='mt-4 bg-primary/10 rounded-lg p-4'>
          <p className='text-foreground/90'>
            &quot;Our clients see an average 42% open rate and 12% click-through
            rate. We create newsletters that your subscribers actually look
            forward to reading.&quot;
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-2 gap-4 mb-8'>
        <div className='bg-neutral-950/50 rounded-lg p-4'>
          <div className='text-2xl font-bold text-ring'>42%</div>
          <div className='text-sm text-foreground/80'>Open Rate</div>
        </div>
        <div className='bg-neutral-950/50 rounded-lg p-4'>
          <div className='text-2xl font-bold text-ring'>12%</div>
          <div className='text-sm text-foreground/80'>Click Rate</div>
        </div>
        <div className='bg-neutral-950/50 rounded-lg p-4'>
          <div className='text-2xl font-bold text-ring'>2.1%</div>
          <div className='text-sm text-foreground/80'>Unsubscribe</div>
        </div>
        <div className='bg-neutral-950/50 rounded-lg p-4'>
          <div className='text-2xl font-bold text-ring'>98%</div>
          <div className='text-sm text-foreground/80'>Deliverability</div>
        </div>
      </div>

      {/* Action buttons */}
      <div className='mt-auto'>
        <div className='flex justify-between text-sm'>
          <button className='flex items-center gap-2 text-foreground/80'>
            <Eye className='w-4 h-4' />
            Preview
          </button>
          <button className='flex items-center gap-2 text-foreground/80'>
            <Clock className='w-4 h-4' />
            Schedule
          </button>
          <button className='flex items-center gap-2 text-foreground/80'>
            <Users className='w-4 h-4' />
            Recipients
          </button>
        </div>
      </div>
    </div>
  )
}
