import styled from '@emotion/styled';

export const Span = styled.span<{ isActive: boolean }>`
  flex: 1;
  font-size: ${({ theme }) => theme.spacing.spacing3_5};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.blue700 : theme.colors.blue400)};
  cursor: pointer;
  transition: color 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;
