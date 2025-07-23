import { useQuery, type QueryKey } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { DEFAULT_ERROR_MESSAGE } from '@/constants/errorMessage.ts';

interface FetchResponse<T> {
  data: T;
  statusCode: number;
}

export default function useFetchData<T>(key: QueryKey, url: string, params?: Record<string, any>) {
  return useQuery<FetchResponse<T>, Error>({
    queryKey: [key, params],
    queryFn: async () => {
      try {
        const res = await axios.get<{ data: T }>(url, { params });
        return {
          data: res.data.data,
          statusCode: res.status,
        };
      } catch (e) {
        const error = e as AxiosError<{ message: string }>;
        const errorMessage = error.response?.data?.data?.message || DEFAULT_ERROR_MESSAGE;
        throw new Error(errorMessage);
      }
    },
    staleTime: 1000 * 60 * 5,
  });
}
