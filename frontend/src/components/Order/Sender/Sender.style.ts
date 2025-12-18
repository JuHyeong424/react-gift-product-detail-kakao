import styled from '@emotion/styled';

export const SenderWrapper = styled.div`
  margin: ${({ theme }) => `${theme.spacing.spacing2_5} ${theme.spacing.spacing0}`};
  padding: ${({ theme }) =>
    `${theme.spacing.spacing4} ${theme.spacing.spacing4} ${theme.spacing.spacing5} ${theme.spacing.spacing4}`};
  background-color: ${({ theme }) => theme.colors.gray00};
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.spacing4_5};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

export const SendInfo = styled.p`
  padding-left: ${({ theme }) => theme.spacing.spacing2_5};
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.spacing.spacing3_5};
`;

export const SendError = styled.p`
  padding-left: ${({ theme }) => theme.spacing.spacing2_5};
  color: ${({ theme }) => theme.colors.red700};
  font-size: ${({ theme }) => theme.spacing.spacing3_5};
`;

export const SenderInput = styled.input<{ isActive: boolean }>`
  width: 100%;
  height: ${({ theme }) => theme.spacing.spacing11};
  border: 1px solid
    ${({ theme, isActive }) => (isActive ? theme.colors.red700 : theme.colors.gray500)};
  border-radius: ${({ theme }) => theme.spacing.spacing1_5};
  font-size: ${({ theme }) => theme.spacing.spacing4};
  padding: ${({ theme }) => theme.spacing.spacing4_5};
  margin: ${({ theme }) =>
    `${theme.spacing.spacing0} ${theme.spacing.spacing1} ${theme.spacing.spacing2_5} ${theme.spacing.spacing1}`};

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;
