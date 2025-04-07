'use client'
import { Grid, IconButton3D } from '@/components/ui'
import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export interface LocationArea {
  name: string
  link: string
  isActive?: boolean
}

export const Locations = ({
  LocationList,
  variant = 'blue',
}: {
  LocationList: LocationArea[]
  variant?: 'blue' | 'green'
}) => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  const variantStyles = {
    blue: {
      activeText: 'text-primary font-bold',
      hoverText: 'hover:text-ring',
      dotBg: 'bg-primary',
      dotHover: 'group-hover:bg-ring',
    },
    green: {
      activeText: 'text-secondary-green font-bold',
      hoverText: 'hover:text-emerald-400',
      dotBg: 'bg-secondary-green',
      dotHover: 'group-hover:bg-emerald-400',
    },
  }

  const styles = variantStyles[variant]

  return (
    <div className='relative min-h-72 flex flex-col items-center justify-start p-4'>
      <span className='w-full h-full bg-gradient-to-b from-background-primary to-transparent absolute -top-1 left-0 -z-10' />
      <Grid variant={variant} />
      <div className='mb-12 text-center '>
        <IconButton3D icon={MapPin} className='mb-6' variant={variant} />
        <span>
          <h2>
            Our SEO and Marketing Agency
            <br />
            <span
              className={
                variant === 'blue' ? 'heading-gradient' : 'text-secondary-green'
              }
            >
              {' '}
              At Your City
            </span>
          </h2>
        </span>
      </div>
      <div
        ref={containerRef}
        className='flex flex-wrap gap-4 max-w-7xl px-4 py-6 rounded-lg items-center justify-center relative'
      >
        {LocationList.map(({ name, link, isActive }, index) => (
          <motion.div
            key={name + link}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: 'easeOut',
            }}
          >
            <Link
              href={link}
              className={`flex gap-2 items-center text-lg justify-center transition-all duration-300 ease-in-out group relative ${
                isActive ? styles.activeText : styles.hoverText
              }`}
            >
              <h3 className='text-lg'>{name}</h3>
              {index < LocationList.length - 1 && (
                <span
                  className={`${styles.dotBg} h-2 w-2 rounded-full ${styles.dotHover} group-hover:rounded-none`}
                >
                  {' '}
                </span>
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
