import { colors } from '@/types/style/palette';
import { typography } from '@/types/style/typography';
import { spacing } from '@/types/style/spacing';
import { semantic } from '@/types/style/semantic.ts';

export const theme = {
  colors,
  typography,
  spacing,
  semantic,
} as const;

export type ThemeType = typeof theme;
