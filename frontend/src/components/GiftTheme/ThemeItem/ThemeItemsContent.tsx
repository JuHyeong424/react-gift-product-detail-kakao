import useFetchThemesInfo from '@/hooks/fetch/useFetchThemesInfo.ts';
import ThemeProducts from '@/components/GiftTheme/ThemeItem/ThemeProducts.tsx';
import ThemeInfo from '@/components/GiftTheme/ThemeItem/ThemeInfo.tsx';

export default function ThemeItemsContent({ themeId }: { themeId: number }) {
  const { themeInfo } = useFetchThemesInfo(themeId);

  return (
    <>
      <ThemeInfo themeInfo={themeInfo} />
      <ThemeProducts themeId={themeId} />
    </>
  );
}
