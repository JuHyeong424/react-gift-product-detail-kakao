import { PRODUCT_SUMMARY_URL } from '@/api/api.ts';
import useFetchData from '@/hooks/fetch/useFetchData.ts';

interface Item {
  id: string | number;
  name: string;
  brandName: string;
  price: string | number;
  imageURL: string;
}

export default function useFetchProductData(id: number) {
  const { data, isLoading, error } = useFetchData<Item>(['product', id], PRODUCT_SUMMARY_URL(id));

  return {
    product: data?.data,
    loading: isLoading,
    error,
  };
}
