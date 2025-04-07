import type React from 'react';

export const Fallback: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='spinner mb-4'></div>
      <p className='text-xl font-semibold  loading-text'>...Fetching Data</p>
    </div>
  );
};
