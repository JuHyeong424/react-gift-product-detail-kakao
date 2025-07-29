import { DescriptionWrapper } from '@/components/ProductDetail/ProductMain/Detail/ProductDescription.style.ts';

interface ProductDescriptionProps {
  data: {
    description: string;
  };
}

export default function ProductDescription({ data }: ProductDescriptionProps) {
  return <DescriptionWrapper dangerouslySetInnerHTML={{ __html: data.description }} />;
}
