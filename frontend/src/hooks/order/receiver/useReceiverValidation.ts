import type { Receiver } from '@/types/order.ts';

export default function useReceiverValidation(values: Receiver[] | undefined) {
  const isSamePhoneNumber = (value: string, index: number): boolean => {
    const allPhones = values?.map((item: Receiver) => item.phone);
    return (
      allPhones?.filter((phone: string, i: number) => phone === value && i !== index).length === 0
    );
  };

  return {
    isSamePhoneNumber,
  };
}
