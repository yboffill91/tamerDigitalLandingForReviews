'use client';

import { useId, useState, useEffect } from 'react';

interface GridProps {
  size?: number;
  className?: string;
  variant?: 'blue' | 'green';
}

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  variant = 'blue',
  ...props
}: GridPatternProps) {
  const patternId = useId();
  const patternX = x ?? '-12';
  const patternY = y ?? '4';

  // Define variant-specific styles
  const variantStyles = {
    blue: {
      pathStroke: 'stroke-ring',
      rectFill: 'fill-secondary/50',
    },
    green: {
      pathStroke: 'stroke-emerald-300',
      rectFill: 'fill-emerald-500/30',
    },
  };

  // Use the variant to determine styles
  const styles = variantStyles[variant];

  return (
    <svg aria-hidden='true' {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits='userSpaceOnUse'
          x={patternX}
          y={patternY}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill='none'
            className={styles.pathStroke}
          />
        </pattern>
      </defs>
      <rect
        width='100%'
        height='100%'
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={patternX} y={patternY} className='overflow-visible'>
          {squares.map(([squareX, squareY], index) => (
            <rect
              strokeWidth='0'
              key={`${patternId}-square-${index}-${squareX}-${squareY}`}
              width={width}
              height={height}
              x={squareX * width}
              y={squareY * height}
              className={`origin-center ${styles.rectFill}`}
              style={{
                opacity: 0,
                animation: 'sequentialFadeInOut 5s ease-in-out forwards',
                animationDelay: `${index * 100}ms`,
              }}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

// Now update the Grid component to include a CSS style block for the animations
export const Grid = ({ size = 20, className, variant = 'blue' }: GridProps) => {
  const gridId = useId();

  // Convert fixed pattern to state that can be updated
  const [pattern, setPattern] = useState([
    [10, 10],
    [25, 8],
    [24, 8],
    [23, 8],
    [25, 9],
    [27, 7],
    [22, 4],
    [17, 4],
    [23, 0],
    [33, 1],
    [44, 3],
    [40, 3],
    [41, 2],
    [43, 4],
    [100, 10],
    [56, 12],
    [23, 17],
    [21, 15],
    [20, 4],
    [30, 18],
    [21, 10],
    [22, 10],
    [11, 5],
    [27, 18],
    [26, 12],
  ]);

  const variantStyles = {
    blue: {
      gradient: 'from-background-primary/90 to-card/5',
      fill: 'fill-secondary/50',
      stroke: 'stroke-ring',
    },
    green: {
      gradient: 'from-emerald-900/20 to-emerald-50/5',
      fill: 'fill-emerald-500/30',
      stroke: 'stroke-emerald-300',
    },
  };

  const styles = variantStyles[variant];

  // Function to generate random pattern values
  const generateRandomPattern = () => {
    return pattern.map(() => [
      Math.floor(Math.random() * 91), // Random value between 0-200 for x
      Math.floor(Math.random() * 20), // Random value between 0-30 for y
    ]);
  };

  // Set up timer to update pattern every 10 seconds
  useEffect(() => {
    // Calculate total animation time based on number of elements
    // (last element delay + animation duration)
    const totalAnimationTime = pattern.length * 100 + 1000;

    const intervalId = setInterval(() => {
      setPattern(generateRandomPattern());
    }, Math.max(10000, totalAnimationTime)); // Use at least 10 seconds or the total animation time

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [pattern.length]);

  return (
    <>
      <style jsx global>{`
        @keyframes sequentialFadeInOut {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          80% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }
      `}</style>
      <div
        className={`${className} pointer-events-none absolute -z-20 top-0 h-full w-full [mask-image:linear-gradient(white,transparent)] rounded-xl`}
      >
        <div
          className={`absolute inset-0 top-0 right-0 bg-gradient-to-b ${styles.gradient} rounded-xl`}
        >
          <GridPattern
            key={`grid-${gridId}-${pattern.length}`} // Add pattern length to key to force re-render
            width={size}
            height={size}
            x='-12'
            y='4'
            squares={pattern}
            variant={variant}
            className={`absolute inset-0 h-full w-full ${styles.fill} ${styles.stroke} mix-blend-overlay`}
          />
        </div>
      </div>
    </>
  );
};

interface GridPatternProps {
  width: number;
  height: number;
  x?: string;
  y?: string;
  squares?: number[][];
  className?: string;
  variant?: 'blue' | 'green';
}
