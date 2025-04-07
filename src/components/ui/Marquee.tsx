'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

type CardContent =
  | { type: 'image'; content: string }
  | {
      type: 'stat';
      title: string;
      description: string;
      icon: LucideIcon | IconType;
      positive: boolean;
    };

interface MarqueeProps {
  items: CardContent[];
  direction?: 'up' | 'down' | 'left' | 'right';
  speed?: number;
  className?: string;
}

export function Marquee({
  items,
  direction = 'right',
  speed = 5,
  className = '',
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollSpeed, setScrollSpeed] = useState(speed);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll speed based on window scroll position
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollY / maxScroll;

      // Increase speed based on scroll position (max 2x the original speed)
      const newSpeed = speed + speed * scrollPercentage;
      setScrollSpeed(newSpeed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  // Determine animation direction and style
  const getAnimationStyle = () => {
    const baseAnimation = {
      animationDuration: `${100 / scrollSpeed}s`,
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
    };

    switch (direction) {
      case 'up':
        return {
          ...baseAnimation,
          animationName: 'scrollUp',
          flexDirection: 'column' as const,
        };
      case 'down':
        return {
          ...baseAnimation,
          animationName: 'scrollDown',
          flexDirection: 'column' as const,
        };
      case 'left':
        return {
          ...baseAnimation,
          animationName: 'scrollLeft',
          flexDirection: 'row' as const,
        };
      case 'right':
      default:
        return {
          ...baseAnimation,
          animationName: 'scrollRight',
          flexDirection: 'row' as const,
        };
    }
  };

  const isVertical = direction === 'up' || direction === 'down';

  return (
    <div
      className={`marquee-container overflow-hidden ${className}`}
      ref={containerRef}
    >
      <style jsx>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollLeft {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes scrollUp {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>

      <div className='marquee-content flex' style={getAnimationStyle()}>
        {/* Duplicate items for seamless looping */}
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className={`marquee-item ${
              isVertical ? 'w-full' : 'flex-shrink-0'
            }`}
          >
            <Card content={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ content }: { content: CardContent }) {
  return (
    <div
      className={` w-80 m-1 rounded-lg border border-ring/20 p-2 backdrop-blur-3xl backdrop-filter py-6 px-3 ${
        content.type === 'image'
          ? 'bg-card'
          : content.type === 'stat' && content.positive
          ? 'bg-gradient-to-br from-card to-secondary-green/10 '
          : 'bg-gradient-to-br from-card to-destructive/10'
      }`}
    >
      {content.type === 'image' ? (
        <Image
          src={content.content}
          alt='Google Ads Stats'
          width={400}
          height={300}
          layout='responsive'
          className='rounded-lg'
        />
      ) : (
        <div className='flex items-center space-x-2 flex-col gap-4'>
          <div
            className={`w-full flex gap-2 items-center justify-start
            
            ${content.positive ? 'text-secondary-green' : 'text-red-500'}
          
            
            `}
          >
            <span
              className={`
              size-12 rounded-lg  flex items-center justify-center p-2
            ${
              content.positive
                ? 'text-secondary-green bg-secondary-green/10'
                : 'text-red-500 bg-red-500/10'
            }
              `}
            >
              <content.icon />
            </span>
            <h3>{content.title}</h3>
          </div>
          <p
            className={
              content.positive ? 'text-secondary-green' : 'text-red-500 '
            }
          >
            <span className={``}>{content.positive ? '+' : '-'}</span>{' '}
            {content.description}
          </p>
        </div>
      )}
    </div>
  );
}
