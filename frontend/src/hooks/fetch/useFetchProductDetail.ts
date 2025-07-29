import useFetchData from '@/hooks/fetch/useFetchData.ts';
import { PRODUCT_DETAIL_URL } from '@/api/api.ts';

export default function useFetchProductDetail(productId: number) {
  const { data } = useFetchData(['productData', productId], PRODUCT_DETAIL_URL(productId));

  return {
    data: data?.data,
    announcements: data?.data.announcements,
  };
}
