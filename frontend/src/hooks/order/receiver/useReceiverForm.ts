import { useFieldArray, useForm } from 'react-hook-form';
import { useRef } from 'react';
import type { Receiver } from '@/types/order.ts';

interface FormData {
  receiverInfo: Receiver[];
}

export default function useReceiverForm() {
  const submittedRef = useRef<Receiver[] | null>(null);
  const beforeRef = useRef<FormData | null>(null);

  const {
    register,
    control,
    reset,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      receiverInfo: [{ name: '', phone: '', count: 1 }],
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray<FormData, 'receiverInfo'>({
    control,
    name: 'receiverInfo',
  });

  const values = watch('receiverInfo');

  return {
    register,
    reset,
    getValues,
    handleSubmit,
    errors,
    fields,
    append,
    remove,
    values,
    submittedRef,
    beforeRef,
  };
}
