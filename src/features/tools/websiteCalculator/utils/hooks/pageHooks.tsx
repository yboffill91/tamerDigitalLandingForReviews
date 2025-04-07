import { useCalculatorStore, PageComplexityType } from '@/store';

export function usePagesStore() {
  const { pages, setPages } = useCalculatorStore();

  const setPageComplexity = (
    complexity: Record<string, PageComplexityType>
  ) => {
    setPages({ complexity });
  };

  const setPageCount = (count: Record<string, number>) => {
    setPages({ count });
  };

  const setTotalPages = (totalPages: number) => {
    setPages({ totalPages });
  };

  const setPagePrice = (price: number) => {
    setPages({ price });
  };

  const setIsEcommerce = (isEcommerce: boolean) => {
    setPages({ isEcommerce });
  };

  return {
    pages,
    setPageComplexity,
    setPageCount,
    setTotalPages,
    setPagePrice,
    setIsEcommerce,
  };
}
