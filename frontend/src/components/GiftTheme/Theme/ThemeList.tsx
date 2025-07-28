import ThemeItem from '@/components/GiftTheme/Theme/ThemeItem.tsx';
import { ThemeListContainer } from '@/components/GiftTheme/Theme/GiftTheme.styles.ts';
import useFetchThemes from '@/hooks/fetch/useFetchThemes.ts';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path.ts';

interface Theme {
  themeId: number;
  name: string;
  image: string;
}

export default function ThemeList() {
  const navigate = useNavigate();
  const { themes } = useFetchThemes();

  const onThemesClickHandle = (item: Theme) => {
    navigate(`${PATH.THEMES}/${item.themeId}`);
  };

  return (
    <ThemeListContainer>
      {themes?.map((item) => (
        <ThemeItem
          key={item.themeId}
          image={item.image}
          name={item.name}
          onClick={() => onThemesClickHandle(item)}
        />
      ))}
    </ThemeListContainer>
  );
}
