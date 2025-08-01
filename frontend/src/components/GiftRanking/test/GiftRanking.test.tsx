import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import GiftRanking from '@/components/GiftRanking/GiftRanking';
import { RANKING_URL } from '@/api/api';
import { ErrorBoundary } from '@/components/Common/ErrorBoundary.tsx';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import mockRankingData from '@/components/GiftRanking/test/mockRankingData';

import { rest, RestRequest, ResponseComposition, RestContext } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(RANKING_URL, (req: RestRequest, res: ResponseComposition<never>, ctx: RestContext) => {
    return res(ctx.status(200), ctx.json(mockRankingData));
  }),
);

const queryClient = new QueryClient();

const renderWithProviders = () =>
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary fallback={<div>에러 발생</div>}>
            <GiftRanking />
          </ErrorBoundary>
        </ThemeProvider>
      </QueryClientProvider>
    </MemoryRouter>,
  );

describe('GiftRanking Component', () => {
  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
    queryClient.clear();
  });
  afterAll(() => server.close());

  it('Verifies that the first item is rendered correctly', async () => {
    renderWithProviders();

    const firstItemName = mockRankingData[0].name;
    const item = await screen.findByText(new RegExp(firstItemName, 'i'));
    expect(item).toBeInTheDocument();
  });

  it('changes button text after clicking "Load More" button', async () => {
    renderWithProviders();

    const button = await screen.findByRole('button', { name: /더보기/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const changedText = await screen.findByText(/접기/i);
    expect(changedText).toBeInTheDocument();
  });
});
