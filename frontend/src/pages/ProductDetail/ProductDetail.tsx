import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header/Header.tsx';
import { ErrorBoundary } from '@/components/Common/ErrorBoundary.tsx';
import { PATH } from '@/constants/path.ts';
import { ERROR404 } from '@/constants/errorCode.ts';
import { Suspense } from 'react';
import ProductHead from '@/components/ProductDetail/ProductHead.tsx';
import Loading from '@/components/Common/Loading/Loading.tsx';

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  return (
    <>
      <Header />
      <ErrorBoundary
        onError={(error) => {
          if (error.message.includes(ERROR404)) {
            navigate(`${PATH.HOME}`);
          }
        }}
      >
        <Suspense fallback={<Loading />}>
          <ProductHead productId={productId} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
