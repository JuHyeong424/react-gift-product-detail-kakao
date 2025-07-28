import styled from '@emotion/styled';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.gray00};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.spacing.spacing6};
  font-weight: bold;
  margin: ${({ theme }) =>
    `${theme.spacing.spacing5} 0 ${theme.spacing.spacing5} ${theme.spacing.spacing3}`};
  color: ${({ theme }) => theme.colors.gray900};
`;

export const ThemeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing10};
  width: max-content;
  margin: 0 auto;

  @media (max-width: 680px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.spacing7_5};
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.spacing5};
  }
`;

export const YellowBox = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellow};
  border-radius: ${({ theme }) => theme.spacing.spacing5};
  padding: ${({ theme }) => theme.spacing.spacing4};
  margin-top: ${({ theme }) => theme.spacing.spacing7_5};
  font-weight: ${({ theme }) => theme.spacing.spacing5};
  font-size: ${({ theme }) => theme.spacing.spacing4};
  color: ${({ theme }) => theme.colors.gray1000};
  line-height: 1.5;
`;
