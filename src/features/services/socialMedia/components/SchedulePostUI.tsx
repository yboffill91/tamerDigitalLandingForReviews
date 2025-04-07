import React from 'react';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import { avatars } from '@/features/services/socialMedia/utils';
import { ShimmerButton, ShineBorder } from '@/components/ui';
import { ShineColors } from '@/lib';

export const SchedulePostUI = () => {
  // Array de avatares con colores diferentes

  return (
    <div className='flex items-center justify-center relative'>
      <div className='relative w-[280px]'>
        {/* Indicador de tiempo en la parte superior */}
        <div className='absolute -top-5 left-1/2 transform -translate-x-1/2 z-10'>
          <div className='bg-card/50 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center justify-center space-x-2 shadow-lg border border-ring/50'>
            <Clock size={14} className='text-primary' />
            <span className='text-foreground text-xs font-medium whitespace-nowrap'>
              Thurs 29 11:45 AM
            </span>
          </div>
        </div>

        {/* Tarjeta principal */}
        <div className=' backdrop-blur-md  rounded-xl shadow-2xl pt-6 pb-12 px-4 w-full bg-card border border-ring/10'>
          <ShineBorder shineColor={ShineColors} />
          {/* Fila de avatares */}
          <div className='flex justify-between mb-6'>
            {avatars.map((avatar, index) => (
              <div key={index} className='relative'>
                <div
                  className='w-8 h-8 rounded-full flex items-center justify-center ring-2 ring-card/50'
                  style={{ backgroundColor: avatar.color }}
                >
                  <Image
                    src={avatar.image}
                    alt='Profile picture'
                    width={128}
                    height={128}
                    className={`size-8 rounded-full object-cover object-center ${
                      avatar.active && 'ring-2 ring-secondary'
                    }`}
                  />
                </div>
                {avatar.active && (
                  <div className='absolute bottom-0 right-0 size-2 rounded-full bg-ring ring-secondary ring-1'></div>
                )}
              </div>
            ))}
          </div>

          {/* Líneas de texto simuladas (reducidas a 2) */}
          <div className='space-y-3'>
            <div className='animate-pulse h-2 bg-foreground/50 rounded-full w-full'></div>
            <div className='animate-pulse h-2 bg-foreground/50 rounded-full w-3/4'></div>
          </div>
        </div>

        {/* Botón de programar */}
        <div className='absolute -bottom-4 right-4'>
          <ShimmerButton variant='solid' className='text-xs font-medium'>
            Schedule post
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};
