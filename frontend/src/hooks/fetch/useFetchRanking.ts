import { RANKING_URL } from '@/api/api.ts';
import useFetchData from '@/hooks/fetch/useFetchData.ts';

export interface Product {
  id: string | number;
  name: string;
  price: {
    basicPrice: string | number;
    sellingPrice: string;
    discountRate: string | number;
  };
  imageURL: string;
  brandInfo: {
    id: string | number;
    name: string;
    imageURL: string;
  };
}

export default function useFetchRanking(targetType: string, rankType: string) {
  const { data } = useFetchData<Product>(['ranking', targetType, rankType], RANKING_URL, {
    targetType,
    rankType,
  });

  return {
    ranking: data?.data,
  };
}
