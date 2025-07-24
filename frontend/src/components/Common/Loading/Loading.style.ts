import styled from '@emotion/styled';

export const CommonLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.spacing7_5};
  margin: ${({ theme }) => `${theme.spacing.spacing10} ${theme.spacing.spacing0}`};
`;
