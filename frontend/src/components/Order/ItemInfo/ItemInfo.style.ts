import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
  margin: ${({ theme }) => `${theme.spacing.spacing2_5} ${theme.spacing.spacing0}`};
  padding: ${({ theme }) =>
    `${theme.spacing.spacing3_5} ${theme.spacing.spacing3_5} ${theme.spacing.spacing5} ${theme.spacing.spacing3_5}`};
  background-color: ${({ theme }) => theme.colors.gray00};
`;

export const ItemTitle = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.spacing4_5};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.spacing8};
  margin: ${({ theme }) => `${theme.spacing.spacing10} ${theme.spacing.spacing0}`};
`;
