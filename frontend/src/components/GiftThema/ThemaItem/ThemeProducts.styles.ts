import styled from '@emotion/styled';

export const ThemeProductsWrapper = styled.div<{ error; product }>`
  min-height: ${({ error, product }) =>
    error || product === 0 ? `calc(100vh - 144px - 56px)` : '100vh'};
  background-color: ${({ theme }) => theme.colors.gray00};
  padding: ${({ theme }) => ` ${theme.spacing.spacing0} ${theme.spacing.spacing5}`};
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing4};
  padding: ${({ theme }) => ` ${theme.spacing.spacing5} ${theme.spacing.spacing0}`};
`;

export const ProductsLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.spacing7_5};
  margin: ${({ theme }) => ` ${theme.spacing.spacing10} ${theme.spacing.spacing0}`};
`;

export const ProductsError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.spacing7_5};
  padding: ${({ theme }) => ` ${theme.spacing.spacing12_5} ${theme.spacing.spacing0}`};
`;
