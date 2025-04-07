import Image from 'next/image';

interface TestimonialCardProps {
  text: string;
  avatarUrl: string;
  className?: string;
}

export function TestimonialCard({
  text,
  avatarUrl,
  className = '',
}: TestimonialCardProps) {
  return (
    <div
      className={`rounded-2xl bg-card/50 backdrop-blur-md border border-ring/10 shadow-lg shadow-foreground/10 p-6 w-[500px] relative ${className}`}
    >
      <p className='text-foreground/90 text-sm'>{text}</p>
      <Image
        src={avatarUrl}
        alt='Avatar'
        className='w-12 h-12 rounded-full absolute -bottom-6 -left-6 border-4 border-ring/10 shadow-lg grayscale'
        width={1200}
        height={1200}
      />
    </div>
  );
}
