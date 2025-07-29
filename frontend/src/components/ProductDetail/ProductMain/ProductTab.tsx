import ProductDescription from '@/components/ProductDetail/ProductMain/Detail/ProductDescription.tsx';
import ProductReview from '@/components/ProductDetail/ProductMain/Review/ProductReview.tsx';
import ProductDetailInfo from '@/components/ProductDetail/ProductMain/Detail/ProductDetailInfo.tsx';
import Loading from '@/components/Common/Loading/Loading.tsx';
import { Suspense } from 'react';
import useFetchProductDetail from '@/hooks/fetch/useFetchProductDetail.ts';

export default function ProductTab({ selectedTab, productId }) {
  const { data, announcements } = useFetchProductDetail(productId);

  return (
    <>
      <Suspense fallback={<Loading />}>
        {selectedTab === '상품설명' && <ProductDescription data={data} />}
        {selectedTab === '선물후기' && <ProductReview />}
        {selectedTab === '상세정보' && <ProductDetailInfo announcements={announcements}/>}
      </Suspense>
    </>
  );
}
