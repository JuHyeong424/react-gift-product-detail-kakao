import {
  InfoName,
  InfoValue,
  InfoWrapper,
  ProductInfoWrapper,
} from '@/components/ProductDetail/ProductMain/Detail/ProductInfo.style.ts';

interface Announcement {
  name: string;
  value: string;
  displayOrder: number;
}

interface ProductDetailInfoProps {
  announcements: Announcement[];
}

export default function ProductInfo({ announcements }: ProductDetailInfoProps) {
  const sorted = [...announcements].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <ProductInfoWrapper>
      {sorted.map((item) => (
        <InfoWrapper>
          <InfoName>{item.name}</InfoName>
          <InfoValue>{item.value}</InfoValue>
        </InfoWrapper>
      ))}
    </ProductInfoWrapper>
  );
}
