import React from 'react';
import { screen, waitFor, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GiftRanking from '../GiftRanking';
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';

const BASE_URL = 'http://localhost:3000/api';

const mockRanking = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `상품 ${i + 1}`,
  imageURL: `https://mock.com/image${i + 1}.jpg`,
  price: {
    basicPrice: 1000 * (i + 1),
    sellingPrice: 1000 * (i + 1),
    discountRate: i,
  },
  brandInfo: {
    id: i + 1,
    name: `브랜드 ${i + 1}`,
    imageURL: `https://mock.com/brandInfoimage${i + 1}.jpg`,
  },
}));

const server = setupServer(
  http.get(`${BASE_URL}/products/ranking`, ({ request }) => {
    const url = new URL(request.url);
    const targetType = url.searchParams.get('targetType');
    const rankType = url.searchParams.get('rankType');
    if (targetType === 'ALL' && rankType === 'MANY_WISH') {
      return HttpResponse.json({ data: mockRanking });
    }
    return HttpResponse.json({ data: [] });
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false, staleTime: Infinity },
    },
  });
}

function renderWithProviders(ui: React.ReactElement) {
  const queryClient = createTestQueryClient();

  return render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{ui}</ThemeProvider>
      </QueryClientProvider>
    </MemoryRouter>,
  );
}

describe('<GiftRanking /> tests (msw http.get + vitest)', () => {
  test('should render ranking items, cards, and more button', async () => {
    renderWithProviders(<GiftRanking />);

    await screen.findByRole('img', { name: /상품 1/ });

    expect(screen.getByText('브랜드 1')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /더보기/ })).toBeInTheDocument();
  });

  test('should toggle card count when clicking more/less button', async () => {
    renderWithProviders(<GiftRanking />);

    await screen.findByRole('img', { name: /상품 1/ });

    expect(screen.getAllByRole('img', { name: /상품/ }).length).toBe(6);

    await userEvent.click(screen.getByRole('button', { name: /더보기/ }));

    await waitFor(() => {
      const imgs = screen.getAllByRole('img', { name: /상품/ });
      expect(imgs.length).toBeGreaterThanOrEqual(7);
      expect(imgs.length).toBeLessThanOrEqual(21);
    });

    await userEvent.click(screen.getByRole('button', { name: /접기/ }));
    expect(screen.getAllByRole('img', { name: /상품/ }).length).toBe(6);
  });
});
