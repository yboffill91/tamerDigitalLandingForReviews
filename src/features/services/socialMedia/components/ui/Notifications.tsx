import { cn } from '@/lib';
import { NOTIFICATION } from '@/features/services/socialMedia/utils';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  TwitterIcon,
} from '@/features/services/socialMedia/components/icons';

export const NotificationComponent = ({
  name,
  description,
  icon,
  color,
  time,
}: NOTIFICATION) => {
  return (
    <figure
      className={cn(
        'relative mx-auto w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl p-2',
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        'bg-card [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <div
          className='flex size-8 items-center justify-center rounded-xl'
          style={{
            backgroundColor: color,
          }}
        >
          {icon === 'instagram' ? (
            <InstagramIcon size={20} color='white' />
          ) : icon === 'facebook' ? (
            <FacebookIcon size={20} />
          ) : icon === 'twitter' ? (
            <TwitterIcon size={20} />
          ) : icon === 'linkedin' ? (
            <LinkedInIcon size={20} />
          ) : icon === 'tiktok' ? (
            <TikTokIcon size={20} />
          ) : (
            <span className='text-base'>{icon}</span>
          )}
        </div>
        <div className='flex flex-col overflow-hidden'>
          <figcaption className='flex flex-row items-center whitespace-pre text-sm font-medium text-foreground'>
            <span>{name}</span>
            <span className='mx-1'>·</span>
            <span className='text-xs text-foreground/50'>{time}</span>
          </figcaption>
          <p className='text-xs font-normal truncate text-foreground/60'>
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
