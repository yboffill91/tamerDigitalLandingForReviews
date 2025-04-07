'use client';

import React, { useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Term } from '@/lib';

import { Input } from '@/components/ui';
import debounce from 'lodash/debounce';

export function BlogFilter({ categories }: { categories: Term[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [name, setName] = useState(searchParams.get('name') || '');

  const updateFilters = useCallback(
    debounce((newName: string, category: string) => {
      const params = new URLSearchParams(searchParams);
      if (newName) {
        params.set('name', newName);
      } else {
        params.delete('name');
      }
      if (category) {
        params.set('category', category);
      } else {
        params.delete('category');
      }
      params.set('page', '1'); // Reset to first page when filtering
      router.push(`?${params.toString()}`, { scroll: false });
    }, 300),
    [router, searchParams]
  );

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    updateFilters(newName, searchParams.get('category') || '');
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    updateFilters(name, category);
  };

  return (
    <div className='flex p-4 container mx-auto bg-card border-ring/20 items-center justify-between rounded-lg mb-2'>
      <div className='w-2/3'>
        <Input
          type='text'
          placeholder='Search by name'
          value={name}
          onChange={handleNameChange}
          className='p-2 border rounded'
        />
      </div>

      <select
        onChange={handleCategoryChange}
        defaultValue={searchParams.get('category') || ''}
        className='p-2 rounded bg-background-primary text-foreground w-1/3  h-10'
      >
        <option value=''>Search By</option>
        {categories.map((category) => (
          <option key={category.id} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
