import { useEffect, useState } from 'react';
import ReceiverCurrentState from '@/components/Order/Receiver/ReceiverCurrentState.tsx';
import ReceiverModal from '@/components/Order/Receiver/ReceiverModal.tsx';
import {
  addHandler,
  cancleHandler,
  openModalHandler,
  submitHandler,
} from '@/hooks/order/receiver/useReceiverHandlers.ts';
import useReceiverModalControl from '@/hooks/order/receiver/useReceiverModalControl.ts';
import useReceiverValidation from '@/hooks/order/receiver/useReceiverValidation.ts';
import type useReceiverForm from '@/hooks/order/receiver/useReceiverForm.ts';

type ReceiverFormType = ReturnType<typeof useReceiverForm>;

interface ReceiverProps {
  setCount: (count: number) => void;
  receiverForm: ReceiverFormType;
}

export default function Receiver({ setCount, receiverForm }: ReceiverProps) {
  const { modal, setModal } = useReceiverModalControl();

  const {
    register,
    reset,
    getValues,
    handleSubmit,
    errors,
    fields,
    append,
    remove,
    submittedRef,
    beforeRef,
    values,
  } = receiverForm;

  const [submitted, setSubmitted] = useState(submittedRef.current);

  // 번호 타당성 검사
  const { isSamePhoneNumber } = useReceiverValidation(values);

  // 각종 Handle
  const handleAdd = addHandler(fields.length, append);
  const handleCancle = cancleHandler(beforeRef, reset, setModal);
  const handleOpenModal = openModalHandler(beforeRef, getValues, setModal);
  const onSubmit = submitHandler(submittedRef, setModal, setSubmitted);

  // count 세기
  useEffect(() => {
    if (submitted) {
      const total = submitted.reduce((acc, cur) => acc + Number(cur.count), 0);
      setCount(total);
    }
  }, [setCount, submitted]);

  return (
    <>
      <ReceiverCurrentState openModal={handleOpenModal} submittedRef={submitted} />

      {modal && (
        <ReceiverModal
          setModal={setModal}
          fields={fields}
          register={register}
          handleAdd={handleAdd}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          remove={remove}
          errors={errors}
          handleCancle={handleCancle}
          isSamePhoneNumber={isSamePhoneNumber}
        />
      )}
    </>
  );
}
