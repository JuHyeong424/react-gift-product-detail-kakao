import { describe, it, expect, vi } from 'vitest';
import Login from '@/pages/Login/Login';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { toast } from 'react-toastify';

vi.mock('react-toastify', () => ({
  toast: { error: vi.fn() },
}));

vi.mock('@/api/login', () => ({
  login: vi.fn(() => Promise.resolve({ id: 1, name: 'Alice' })),
}));

vi.mock('@/storage/userInfo', () => ({
  saveUserInfo: vi.fn(),
}));

const renderLogin = () => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </QueryClientProvider>,
  );
};

describe('Login Page', () => {
  it('renders email, password inputs and login button', () => {
    renderLogin();

    expect(screen.getByPlaceholderText('이메일')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('비밀번호')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /로그인/i })).toBeInTheDocument();
  });

  it('shows email validation error when email is invalid', () => {
    renderLogin();

    const emailInput = screen.getByPlaceholderText('이메일');
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });

    const passwordInput = screen.getByPlaceholderText('비밀번호');
    fireEvent.change(passwordInput, { target: { value: 'validPass123' } });

    fireEvent.submit(screen.getByRole('button', { name: /로그인/i }));

    expect(screen.getByText('올바른 이메일 형식이 아닙니다.')).toBeInTheDocument();
  });

  it('shows password validation error when password is too short', () => {
    renderLogin();

    const emailInput = screen.getByPlaceholderText('이메일');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    const passwordInput = screen.getByPlaceholderText('비밀번호');
    fireEvent.change(passwordInput, { target: { value: 'short' } });

    fireEvent.submit(screen.getByRole('button', { name: /로그인/i }));

    expect(screen.getByText('비밀번호는 최소 8글자 이상이어야 합니다.')).toBeInTheDocument();
  });

  it('calls login API on valid input', async () => {
    const { login } = await import('@/api/login');
    renderLogin();

    fireEvent.change(screen.getByPlaceholderText('이메일'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('비밀번호'), {
      target: { value: 'validPassword123' },
    });

    fireEvent.submit(screen.getByRole('button', { name: /로그인/i }));

    await waitFor(() => {
      expect(login).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'validPassword123',
      });
    });
  });

  it('shows error toast on login failure', async () => {
    const { login } = await import('@/api/login');
    (login as ReturnType<typeof vi.fn>).mockImplementationOnce(() =>
      Promise.reject(new Error('로그인 실패')),
    );

    renderLogin();

    fireEvent.change(screen.getByPlaceholderText('이메일'), {
      target: { value: 'fail@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('비밀번호'), {
      target: { value: 'validPassword123' },
    });

    fireEvent.submit(screen.getByRole('button', { name: /로그인/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('로그인 실패');
    });
  });
});
