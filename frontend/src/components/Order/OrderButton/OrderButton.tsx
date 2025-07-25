import { PriceButton } from './OrderButton.style';
import { useFormContext } from 'react-hook-form';
import useOrderSubmit from '@/hooks/order/useOrderSubmit';
import type { SelectedItemInfo } from '@/types/allTypes.ts';

interface OrderButtonProps {
  product?: SelectedItemInfo;
  loading: boolean;
  error: unknown;
  count: number;
  receiverForm: {
    submittedRef: React.MutableRefObject<{ name: string; phone: string; count: number }[] | null>;
  };
}

interface FormValues {
  textMessage: string;
  senderName: string;
  messageCardId: string | number;
}

export default function OrderButton({
  product,
  loading,
  error,
  count,
  receiverForm,
}: OrderButtonProps) {
  const { handleSubmit } = useFormContext<FormValues>();
  const onSubmit = useOrderSubmit({
    product: product!,
    count,
    receiverRef: receiverForm.submittedRef,
  });

  if (error) return null;
  if (!product) return <div>상품 정보가 없습니다.</div>;
  const price = product.price * count;

  return loading ? (
    <div>상품 정보를 불러올 수 없습니다.</div>
  ) : (
    <PriceButton onClick={handleSubmit(onSubmit)}>{price}원 주문하기</PriceButton>
  );
}
