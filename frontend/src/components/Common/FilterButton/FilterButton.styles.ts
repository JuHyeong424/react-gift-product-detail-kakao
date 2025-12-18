import styled from '@emotion/styled';

export const Wrapper = styled.button<{ isActive: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing1_5};
  padding: ${({ theme }) => `${theme.spacing.spacing2_5} ${theme.spacing.spacing0}`};
  background-color: ${({ theme }) => theme.colors.gray00};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.spacing4};
  cursor: pointer;
  font-size: ${({ theme }) => theme.spacing.spacing3};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};

  div {
    font-size: ${({ theme }) => theme.spacing.spacing3_5};
    width: ${({ theme }) => theme.spacing.spacing11};
    height: ${({ theme }) => theme.spacing.spacing11};
    border-radius: ${({ theme }) => theme.spacing.spacing4};
    padding: ${({ theme }) => theme.spacing.spacing5};
    background-color: ${({ isActive, theme }) =>
      isActive ? theme.colors.blue700 : theme.colors.blue100};
    color: ${({ isActive, theme }) => (isActive ? theme.colors.gray100 : theme.colors.blue400)};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    color: ${({ isActive, theme }) => (isActive ? theme.colors.blue700 : theme.colors.blue300)};
  }

  transition:
    background-color 0.2s ease,
    color 0.2s ease;
`;
