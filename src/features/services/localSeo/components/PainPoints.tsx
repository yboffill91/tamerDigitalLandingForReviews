'use client'
import { WorkflowIcon } from 'lucide-react'
import { painPoints } from '@/features/services/localSeo/utils'
import { LeadingSection } from '@/features/services/components'
import { InfoCard } from '@/components/ui'

export const ServicesSection = () => {
  return (
    <div className='relative max-w-7xl mx-auto px-2'>
      <div className='flex flex-col md:flex-row gap-y-8'>
        <div className='md:w-1/3 max-w-md mx-auto sticky top-8 '>
          <LeadingSection
            badgeText='Challenges'
            description="As Local SEO experts, we see these challenges every day. You're not alone in this struggle."
            heading="We Understand Exactly What You're Going Through"
            icon={WorkflowIcon}
            variant='red'
          />
        </div>

        {/* Right Column - Pain Point Cards */}
        {/* Make this column taller to ensure scrolling happens */}
        <div className='md:w-2/3'>
          <div className='flex flex-wrap gap-4 pb-20'>
            {painPoints.map(({ title, description, icon }, index) => (
              <InfoCard
                key={index}
                index={index}
                title={title}
                description={description}
                icon={icon}
                color='red'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
