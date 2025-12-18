import styled from '@emotion/styled';

export const ItemImageWrapper = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  border-radius: ${({ theme }) => theme.spacing.spacing1};
  padding: ${({ theme }) => theme.spacing.spacing3_5};
  margin-bottom: ${({ theme }) => theme.spacing.spacing12_5};
`;

export const ItemImage = styled.div`
  img {
    height: ${({ theme }) => theme.spacing.spacing16_70};
    margin-right: ${({ theme }) => theme.spacing.spacing5};
  }
`;

export const ItemName = styled.div`
  font-size: ${({ theme }) => theme.spacing.spacing3_5};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1_2_5};
`;

export const ItemBrand = styled.div`
  font-size: ${({ theme }) => theme.spacing.spacing3};
  color: ${({ theme }) => theme.colors.gray700};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2_5};
`;

export const ItemPrice = styled.div`
  font-weight: bold;

  span {
    color: ${({ theme }) => theme.colors.gray700};
    font-weight: normal;
  }
`;
