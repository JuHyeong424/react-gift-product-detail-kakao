import { THEME_URL } from '@/api/api.ts';
import useFetchData from '@/hooks/fetch/useFetchData.ts';

interface Theme {
  themeId: number;
  name: string;
  image: string;
}

export default function useFetchThemes() {
  const { data, error } = useFetchData<Theme>(['themes'], THEME_URL);

  return {
    themes: data?.data,
    error,
  };
}
