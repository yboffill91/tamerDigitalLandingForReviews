'use client'

import type React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ShimmerButton } from './ui'

interface BreadcrumbProps {
  homeLabel?: string
  className?: string
  separator?: React.ReactNode
  is404?: boolean // Optional prop to explicitly mark 404 pages
}

export function Breadcrumb({
  homeLabel = 'Home',
  className,
  separator = <ChevronRight className='h-4 w-4 text-muted-foreground' />,
  is404 = false,
}: BreadcrumbProps) {
  const pathname = usePathname()

  // Check if we're on a 404 page either by prop or pathname
  const isNotFoundPage = is404 || pathname.includes('/404')

  // If we're on a 404 page, only show home link
  if (isNotFoundPage) {
    return (
      <nav
        aria-label='Breadcrumb'
        className={cn(
          'flex items-center justify-center min-w-96 mt-2 bg-card/5 backdrop-blur-md backdrop-filter rounded-lg',
          className
        )}
      >
        <Link href='/' className=''>
          <ShimmerButton variant='ghost' size='sm'>
            {homeLabel}
          </ShimmerButton>
        </Link>
      </nav>
    )
  }

  // Return null if we're on the homepage
  if (pathname === '/') return null

  // Split the pathname into segments and remove empty strings
  const segments = pathname.split('/').filter(Boolean)

  // Filter out "services" and "tools" segments
  const filteredSegments = segments.filter(
    (segment) => !['services', 'tools'].includes(segment.toLowerCase())
  )

  // If all segments were filtered out, return null
  if (filteredSegments.length === 0) return null

  // Create breadcrumb items with proper paths
  const breadcrumbItems = filteredSegments.map((segment, index) => {
    // For building the path, we need to consider the original segments
    // to maintain the correct URL structure
    const segmentIndex = segments.indexOf(segment)
    const path = `/${segments.slice(0, segmentIndex + 1).join('/')}`

    // Format the segment for display (capitalize first letter, replace hyphens with spaces)
    const displayName = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())

    // Determine if this is the last item (current page)
    const isLastItem = index === filteredSegments.length - 1

    return {
      name: displayName,
      path,
      isLastItem,
    }
  })

  return (
    <nav
      aria-label='Breadcrumb'
      className={cn(
        'flex items-center justify-center min-w-96 mt-2 bg-card/5 backdrop-blur-md backdrop-filter rounded-lg',
        className
      )}
    >
      <Link href='/' className=' '>
        <ShimmerButton variant='ghost' size='sm'>
          {homeLabel} {separator}
        </ShimmerButton>
      </Link>
      {breadcrumbItems.map(({ name, path, isLastItem }, index) => (
        <Link key={name + index} className='' href={path}>
          <ShimmerButton
            variant='ghost'
            size='sm'
            className={`${
              isLastItem ? ' pointer-events-none' : 'pointer-events-auto'
            }`}
          >
            {name} {!isLastItem && separator}
          </ShimmerButton>
        </Link>
      ))}
    </nav>
  )
}
