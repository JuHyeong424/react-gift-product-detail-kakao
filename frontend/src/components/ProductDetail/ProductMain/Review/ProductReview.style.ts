import styled from '@emotion/styled';

export const ProductReviewWrapper = styled.div`
  padding: ${({ theme }) => ` ${theme.spacing.spacing2} ${theme.spacing.spacing3}`};
`;

export const ReviewWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.spacing4};
`;

export const ReviewName = styled.div`
  padding: ${({ theme }) => ` ${theme.spacing.spacing2} ${theme.spacing.spacing0}`};
  font-weight: bold;
`;
