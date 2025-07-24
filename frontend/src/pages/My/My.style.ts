import styled from '@emotion/styled';

export const Title = styled.div`
  font-weight: bold;
  margin: ${({ theme }) => `${theme.spacing.spacing2_5} ${theme.spacing.spacing0}`};
`;

export const Content = styled.div`
  margin: ${({ theme }) => `${theme.spacing.spacing2_5} ${theme.spacing.spacing0}`};
`;

export const LogoutBtn = styled.button`
  padding: ${({ theme }) => theme.spacing.spacing2_5};
  width: ${({ theme }) => theme.spacing.spacing100};
  height: ${({ theme }) => theme.spacing.spacing12_5};
  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.spacing.spacing2_5};
  background-color: ${({ theme }) => theme.colors.gray400};
  transition: 0.5s background-color;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray500};
  }
`;
