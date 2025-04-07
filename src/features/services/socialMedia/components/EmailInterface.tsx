import { ShineBorder } from '@/components/ui';
import { ShineColors } from '@/lib';
import {
  ArrowLeft,
  MoreVertical,
  Star,
  CornerUpRight,
  Reply,
} from 'lucide-react';
import Image from 'next/image';

export const EmailInterface = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='relative max-w-md w-[320px]'>
        {/* Única tarjeta vertical que pasa por debajo de la barra de emojis */}
        <div className='relative bg-card border-ring rounded-lg shadow-md p-4 w-full mx-auto overflow-visible'>
          <ShineBorder shineColor={ShineColors} />
          {/* Contenido superior de la tarjeta */}
          <div className='pb-10'>
            {/* Header con iconos */}
            <div className='flex justify-between items-center mb-4'>
              <ArrowLeft size={20} className='text-foreground/60' />
              <div className='flex space-x-4'>
                <div className='text-foreground/70'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                  >
                    <rect
                      x='4'
                      y='4'
                      width='16'
                      height='16'
                      rx='2'
                      strokeWidth='2'
                    />
                  </svg>
                </div>
                <div className='text-foreground/70'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                  >
                    <path
                      d='M3 6h18M3 12h18M3 18h18'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
                <div className='text-foreground/70'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                  >
                    <rect
                      x='2'
                      y='4'
                      width='20'
                      height='16'
                      rx='2'
                      strokeWidth='2'
                    />
                    <path d='M22 7l-10 7L2 7' strokeWidth='2' />
                  </svg>
                </div>
                <MoreVertical size={20} className='text-foreground/70' />
              </div>
            </div>

            {/* Título y estrella */}
            <div className='flex justify-between items-center mb-3'>
              <h1 className='text-lg font-medium'>
                Congrats on 1M followers! 🎉
              </h1>
              <div className='flex items-center space-x-2'>
                <span className='text-xs text-primary'>2h</span>
                <Star size={20} className='text-yellow-400 fill-yellow-400' />
              </div>
            </div>

            {/* Información del remitente */}
            <div className='flex items-center mb-4'>
              <div className='w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-3 flex items-center justify-center text-foreground text-xs overflow-hidden'>
                <Image
                  src='https://randomuser.me/api/portraits/women/8.jpg'
                  alt='Helen'
                  width={32}
                  height={32}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex-1'>
                <div className='flex justify-between'>
                  <div className='font-medium'>
                    Helen{' '}
                    <span className='text-primary text-sm'>
                      @helen_official
                    </span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      className='text-foreground/70'
                    >
                      <path
                        d='M15 4l-8 8 8 8'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <MoreVertical size={16} className='text-foreground/70' />
                  </div>
                </div>
                <div className='text-xs text-foreground/50 flex items-center'>
                  <span>to Ann, Julie, Fred...</span>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    className='ml-1'
                  >
                    <path fill='currentColor' d='M7 10l5 5 5-5H7z' />
                  </svg>
                </div>
              </div>
            </div>

            {/* Contenido del email (líneas de texto) */}
            <div className='space-y-2 mb-6'>
              <div className='h-3 animate-pulse bg-foreground/50 rounded-full w-1/3'></div>
              <div className='h-3 animate-pulse bg-foreground/50 rounded-full w-full'></div>
              <div className='h-3 animate-pulse bg-foreground/50 rounded-full w-full'></div>
              <div className='h-3 animate-pulse bg-foreground/50 rounded-full w-full'></div>
              <div className='h-3 animate-pulse bg-foreground/50 rounded-full w-2/3'></div>
            </div>

            {/* Reacciones al email */}
            <div className='flex space-x-2'>
              <div className='bg-ring/30 rounded-full px-2 py-1 flex items-center space-x-1 text-xs border  border-ring'>
                <span role='img' aria-label='regalo'>
                  💯
                </span>
                <span>24</span>
              </div>
              <div className='bg-ring/30 rounded-full px-2 py-1 flex items-center space-x-1 text-xs border  border-ring'>
                <span role='img' aria-label='corazón'>
                  ❤️
                </span>
                <span>157</span>
              </div>
              <div className='bg-ring/30 rounded-full px-2 py-1 flex items-center space-x-1 text-xs border  border-ring'>
                <span role='img' aria-label='pulgar arriba'>
                  👍
                </span>
                <span>89</span>
              </div>
              <div className='bg-ring/30 rounded-full w-6 h-6 flex items-center justify-center border  border-ring'>
                <span className='text-sm'>+</span>
              </div>
            </div>
          </div>

          {/* Contenido inferior de la tarjeta (debajo de la barra de emojis) */}
          <div
            className='mt-10 pt-4 bg-card rounded-b-lg mx--4 px-4 pb-4'
            style={{ marginLeft: '-16px', marginRight: '-16px' }}
          >
            {/* Botones de acción */}
            <div className='flex justify-between mb-4'>
              <button className='bg-ring/30 rounded-full px-4 py-2 shadow-sm border  border-ring flex items-center justify-center space-x-2 text-sm flex-1 mr-2'>
                <Reply size={16} className='text-foreground/60' />
                <span>Reply</span>
              </button>
              <button className='bg-ring/30 rounded-full px-4 py-2 shadow-sm border  border-ring flex items-center justify-center space-x-2 text-sm flex-1 mr-2'>
                <CornerUpRight size={16} className='text-foreground/60' />
                <span>Forward</span>
              </button>
              <button className='bg-ring/30 rounded-full w-10 h-10 shadow-sm border  border-ring flex items-center justify-center'>
                <span role='img' aria-label='smile' className='text-lg'>
                  😊
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Barra de emojis que pasa por encima de la card */}
        <div className='absolute top-[340px] left-1/2 transform -translate-x-1/2 w-[130%]'>
          <div className='bg-card rounded-full shadow-md py-2 px-6 flex justify-between items-center mx-auto border border-ring/30  w-full'>
            <span role='img' aria-label='corazón' className='text-2xl'>
              ❤️
            </span>
            <span role='img' aria-label='pulgar arriba' className='text-2xl'>
              👍
            </span>
            <span role='img' aria-label='fuego' className='text-2xl'>
              🔥
            </span>
            <span role='img' aria-label='sonrisa' className='text-2xl'>
              😄
            </span>
            <span role='img' aria-label='manos rezando' className='text-2xl'>
              🙏
            </span>
            <span role='img' aria-label='sonrisa grande' className='text-2xl'>
              😊
            </span>
            <div className='bg-ring/30 border-ring border rounded-full w-8 h-8 flex items-center justify-center text-center'>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
