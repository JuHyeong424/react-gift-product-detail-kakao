import useFetchData from '@/hooks/fetch/useFetchData.ts';
import { PRODUCT_DETAIL_URL } from '@/api/api.ts';

interface Announcement {
  name: string;
  value: string;
  displayOrder: number;
}

interface ProductDetailData {
  description: string;
  announcements: Announcement[];
}

export default function useFetchProductDetail(productId: number) {
  const { data } = useFetchData<ProductDetailData>(
    ['productData', productId],
    PRODUCT_DETAIL_URL(productId),
  );

  return {
    data: data?.data,
    announcements: data?.data.announcements,
  };
}
