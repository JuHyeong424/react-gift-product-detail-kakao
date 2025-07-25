import {
  ThemeInfoHeader,
  ThemeInfoWrapper,
} from '@/components/GiftTheme/ThemeItem/ThemeInfo.styles.ts';
import { ProductsError } from '@/components/GiftTheme/ThemeItem/ThemeProducts.styles.ts';
import type { ThemeInfo } from '@/types/themes/types.ts';

interface ThemeInfoProps {
  error?: Error | null;
  themeInfo?: ThemeInfo;
}

export default function ThemeInfo({ error, themeInfo }: ThemeInfoProps) {
  return (
    <ThemeInfoWrapper>
      {error || !themeInfo ? (
        <ProductsError>테마 정보를 찾을 수 없습니다.</ProductsError>
      ) : (
        <ThemeInfoHeader background={themeInfo.backgroundColor}>
          <h5>{themeInfo.name}</h5>
          <h2>{themeInfo.title}</h2>
          <p>{themeInfo.description}</p>
        </ThemeInfoHeader>
      )}
    </ThemeInfoWrapper>
  );
}
