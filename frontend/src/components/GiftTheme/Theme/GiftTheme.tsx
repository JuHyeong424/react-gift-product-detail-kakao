import {
  Title,
  Section,
  ThemeListContainer,
  YellowBox,
} from '@/components/GiftTheme/Theme/GiftTheme.styles.ts';
import ThemeItem from '@/components/GiftTheme/Theme/ThemeItem.tsx';
import useFetchThemes from '@/hooks/fetch/useFetchThemes.ts';
import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '@/components/Common/Loading/Loading.tsx';
import { ErrorBoundary } from '@/components/Common/ErrorBoundary.tsx';
import { PATH } from '@/constants/path.ts';
import ThemeList from '@/components/GiftTheme/Theme/ThemeList.tsx';

export default function GiftTheme() {
  return (
    <Section>
      <Title>선물 테마</Title>

      <ErrorBoundary fallback={<div>데이터를 불러올 수 없습니다. 잠시 후 다시 시도해주세요.</div>}>
        <Suspense fallback={<Loading />}>
          <ThemeList />
        </Suspense>
      </ErrorBoundary>

      <YellowBox>
        <div>카카오테크 캠퍼스 3기 여러분</div>
        <div>프론트엔드 2단계 과제 화이팅! 🎉</div>
      </YellowBox>
    </Section>
  );
}
