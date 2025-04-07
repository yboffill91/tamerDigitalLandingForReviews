'use client';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    onPageChange(page);
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className='flex justify-center space-x-2 mt-8 container mx-auto p-2 rounded bg-card'>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded ${
            currentPage === page
              ? 'bg-ring text-white'
              : 'bg-card text-foreground/60 hover:bg-secondary'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
