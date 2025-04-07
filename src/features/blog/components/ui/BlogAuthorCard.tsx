'use client';
import { Author } from '@/lib';
import { GridPattern } from '@/components/ui';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLink } from 'react-icons/fa';

interface AuthorProps {
  authors: Author[];
}

export const BlogAuthorCard = ({ authors }: AuthorProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='py-20'
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mb-8'
          ></motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='mb-4'
          >
            Meet Our
            <span className='bg-gradient-to-r from-primary to-ring bg-clip-text text-transparent'>
              {' '}
              Expert Authors
            </span>
          </motion.h2>
        </div>

        <div className='flex flex-wrap container mx-auto items-center justify-center'>
          {authors.map(
            (author, index) =>
              author.name !== 'admin' && (
                <motion.div
                  key={author.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='relative group overflow-hidden rounded-2xl bg-card border border-ring/30 p-8 hover:border-ring transition-all duration-300'
                >
                  <div className='absolute inset-0'>
                    <div className='absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-5' />
                    <div
                      className='absolute inset-0 bg-gradient-to-l from-primary/10 via-primary/5 to-transparent'
                      style={{
                        maskImage:
                          'linear-gradient(to left, black, transparent)',
                        WebkitMaskImage:
                          'linear-gradient(to left, black, transparent)',
                      }}
                    />
                    <div className='pointer-events-none absolute right-0 top-0 h-full w-1/2'>
                      <div className='absolute inset-0'>
                        <GridPattern
                          width={16}
                          height={16}
                          x='-16'
                          y='8'
                          squares={[
                            [8, 2],
                            [9, 3],
                            [7, 4],
                            [8, 5],
                            [9, 6],
                          ]}
                          className='absolute inset-0 h-full w-full fill-card/50 stroke-foreground/50 mix-blend-overlay'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='relative z-10'>
                    <div className='flex items-center gap-4 mb-6'>
                      <Image
                        src={author.avatar_urls['96'] || '/placeholder.svg'}
                        alt={author.name}
                        width={60}
                        height={60}
                        className='rounded-full'
                      />
                      <div>
                        <h3 className='text-xl font-semibold text-foreground'>
                          {author.name}
                        </h3>
                        <p className='bg-gradient-to-r from-primary to-ring bg-clip-text text-transparent'>
                          {author.description}
                        </p>
                      </div>
                    </div>

                    <p className='text-foreground/90 mb-6'>
                      {author.description}
                    </p>

                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card text-foreground text-sm'>
                      <FaLink className='size-4' />
                      <p>{author.link}</p>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </div>
      </div>
    </motion.section>
  );
};
