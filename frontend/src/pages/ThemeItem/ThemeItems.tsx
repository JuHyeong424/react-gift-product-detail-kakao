import Header from '@/components/Header/Header.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchThemesInfo from '@/hooks/fetch/useFetchThemesInfo.ts';
import { Suspense, useEffect } from 'react';
import { PATH } from '@/constants/path.ts';
import ThemeInfo from '@/components/GiftTheme/ThemeItem/ThemeInfo.tsx';
import ThemeProducts from '@/components/GiftTheme/ThemeItem/ThemeProducts.tsx';
import Loading from '@/components/Common/Loading/Loading.tsx';

export default function ThemeItems() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const themeId = Number(id);
  const { themeInfo, error, statusCode } = useFetchThemesInfo(themeId);

  useEffect(() => {
    if (statusCode === 404) {
      navigate(`${PATH.HOME}`);
    }
  }, [statusCode, navigate]);

  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <ThemeInfo error={error} themeInfo={themeInfo} />
        <ThemeProducts themeId={themeId} />
      </Suspense>
    </>
  );
}
