import { ShimmerButton } from '@/components/ui'
import { BarChart2, PenTool, MessageSquare } from 'lucide-react'
import React from 'react'

export const ArticleBeneffits = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>Why Trust Our Expertise?</h2>
        <p className='text-foreground/80'>
          With 10+ years of experience and over 500 businesses helped, we
          understand the frustration of great products going unnoticed. Our
          founder went from page 10 to position #1 for his own business, and now
          leads a team of SEO experts and content strategists.
        </p>
        <div className='mt-4 bg-neutral-950/30 rounded-lg p-4'>
          <p className='text-foreground/90'>
            &quot;We&apos;ve helped businesses like yours increase organic
            traffic by an average of 312% in just 6 months. Our proven content
            strategy combines data-driven SEO with compelling storytelling that
            converts visitors into customers.&quot;
          </p>
        </div>
      </div>

      {/* Analytics preview */}
      <div className='mt-8'>
        <div className='flex items-start mb-6'>
          <div className='bg-foreground/70 w-8 h-8 rounded-full mr-3 flex-shrink-0'></div>
          <div>
            <div className='flex items-center'>
              <span className='font-medium'>Content Manager</span>
              <span className='text-foreground/60 text-sm ml-2'>Apr 11</span>
            </div>
            <p className='text-foreground/90'>
              Great article! The SEO tips are spot-on.
            </p>
            <div className='flex items-center mt-1'>
              <span className='text-secondary'>👍</span>
              <span className='ml-1 text-sm'>1</span>
            </div>
          </div>
        </div>

        <div className='flex items-start mb-6'>
          <div className='bg-primary w-8 h-8 rounded-full mr-3 flex-shrink-0'></div>
          <div>
            <div className='flex items-center'>
              <span className='font-medium'>SEO Expert</span>
              <span className='text-foreground/60 text-sm ml-2'>Apr 12</span>
              <span className='ml-2 text-xs px-2 py-0.5 bg-foreground/90 text-foreground/90 rounded-full'>
                NEW
              </span>
            </div>
            <p className='text-foreground/90'>
              Let&apos;s add a section about mobile optimization.
              <br />
              It&apos;s crucial for rankings in 2024!
            </p>
          </div>
        </div>
      </div>

      {/* Analytics visualizer */}
      <div className='mt-auto mb-10'>
        <div className='w-full bg-neutral-950/50 rounded-lg p-4'>
          <div className='flex justify-between items-center mb-4'>
            <div className='h-6 flex items-center justify-center space-x-1'>
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className='w-1 bg-foreground/40'
                  style={{
                    height: `${Math.abs(Math.sin(i * 0.3) * 15 + 5)}px`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <div className='bg-foreground/70 w-6 h-6 rounded-full'></div>
            <div className='bg-primary w-6 h-6 rounded-full'></div>
            <div className='bg-foreground/70 w-6 h-6 rounded-full'></div>
          </div>

          <div className='mt-3 flex justify-between'>
            <div>
              <span className='text-foreground/90'>@Analytics</span>
              <span className='text-foreground/80 ml-2'>
                Traffic up by 25%!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Media controls */}
      <div className='flex justify-center gap-6 text-foreground/80 mt-6'>
        <ShimmerButton size='sm' variant='ghost' className='flex items-center'>
          <BarChart2 className='w-5 h-5 mr-2 text-secondary' strokeWidth={2} />
          Performance
        </ShimmerButton>
        <ShimmerButton size='sm' variant='ghost' className='flex items-center'>
          <PenTool className='w-5 h-5 mr-2 text-secondary' strokeWidth={2} />
          Editor
        </ShimmerButton>
        <ShimmerButton size='sm' variant='ghost' className='flex items-center'>
          <MessageSquare
            className='w-5 h-5 mr-2 text-secondary'
            strokeWidth={2}
          />
          Comments
        </ShimmerButton>
      </div>
    </div>
  )
}
