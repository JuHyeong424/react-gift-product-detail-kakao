import { ItemTitle, ItemWrapper, Loading } from '@/components/Order/ItemInfo/ItemInfo.style.ts';
import Item from '@/components/Common/OrderProductImage/OrderProductImage.tsx';

interface Product {
  id: string | number;
  name: string;
  brandName: string;
  price: string | number;
  imageURL: string;
}

interface ItemInfoProps {
  product?: Product | null;
  loading: boolean;
  error?: Error | null;
}

export default function ItemInfo({ product, loading, error }: ItemInfoProps) {
  if (error) return null;

  if (!product) {
    return <div>상품 정보가 없습니다.</div>;
  }

  return (
    <ItemWrapper>
      <ItemTitle>상품 정보</ItemTitle>

      {loading ? (
        <Loading>로딩 중...</Loading>
      ) : (
        <Item
          image={product.imageURL}
          name={product.name}
          brand={product.brandName}
          price={product.price}
        />
      )}
    </ItemWrapper>
  );
}
