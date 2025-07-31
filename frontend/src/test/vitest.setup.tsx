// src/test/vitest.setup.tsx
import '@testing-library/jest-dom';
import { expect } from 'vitest';
import { render } from '@testing-library/react';
import type { RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import type { ReactElement, ReactNode } from 'react';

export { expect };

// 커스텀 render: Emotion 테마를 감싸서 제공
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult => {
  return render(ui, {
    wrapper: ({ children }: { children?: ReactNode }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
    ...options,
  });
};

declare global {
  var render: typeof customRender;
}

globalThis.render = customRender;
