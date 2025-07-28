import { THEMES_PRODUCTS } from '@/api/api.ts';
import useInfiniteFetchThemesProduct from '@/hooks/fetch/useInfiniteFetchThemesProduct.ts';
import type { Product } from '@/types/themes/types.ts';

interface UseFetchThemesProductResult {
  list: Product[];
  loading: boolean;
  error: boolean;
  hasMore: boolean;
  fetchNextPage: () => Promise<void>;
  statusCode: number | null;
}

export default function useFetchThemesProduct(themesId: number): UseFetchThemesProductResult {
  const url = THEMES_PRODUCTS(themesId);
  return useInfiniteFetchThemesProduct(url);
}
