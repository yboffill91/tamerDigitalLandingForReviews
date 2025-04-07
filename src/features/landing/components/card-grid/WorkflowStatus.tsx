'use client';

import { Check, Clock } from 'lucide-react';

export const WorkflowStatus = () => {
  return (
    <div
      className='mt-3 p-4 rounded-lg w-full bg-card border-ring/10 border'
      style={{
        backdropFilter: 'blur(12px)',
        borderRadius: '12px',
        borderBottom: 'none',
        boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.03)',
      }}
    >
      <div className='flex justify-between items-center mb-4'>
        <span className='text-foreground/60 text-sm font-light'>
          Project Status
        </span>
        <span className='text-white text-xs px-2 py-1 rounded-lg bg-[#1F1F1F]'>
          Active
        </span>
      </div>

      <div className='space-y-3'>
        {[
          { label: 'Design Review', status: 'completed', icon: Check },
          { label: 'Framer Development', status: 'pending', icon: Clock },
          { label: 'Client Review', status: 'pending', icon: Clock },
        ].map((item, index) => (
          <div key={index} className='relative'>
            {/* Línea vertical conectora */}
            {index < 2 && (
              <div
                className='absolute left-3 top-5 w-0.5 h-5 bg-gradient-to-b from-gray-700 to-transparent'
                style={{ transform: 'translateX(-50%)' }}
              />
            )}

            <div className='flex items-center gap-4'>
              <div
                className={`w-5 h-5 rounded-lg flex items-center justify-center ${
                  item.status === 'completed'
                    ? 'bg-gradient-to-r from-primary to-secondary'
                    : 'bg-[#2C2C2C]'
                }`}
              >
                <item.icon
                  size={14}
                  className={
                    item.status === 'completed'
                      ? 'text-foreground'
                      : 'text-white/50'
                  }
                />
              </div>
              <span
                className={`text-sm ${
                  item.status === 'completed'
                    ? 'text-foreground'
                    : 'text-foreground/60'
                }`}
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
