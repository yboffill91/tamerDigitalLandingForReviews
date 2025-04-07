'use client';

import type { FAQItem } from '@/lib';
import { ChevronDown, MessageCircleQuestion, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';

export const FAQSection = ({ items }: { items: FAQItem[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const CARD_HEIGHT = 70;
  const ANIMATION_DURATION = 800;
  const ANIMATION_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';
  const ANIMATION_DELAY = 50;

  const getCardColor = (index: number) => {
    if (index === 0) return '#1389FD';
    const opacity = Math.max(0.15, 1 - index * 0.2);
    return `rgba(19, 137, 253, ${opacity})`;
  };

  const handleCardClick = (index: number) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  const handleExpandClick = () => {
    if (isExpanded) {
      setIsClosing(true);
      setTimeout(() => {
        setIsExpanded(false);
        setIsClosing(false);
      }, ANIMATION_DURATION + items.length * ANIMATION_DELAY);
    } else {
      setIsExpanded(true);
    }
  };

  useEffect(() => {
    if (isClosing) {
      setOpenCardIndex(null);
    }
  }, [isClosing]);

  return (
    <div className='relative'>
      {!isExpanded && (
        <div className='absolute w-full' style={{ perspective: '2000px' }}>
          {[...Array(4)].map(
            (_, i) =>
              i > 0 && (
                <div
                  key={i}
                  className='absolute w-full rounded-lg transform-gpu backdrop-blur-sm'
                  style={{
                    height: CARD_HEIGHT,
                    transform: `translateY(-${i * 12}px) translateZ(-${
                      i * 30
                    }px) rotateX(${i * 2}deg)`,
                    backgroundColor: getCardColor(i),
                    pointerEvents: 'none',
                    zIndex: 4 - i,
                    transition: `all ${ANIMATION_DURATION}ms ${ANIMATION_EASING}`,
                    opacity: 1 - i * 0.2,
                  }}
                />
              )
          )}
        </div>
      )}

      <div
        className={`transition-all duration-800`}
        style={{
          transitionTimingFunction: ANIMATION_EASING,
          transitionDelay: isExpanded
            ? '0s'
            : `${ANIMATION_DELAY * (items.length + 1)}ms`,
        }}
      >
        <div
          onClick={handleExpandClick}
          className={`rounded-lg cursor-pointer relative transition-all duration-800 ease-[${ANIMATION_EASING}] hover:shadow-lg hover:shadow-[#1389FD]/10`}
          style={{
            backgroundColor: getCardColor(0),
            zIndex: 5,
            height: `${CARD_HEIGHT}px`,
            transition: `all ${ANIMATION_DURATION}ms ${ANIMATION_EASING}`,
          }}
        >
          <div className='flex items-center justify-between h-[70px] px-4'>
            <div className='flex items-center gap-3'>
              <MessageCircleQuestion className='w-6 h-6 text-foreground' />
              <h3 className='text-foreground text-lg font-medium'>
                Let&apos;s Clear Your Doubts
              </h3>
            </div>
            <Plus
              className={`w-6 h-6 text-foreground transition-transform duration-300 ${
                isExpanded ? 'rotate-45' : ''
              }`}
            />
          </div>
        </div>

        <div
          className={`space-y-3 transition-all duration-800 origin-top`}
          style={{
            height: isExpanded ? 'auto' : '0px',
            opacity: isExpanded ? 1 : 0.2,
            marginTop: isExpanded ? '12px' : '0px',
            overflow: 'hidden',
            transitionTimingFunction: ANIMATION_EASING,
            transitionDelay: isExpanded ? '0s' : `${ANIMATION_DELAY * 2}ms`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg cursor-pointer transition-all duration-800 ease-[${ANIMATION_EASING}] hover:shadow-lg hover:shadow-[#1389FD]/10`}
              style={{
                backgroundColor: getCardColor(index + 1),
                height: 'auto',
                minHeight: `${CARD_HEIGHT}px`,
                transform: `translateY(${isExpanded && !isClosing ? 0 : -8}px)`,
                opacity: isExpanded && !isClosing ? 1 : 0,
                transitionProperty: 'all',
                transitionDuration: `${ANIMATION_DURATION}ms`,
                transitionTimingFunction: ANIMATION_EASING,
                transitionDelay: `${
                  isExpanded && !isClosing
                    ? index * ANIMATION_DELAY
                    : (items.length - index - 1) * ANIMATION_DELAY
                }ms`,
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className='flex items-center justify-between h-[70px] px-4'>
                <div className='flex items-center gap-3'>
                  <item.icon className='w-6 h-6 text-foreground' />
                  <h3 className='text-foreground text-lg font-medium'>
                    {item.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-foreground transition-transform duration-500 ${
                    openCardIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div
                className='px-4 pb-4 text-foreground/80 transition-all duration-500 mt-2'
                style={{
                  opacity: openCardIndex === index ? 1 : 0,
                  maxHeight: openCardIndex === index ? '1000px' : '0',
                  overflow: 'hidden',
                }}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
