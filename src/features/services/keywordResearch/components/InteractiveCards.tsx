'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const InteractiveCards = () => {
  return (
    <div className="relative h-[550px]">
      {/* Monthly Excerpts Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute left-[30px] top-[30px] w-[320px] h-[400px] bg-[#1c1c1c]/90 backdrop-blur-[10px] rounded-2xl shadow-xl z-10 p-5 border border-[#242424]"
      >
        <div className="flex justify-between items-start">
          <span className="text-2xl text-gray-500">⋮</span>
          <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">LIVE</span>
        </div>
        
        <div className="mt-8">
          <div className="flex items-center">
            <span className="text-6xl font-medium text-white">745</span>
            <span className="text-green-500 text-2xl ml-2">▲</span>
          </div>
          <p className="text-gray-400 mt-2">Keywords Tracked Monthly</p>
        </div>
        
        <div className="relative mt-8 h-[150px]">
          <svg className="w-full h-full" viewBox="0 0 320 150" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(59, 130, 246, 0.4)" />
                <stop offset="100%" stopColor="rgb(59, 130, 246, 0.05)" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 L40,67.5 L80,52.5 L120,63 L160,45 L200,52.5 L240,30 L280,37.5 L320,22.5 L320,150 L0,150 Z"
              fill="url(#chartGradient)"
            />
            <path
              d="M0,60 L40,67.5 L80,52.5 L120,63 L160,45 L200,52.5 L240,30 L280,37.5 L320,22.5"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <div className="absolute left-[65%] bottom-[41%] w-3 h-3 bg-blue-500 rounded-full border-2 border-[#1c1c1c] shadow-lg"></div>
        </div>
        
        <div className="absolute bottom-5 left-5">
          <p className="text-sm text-gray-400">Monthly Report</p>
          <p className="text-base font-medium text-white">Search Performance</p>
          <p className="text-sm text-gray-400">Version 2.0</p>
        </div>
        
        <div className="absolute bottom-5 right-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#3b82f6">
            <path d="M6,2L0,6L6,10L0,14L6,18L12,14L18,18L24,14L18,10L24,6L18,2L12,6L6,2Z" />
          </svg>
        </div>
      </motion.div>

      {/* Volunteer Survey Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="absolute right-[-20px] top-0 w-[260px] h-[270px] bg-[#1c1c1c]/90 backdrop-blur-[10px] rounded-2xl shadow-xl z-30 p-5 border border-[#242424]"
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-white font-medium">Keyword Opportunities</h3>
            <p className="text-xs text-gray-400 mt-1">334 NEW KEYWORDS</p>
          </div>
          <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">NEW</span>
        </div>

        <div className="relative mt-6 flex justify-center">
          <svg className="w-[120px] h-[120px] -rotate-90">
            <circle
              cx="60"
              cy="60"
              r="45"
              stroke="#242424"
              strokeWidth="12"
              fill="transparent"
            />
            <circle
              cx="60"
              cy="60"
              r="45"
              stroke="#3b82f6"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray="283"
              strokeDashoffset="200"
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold text-white">
            92
          </span>
          <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-[26px] h-[26px] bg-blue-500 rounded-full border-2 border-[#1c1c1c] text-white text-xs font-bold grid place-items-center">
            +5
          </div>
        </div>

        <button className="mt-8 mx-auto flex items-center gap-2 px-4 py-2 bg-[#242424] rounded-full text-sm text-blue-500 font-medium hover:bg-[#2a2a2a] transition-colors">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          View Opportunities
        </button>
      </motion.div>

      {/* Strategy PDF Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="absolute right-[80px] top-[300px] w-[300px] h-[80px] bg-[#1c1c1c]/90 backdrop-blur-[10px] rounded-xl shadow-lg z-20 p-4 border border-[#242424]"
      >
        <div className="flex items-center gap-4">
          <div className="w-[30px] h-[30px] bg-blue-500/20 rounded-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#3b82f6">
              <path d="M2,1 H10 L14,5 V14 C14,14.6 13.6,15 13,15 H3 C2.4,15 2,14.6 2,14 V1Z" />
              <path d="M10,1 V5 H14" />
            </svg>
          </div>
          <div>
            <p className="text-white font-medium">Keyword Strategy Report</p>
            <p className="text-blue-500 text-xs">UPDATED: REAL-TIME</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};