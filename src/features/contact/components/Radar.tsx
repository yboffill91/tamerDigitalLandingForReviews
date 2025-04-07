'use client';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

export const useRadarPosition = () => {
  const [angle, setAngle] = useState(0);
  const [completedCycle, setCompletedCycle] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    let lastAngle = 0;

    const updateAngle = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const rotation = ((elapsed % 4000) / 4000) * 360;

      // Activar el parpadeo cuando estamos cerca de completar el ciclo (345 grados)
      if (rotation >= 190 && !isBlinking) {
        setCompletedCycle(true);
        setIsBlinking(true);

        // Apagar el parpadeo después de 400ms
        setTimeout(() => {
          setIsBlinking(false);
          setCompletedCycle(false);
        }, 400);
      }

      // Resetear cuando completa el ciclo
      if (rotation < lastAngle) {
        setCompletedCycle(false);
      }

      lastAngle = rotation;

      setAngle(rotation);
      requestAnimationFrame(updateAngle);
    };

    const animationFrame = requestAnimationFrame(updateAngle);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return { angle, completedCycle, isBlinking };
};

interface RadarProps {
  className?: string;
}

export const Radar = ({ className }: RadarProps) => {
  const circles = new Array(8).fill(1);
  const { angle } = useRadarPosition();

  return (
    <div
      className={twMerge(
        'relative flex h-20 w-20 items-center justify-center rounded-full',
        className
      )}
    >
      <div
        style={{
          transformOrigin: 'right center',
          transform: `rotate(${angle}deg)`,
        }}
        className='absolute right-1/2 top-1/2 z-40 flex h-[5px] overflow-hidden w-[400px] items-end justify-center bg-transparent'
      >
        {/* Radar line that rotates */}
        <div className='relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-ring to-transparent' />
      </div>
      {/* concentric circles */}
      {circles.map((circle, idx) => (
        <Circle
          style={{
            height: `${(idx + 1) * 5}rem`,
            width: `${(idx + 1) * 5}rem`,
            border: `10px solid rgba(0,0,0 ${0.4 - (idx + 1) * 0.05})`,
          }}
          key={`motion-${idx}`}
          idx={idx}
        />
      ))}
    </div>
  );
};

{
  /* Creating circles */
}

interface CircleProps {
  className?: string;
  idx: number;
  style?: React.CSSProperties;
}

export const Circle = ({ className, idx, ...rest }: CircleProps) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: idx * 0.1,
        duration: 0.5,
      }}
      className={twMerge(
        'absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full ',
        className
      )}
    ></motion.div>
  );
};
