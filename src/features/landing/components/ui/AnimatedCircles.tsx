'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { cn } from '@/lib'
import {
  IconBrandTiktok,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandX,
} from '@tabler/icons-react'

const Skeleton = () => {
  return (
    <div className='p-8 overflow-hidden h-full relative flex items-center justify-center '>
      <div className='flex flex-row flex-shrink-0 justify-center items-center gap-2'>
        <Container className='h-8 w-8 circle-1'>
          <IconBrandTiktok className='h-4 w-4 text-ring ' />
        </Container>
        <Container className='h-12 w-12 circle-2'>
          <IconBrandYoutube className='h-6 w-6 text-ring' />
        </Container>
        <Container className='circle-3'>
          <IconBrandInstagram className='size-8 text-ring' />
        </Container>
        <Container className='h-12 w-12 circle-4'>
          <IconBrandFacebook className='h-6 w-6 text-ring' />
        </Container>
        <Container className='h-8 w-8 circle-5'>
          <IconBrandX className='h-4 w-4 text-ring' />
        </Container>
      </div>

      <div className='h-40 w-px absolute top-4 m-auto z-40 bg-gradient-to-b from-transparent via-primary to-transparent animate-move'>
        <div className='w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10'>
          <Sparkles />
        </div>
      </div>
    </div>
  )
}

const Sparkles = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const randomMove = () => Math.random() * 2 - 1
  const randomOpacity = () => Math.random()
  const random = () => Math.random()

  return (
    <div className='absolute inset-0'>
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: '50%',
            zIndex: 1,
          }}
          className='inline-block bg-primary'
        ></motion.span>
      ))}
    </div>
  )
}

const Container = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-lg flex items-center justify-center bg-card/90
        shadow-[0px_0px_8px_0px_rgba(19,137,253,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
        hover:bg-primary/20 transition-all duration-300 cursor-pointer
        `,
        className
      )}
    >
      {children}
    </div>
  )
}

export function AnimatedCircles() {
  return (
    <div className='w-full h-full bg-ring/10 '>
      <Skeleton />
    </div>
  )
}
