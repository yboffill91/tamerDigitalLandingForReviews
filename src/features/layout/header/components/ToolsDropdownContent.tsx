import Image from 'next/image';
import { blogPosts, tools, videos } from '@/features/layout/header/utils';
import { ArrowUpRight, Clock, Play, Trophy } from 'lucide-react';
import Link from 'next/link';
import { ShimmerButton } from '@/components/ui';

export const ToolsDropdownContent = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[240px_1fr_240px] divide-y md:divide-y-0 lg:divide-x divide-card'>
      {/* Left Section - Videos & Success Stories */}
      <div className='pr-6 hidden lg:block'>
        <h3 className='text-sm font-medium text-primary mb-4'>
          Tutorial Videos
        </h3>
        <div className='space-y-3'>
          {videos.map((video, idx) => (
            <a
              key={idx}
              href={video.href}
              className='group block relative rounded-lg overflow-hidden'
            >
              <div className='relative aspect-video'>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
                  width={300}
                  height={300}
                />
                <div className='absolute inset-0 bg-[background/80 group-hover:bg-[background/60 transition-colors' />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <Play className='w-4 h-4 text-background' />
                  </div>
                </div>
                <div className='absolute bottom-2 right-2 px-2 py-1 rounded bg-[background text-xs text-foreground flex items-center gap-1'>
                  <Clock className='w-3 h-3' />
                  {video.duration}
                </div>
              </div>
              <div className='mt-2'>
                <h4 className='text-sm font-medium text-foreground group-hover:text-primary transition-colors'>
                  {video.title}
                </h4>
              </div>
            </a>
          ))}
        </div>

        {/* Success Stories Button */}
        {/* <div className='mt-6 pt-6 border-t border-card'>
          <a
            href='/success-stories'
            className='flex items-center gap-2 p-3 rounded-lg bg-foreground hover:bg-foreground/90 transition-colors'
          >
            <Trophy className='w-4 h-4 text-background' />
            <span className='font-medium text-background'>Success Stories</span>
          </a>
        </div> */}
      <Link href="/success-stories" >
       <ShimmerButton variant='solid' size='big'>
        <Trophy className='w-4 h-4 text-background' />
        <span className='font-medium text-background'>Success Stories</span>
        </ShimmerButton>
      </Link>
      </div>

      {/* Middle Section - Tools */}
      <div className='px-8 py-6 lg:py-0'>
        <h3 className='text-sm font-medium text-primary mb-6 hidden md:block'>
          Tools
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
          {tools.map(({name, href, icon: IconElement, status, description}) => (
            // <Link
            //   key={tool.href + tool.name}
            //   href={tool.href}
            //   className='flex items-center md:items-start gap-2 p-3 rounded-lg hover:bg-card transition-colors group'
            // >
            //   <div className='w-8 h-8 rounded-md bg-card flex items-center justify-center group-hover:bg-primary transition-colors shrink-0'>
            //     <tool.icon className='w-4 h-4 text-primary group-hover:text-background transition-colors group-hover:text-black' />
            //   </div>
            //   <div>
            //     <div className='font-medium text-foreground group-hover:text-primary transition-colors'>
            //       {tool.name}
            //     </div>
            //     <div className='text-sm text-foreground/80 group-hover:text-foreground/70 transition-colors hidden md:block'>
            //       {tool.description}
            //     </div>
            //   </div>
            <Link
            key={name + href}
            href={href}
            className={`${
              status
                ? ' group hover:bg-ring/10 transition-colors '
                : ' relative '
            } flex flex-col gap-3 p-3 rounded-lg `}
          >
            <div className='flex items-center justify-between flex-1 gap-2' >
            <div className='w-8 h-8 rounded-md bg-card flex items-center justify-center group-hover:bg-primary transition-colors shrink-0'>
              <IconElement
                className={`${
                  status ? ' text-primary group-hover:text-primary-foreground transition-colors duration-300 ease-in-out' : 'text-foreground/10'
                } w-4 h-4`}
              />
            </div>
            <div className='flex items-center justify-between flex-1'>
              <span
                className={`${
                  status
                    ? 'font-medium text-foreground group-hover:text-primary transition-colors'
                    : 'text-foreground/10 pointer-events-auto'
                }`}
              >
                {name}
              </span>

              <ArrowUpRight className='w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500 ease-in-out' />
              {!status && (
                <span className='absolute top-1 right-1 bg-primary text-foreground px-[2px] text-xs rounded-md'>
                  Soon
                </span>
                
              )}
            </div>
            </div>
            
            <p className={`${status ? 'text-foreground' : 'text-foreground/10'}`}>{description}</p>
          </Link>

          ))}
        </div>
      </div>

      {/* Right Section - Blog Posts */}
      <div className='pl-6 hidden lg:block'>
        <h3 className='text-sm font-medium text-primary mb-6'>
          Latest Articles
        </h3>
        <div className='space-y-4'>
          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.href}
              className='group block p-3 rounded-lg hover:bg-card transition-colors'
            >
              <div className='flex justify-between items-start'>
                <div className='flex-1'>
                  <h4 className='text-sm font-medium text-foreground group-hover:text-primary transition-colors mb-1'>
                    {post.title}
                  </h4>
                  <p className='text-xs text-foreground/80 group-hover:text-foreground/70 transition-colors'>
                    {post.description}
                  </p>
                </div>
                <ArrowUpRight className='w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity' />
              </div>
              <div className='mt-2 text-xs text-foreground/60 flex items-center gap-2'>
                <Clock className='w-3 h-3' />
                {post.readTime}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
