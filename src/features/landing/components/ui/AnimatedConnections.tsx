import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedConnectionsProps {
  width?: number;
  height?: number;
}

export const AnimatedConnections = ({ width = 1200, height = 500 }: AnimatedConnectionsProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex flex-shrink-0"
      >
        {/* Base paths - Top two lines curving down */}
        <path
          d="M180 60C180 60 300 60 400 60C500 60 500 160 500 250"
          stroke="#4B5563" 
          strokeWidth="0.5"
        />
        <path
          d="M220 180C220 180 300 180 380 180C460 180 500 200 500 250"
          stroke="#4B5563"
          strokeWidth="0.5"
        />

        {/* Base paths - Bottom two lines curving up (mirror of top) */}
        <path
          d="M180 440C180 440 300 440 400 440C500 440 500 340 500 250"
          stroke="#4B5563"
          strokeWidth="0.5"
        />
        <path
          d="M220 320C220 320 300 320 380 320C460 320 500 300 500 250"
          stroke="#4B5563"
          strokeWidth="0.5"
        />

        {/* Animated paths from left to center */}
        <path
          d="M180 60C180 60 300 60 400 60C500 60 500 160 500 250"
          stroke="url(#leftGradient1)"
          strokeWidth="0.5"
        />
        <path
          d="M220 180C220 180 300 180 380 180C460 180 500 200 500 250"
          stroke="url(#leftGradient2)"
          strokeWidth="0.5"
        />
        <path
          d="M180 440C180 440 300 440 400 440C500 440 500 340 500 250"
          stroke="url(#leftGradient3)"
          strokeWidth="0.5"
        />
        <path
          d="M220 320C220 320 300 320 380 320C460 320 500 300 500 250"
          stroke="url(#leftGradient4)"
          strokeWidth="0.5"
        />

        {/* Center to Right - Split paths for both cards */}
        {/* Inactive base paths */}
        <path
          d="M500 250L700 180"
          stroke="#4B5563"
          strokeWidth="0.5"
        />
        <path
          d="M500 250L700 320"
          stroke="#4B5563"
          strokeWidth="0.5"
        />
        
        {/* Animated paths */}
        <path
          d="M500 250L700 180"
          stroke="url(#rightGradient1)"
          strokeWidth="0.5"
        />
        <path
          d="M500 250L700 320"
          stroke="url(#rightGradient2)"
          strokeWidth="0.5"
        />
        
        <path
          d="M700 180L900 180"
          stroke="#4B5563"
          strokeWidth="0.5"
        />
        <path
          d="M700 320L900 320"
          stroke="#4B5563"
          strokeWidth="0.5"
        />
        
        {/* Right side animated paths */}
        <path
          d="M700 180L900 180"
          stroke="url(#rightGradient1)"
          strokeWidth="0.5"
        />
        <path
          d="M700 320L900 320"
          stroke="url(#rightGradient2)"
          strokeWidth="0.5"
        />

        {/* Gradient definitions */}
        <defs>
          {/* Left side gradients */}
          {[1, 2, 3, 4].map((i) => (
            <motion.linearGradient
              key={`leftGradient${i}`}
              id={`leftGradient${i}`}
              gradientUnits="userSpaceOnUse"
              animate={{
                x1: [0, width],
                x2: [width * 0.2, width * 1.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            >
              <stop stopColor="#1389FD" stopOpacity="0" />
              <stop offset="0.2" stopColor="#1389FD" />
              <stop offset="0.8" stopColor="#87CEFB" />
              <stop offset="1" stopColor="#1389FD" stopOpacity="0" />
            </motion.linearGradient>
          ))}

          {/* Right side gradients */}
          {[1, 2].map((i) => (
            <motion.linearGradient
              key={`rightGradient${i}`}
              id={`rightGradient${i}`}
              gradientUnits="userSpaceOnUse"
              animate={{
                x1: [0, width],
                x2: [width * 0.2, width * 1.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1
              }}
            >
              <stop stopColor="#1389FD" stopOpacity="0" />
              <stop offset="0.2" stopColor="#1389FD" />
              <stop offset="0.8" stopColor="#87CEFB" />
              <stop offset="1" stopColor="#1389FD" stopOpacity="0" />
            </motion.linearGradient>
          ))}
        </defs>

        {/* Connection points */}
        {/* Center dot */}
        <motion.circle
          cx="500"
          cy="250"
          r="3"
          fill="#202020"
          stroke="#1389FD"
          strokeWidth="0.5"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Left side dots */}
        
        {/* Right side dots */}
        {[
          { cx: 600, cy: 180 },
          { cx: 700, cy: 180 },
          { cx: 600, cy: 320 },
          { cx: 700, cy: 320 }
        ].map((pos, i) => (
          <motion.circle
            key={`right-dot-${i}`}
            cx={pos.cx}
            cy={pos.cy}
            r="3"
            fill="#202020"
            stroke="#1389FD"
            strokeWidth="0.5"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </svg>
    </div>
  );
};