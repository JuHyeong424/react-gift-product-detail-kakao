import useFetchData from '@/hooks/fetch/useFetchData.ts';
import { THEMES_INFO } from '@/api/api.ts';
import type { ThemeInfo } from '@/types/themes/types.ts';

interface UseFetchThemesInfoResult {
  themeInfo?: ThemeInfo;
  statusCode?: number;
}

export default function useFetchThemesInfo(themesId: number): UseFetchThemesInfoResult {
  const url = THEMES_INFO(themesId);
  const { data } = useFetchData<ThemeInfo>(['themesInfo', themesId], url);

  return {
    themeInfo: data?.data,
    statusCode: data?.statusCode,
  };
}
