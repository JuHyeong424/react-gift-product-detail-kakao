import useFetchData from '@/hooks/fetch/useFetchData.ts';
import { THEMES_INFO } from '@/api/api.ts';
import type { ThemeInfo, UseFetchThemesInfoResult } from '@/types/themes/types.ts';

export default function useFetchThemesInfo(themesId: number): UseFetchThemesInfoResult {
  const url = THEMES_INFO(themesId);
  const { data, error } = useFetchData<ThemeInfo>(['themesInfo', themesId], url);

  return {
    themeInfo: data?.data,
    error,
    statusCode: data?.statusCode,
  };
}
