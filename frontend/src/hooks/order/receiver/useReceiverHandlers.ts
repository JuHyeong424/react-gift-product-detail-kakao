import type { UseFieldArrayAppend, UseFormReset } from 'react-hook-form';
import type { Receiver } from '@/types/order.ts';

type AppendFn = UseFieldArrayAppend<{ receiverInfo: Receiver[] }, 'receiverInfo'>;

export const addHandler = (fieldsLength: number, append: AppendFn) => () => {
  if (fieldsLength < 10) {
    append({ name: '', phone: '', count: 1 });
  }
};

export const cancleHandler =
  (
    beforeRef: React.MutableRefObject<{ receiverInfo: Receiver[] } | null>,
    reset: UseFormReset<{ receiverInfo: Receiver[] }>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
  ) =>
  () => {
    if (beforeRef.current) {
      reset(beforeRef.current);
    }
    setModal(false);
  };

export const openModalHandler =
  (
    beforeRef: React.MutableRefObject<{ receiverInfo: Receiver[] } | null>,
    getValues: () => { receiverInfo: Receiver[] },
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
  ) =>
  () => {
    beforeRef.current = getValues();
    setModal(true);
  };

export const submitHandler =
  (
    submittedRef: React.MutableRefObject<Receiver[] | null>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    setSubmitted: React.Dispatch<React.SetStateAction<Receiver[] | null>>,
  ) =>
  (data: { receiverInfo: Receiver[] }) => {
    console.log(data);
    submittedRef.current = data.receiverInfo;
    setSubmitted(data.receiverInfo);
    setModal(false);
  };
