import styled from '@emotion/styled';
import { RANKING_IN_THREE } from '@/constants/RankingConstants.ts';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.gray00};

  &:hover {
    cursor: pointer;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const RankBadge = styled.div<{ rank: number }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.spacing2};
  left: ${({ theme }) => theme.spacing.spacing2};
  width: ${({ theme }) => theme.spacing.spacing6};
  height: ${({ theme }) => theme.spacing.spacing6};
  border-radius: ${({ theme }) => theme.spacing.spacing1};
  font-size: ${({ theme }) => theme.spacing.spacing3};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray00};
  background-color: ${({ rank, theme }) =>
    rank <= RANKING_IN_THREE ? theme.colors.red800 : theme.colors.gray700};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  object-fit: cover;
  aspect-ratio: 1;
`;

export const BrandName = styled.div`
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  font-size: ${({ theme }) => theme.spacing.spacing3};
  color: ${({ theme }) => theme.colors.gray700};
`;

export const ProductName = styled.div`
  margin-top: ${({ theme }) => theme.spacing.spacing1};
  font-size: ${({ theme }) => theme.spacing.spacing4};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const Price = styled.div`
  margin-top: ${({ theme }) => theme.spacing.spacing1_5};
  font-size: ${({ theme }) => theme.spacing.spacing4};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray1000};
`;
