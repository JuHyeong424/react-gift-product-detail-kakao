import '@emotion/react';
import type { ThemeType } from '@/styles/theme.ts';

declare module '@emotion/react' {
  export type Theme = ThemeType;
}
