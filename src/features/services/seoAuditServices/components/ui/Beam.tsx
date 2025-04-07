'use client';
import { useEffect, useRef, useState } from 'react';

interface BeamProps {
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  gradientStartColor: string;
  gradientStopColor: string;
  pathColor: string;
  pathOpacity?: number;
  startFromCenter?: boolean;
  endYOffset?: number;
}

export const Beam: React.FC<BeamProps> = ({
  containerRef,
  fromRef,
  toRef,
  gradientStartColor,
  gradientStopColor,
  pathColor,
  pathOpacity = 0.2,
  startFromCenter = true,
  endYOffset = -5,
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [path, setPath] = useState('');

  useEffect(() => {
    const updatePath = () => {
      if (
        !containerRef.current ||
        !fromRef.current ||
        !toRef.current ||
        !pathRef.current
      )
        return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      const fromX =
        fromRect.left +
        (startFromCenter ? fromRect.width / 2 : 0) -
        containerRect.left;
      const fromY =
        fromRect.top +
        (startFromCenter ? fromRect.height / 2 : 0) -
        containerRect.top;
      const toX = toRect.left + toRect.width / 2 - containerRect.left;
      const toY = toRect.top + endYOffset - containerRect.top;

      const newPath = `M ${fromX},${fromY} C ${fromX},${
        (fromY + toY) / 2
      } ${toX},${(fromY + toY) / 2} ${toX},${toY}`;
      setPath(newPath);
    };

    updatePath();
    window.addEventListener('resize', updatePath);
    return () => window.removeEventListener('resize', updatePath);
  }, [containerRef, fromRef, toRef, startFromCenter, endYOffset]);

  return (
    <svg
      className='absolute top-0 left-0 w-full h-full pointer-events-none'
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient
          id={`gradient-${fromRef.current?.id}`}
          x1='0%'
          y1='0%'
          x2='100%'
          y2='0%'
        >
          <stop offset='0%' stopColor={gradientStartColor} stopOpacity='1' />
          <stop offset='100%' stopColor={gradientStopColor} stopOpacity='1' />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={path}
        stroke={pathColor}
        strokeWidth='1'
        fill='none'
        opacity={pathOpacity}
      />
    </svg>
  );
};
