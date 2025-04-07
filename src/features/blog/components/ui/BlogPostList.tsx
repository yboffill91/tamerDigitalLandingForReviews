'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Post } from '@/lib';
import { BlogCard, Pagination } from '@/features/blog/components/ui';

interface BlogPostsListProps {
  initialPosts: Post[];
}

const POSTS_PER_PAGE = 10;

export function BlogPostsList({ initialPosts }: BlogPostsListProps) {
  const searchParams = useSearchParams();
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const category = searchParams.get('category');
    const name = searchParams.get('name');
    const page = Number.parseInt(searchParams.get('page') || '1', 10);

    const newFilteredPosts = initialPosts.filter((post) => {
      const categoryMatch =
        !category ||
        post._embedded['wp:term'][0].some((term) => term.slug === category);
      const nameMatch =
        !name || post.title.rendered.toLowerCase().includes(name.toLowerCase());
      return categoryMatch && nameMatch;
    });

    setFilteredPosts(newFilteredPosts);
    setCurrentPage(page);
  }, [searchParams, initialPosts]);

  const pageCount = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <>
      <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-8 mb-12 container mx-auto px-4'>
        {displayedPosts.map((post, index) => (
          <BlogCard
            key={post.id}
            author={post._embedded.author[0].name}
            avatar={post._embedded.author[0].avatar_urls['96']}
            date={post.date}
            title={post.title.rendered}
            slug={post.slug}
            categories={post._embedded['wp:term'][0]}
            featuredMedia={post._embedded['wp:featuredmedia'][0].source_url}
            index={index}
            excerpt={post.excerpt.rendered}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={pageCount}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
