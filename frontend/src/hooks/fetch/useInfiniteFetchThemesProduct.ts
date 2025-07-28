import { useInfiniteQuery, type QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';
import type { Product } from '@/types/themes/types.ts';

interface ThemesProduct {
  list: Product[];
  cursor: number;
  hasMoreList: boolean;
}

// queryFn: readonly 키 적용
async function fetchThemeProducts({
  pageParam = 0,
  queryKey,
}: QueryFunctionContext<readonly [string, string], number>) {
  const [, url] = queryKey;
  const response = await axios.get<{ data: ThemesProduct }>(`${url}?cursor=${pageParam}&limit=10`);
  return response.data.data;
}

export default function useInfiniteFetchThemesProduct(url: string) {
  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ['theme-products', url] as const,
    queryFn: fetchThemeProducts,
    getNextPageParam: (lastPage) => (lastPage.hasMoreList ? lastPage.cursor : undefined),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    initialPageParam: 0,
  });

  const list = data?.pages.flatMap((page) => page.list) ?? [];

  return {
    list,
    loading: status === 'pending', // 이제 정상 작동
    error: status === 'error',
    hasMore: hasNextPage ?? false,
    fetchNextPage: async () => {
      await fetchNextPage();
    },
    statusCode: error && axios.isAxiosError(error) ? (error.response?.status ?? null) : null,
  };
}
