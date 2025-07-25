import { useQuery, type QueryKey } from '@tanstack/react-query';
import axios, { isAxiosError } from 'axios';
import { DEFAULT_ERROR_MESSAGE } from '@/constants/errorMessage.ts';

interface FetchResponse<T> {
  data: T;
  statusCode: number;
}

export default function useFetchData<T>(key: QueryKey, url: string, params?: Record<string, any>) {
  return useQuery<FetchResponse<T>, Error, FetchResponse<T>, QueryKey>({
    queryKey: [key, params],
    queryFn: async () => {
      try {
        const res = await axios.get<{ data: T }>(url, { params });
        return {
          data: res.data.data,
          statusCode: res.status,
        };
      } catch (e) {
        if (isAxiosError(e)) {
          const errorMessage = e.response?.data?.message || DEFAULT_ERROR_MESSAGE;
          throw new Error(errorMessage);
        }
        throw new Error(DEFAULT_ERROR_MESSAGE);
      }
    },
    staleTime: 1000 * 60 * 5,
    throwOnError: true,
  });
}
