import { LucideIcon } from 'lucide-react'
import React, { ReactNode } from 'react'
import { IconType } from 'react-icons'

interface GridComponentProps {
  problems: ReactNode
  benefits: ReactNode
  title: string
  description: string
  icon: LucideIcon | IconType
}

export const ContentMarketingGridComponent = ({
  problems,
  benefits,
  title,
  description,
  icon: IconElement,
}: GridComponentProps) => {
  return (
    <div className=' bg-card rounded-xl xl:grid xl:grid-cols-3 flex flex-col gap-2 mb-2'>
      <div className=' p-10 flex flex-col items-center justify-center h-full'>
        <div className='mb-8'>
          <div className='bg-ring/20 size-16 rounded-lg transform rotate-12 flex items-center justify-center'>
            <IconElement className='w-10 h-10 text-ring stroke-2' />
          </div>
        </div>
        <h2>{title}</h2>
        <p className=' text-foreground/80 mb-8'>{description}</p>
      </div>
      <div className=' xl:border-x xl:border-y-0 border-y border-foreground/10 p-10 flex flex-col'>
        {problems}
      </div>
      <div className=' p-10 flex flex-col'>{benefits}</div>
    </div>
  )
}
