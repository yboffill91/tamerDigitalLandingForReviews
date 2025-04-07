import { Star } from 'lucide-react';

export const StarRating = ({ rating = 5, variant = 'yellow' }) => (
  <div className='flex'>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={20}
        className={
          i < rating
            ? `${
                variant === 'green'
                  ? 'text-green-500 fill-green-500'
                  : 'text-yellow-400 fill-yellow-400'
              }`
            : 'text-zinc-700'
        }
      />
    ))}
  </div>
);
