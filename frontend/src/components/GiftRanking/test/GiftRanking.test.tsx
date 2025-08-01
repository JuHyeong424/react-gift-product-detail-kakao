import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import GiftRanking from '../GiftRanking';
import { RANKING_URL } from '@/api/api';
import { ErrorBoundary } from '@/components/Common/ErrorBoundary.tsx';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import mockRankingData from './mockRankingData';

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

describe('GiftRanking Component (fetch mocked with mockRankingData)', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    queryClient.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders ranking data correctly', async () => {
    vi.stubGlobal('fetch', (input: RequestInfo) => {
      let url: string;
      if (typeof input === 'string') {
        url = input;
      } else if (input instanceof Request) {
        url = input.url;
      } else {
        url = '';
      }

      if (url.includes(RANKING_URL)) {
        return Promise.resolve(
          new Response(JSON.stringify(mockRankingData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          }),
        );
      }
      return Promise.reject(new Error(`unexpected fetch to ${url}`));
    });

    renderWithProviders();

    const firstItemName = mockRankingData[0].name;
    const item = await screen.findByText(new RegExp(firstItemName, 'i'));
    expect(item).toBeInTheDocument();
  });

  it('changes button text after clicking "Load More" button', async () => {
    vi.stubGlobal('fetch', (input: RequestInfo) => {
      let url: string;
      if (typeof input === 'string') {
        url = input;
      } else if (input instanceof Request) {
        url = input.url;
      } else {
        url = '';
      }

      if (url.includes(RANKING_URL)) {
        return Promise.resolve(
          new Response(JSON.stringify(mockRankingData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          }),
        );
      }
      return Promise.reject(new Error(`unexpected fetch to ${url}`));
    });

    renderWithProviders();

    const button = await screen.findByRole('button', { name: /더보기/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const changedText = await screen.findByText(/접기/i);
    expect(changedText).toBeInTheDocument();
  });
});
