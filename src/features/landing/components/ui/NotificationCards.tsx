'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { baseNotifications } from '@/features/landing/utils'

interface Item {
  name: string
  icon: React.ElementType
  color: string
  time: string
  id: number
}

const Notification = React.forwardRef<HTMLDivElement, Item>(
  ({ name, icon: Icon, time }, ref) => {
    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20, height: 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 50,
          mass: 1,
        }}
        className='relative flex items-center gap-4 py-2 group'
      >
        {/* Glowing Dot */}
        <div className='relative'>
          <div className='w-3 h-3 rounded-lg bg-primary relative z-10'>
            <div className='absolute inset-0 rounded-lg bg-primary blur-[6px] opacity-70' />
          </div>
        </div>

        {/* Content */}
        <div className='flex flex-1 items-center justify-between min-w-0 group-hover:bg-ring/30 py-2 px-3 rounded-lg transition-colors'>
          <div className='flex items-center gap-3 min-w-0'>
            <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
              <Icon className='w-4 h-4 text-white' />
            </div>
            <span className='text-sm font-medium truncate text-white/70'>
              {name}
            </span>
          </div>
          <span className='text-xs shrink-0 ml-2 text-primary'>{time}</span>
        </div>
      </motion.div>
    )
  }
)

Notification.displayName = 'Notification'

export function NotificationCard() {
  const [notifications, setNotifications] = useState<(Item & { id: number })[]>(
    []
  )
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = {
        ...baseNotifications[counter % baseNotifications.length],
        id: Date.now(),
      }

      setNotifications((prev) => {
        const newNotifications = [newNotification, ...prev]
        // Keep only the last 3 notifications
        if (newNotifications.length > 3) {
          return newNotifications.slice(0, 3)
        }
        return newNotifications
      })

      setCounter((prev) => prev + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, [counter])

  return (
    <div className='relative h-[210px] w-full rounded-lg bg-ring/20 backdrop-blur-sm border border-primary/20 p-4 overflow-hidden'>
      {/* Animated connecting line */}
      <AnimatePresence>
        {notifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.3 }}
            className='absolute left-[21.5px] top-[28px] w-[1px] origin-top h-full'
            style={{
              height: `${Math.max(0, (notifications.length - 1) * 64)}px`,
              background:
                'linear-gradient(to bottom, #1389FD 0%, rgba(19, 137, 253, 0.5) 50%, transparent 100%)',
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode='popLayout' initial={false}>
        {notifications.map((item) => (
          <Notification key={item.id} {...item} />
        ))}
      </AnimatePresence>
    </div>
  )
}
