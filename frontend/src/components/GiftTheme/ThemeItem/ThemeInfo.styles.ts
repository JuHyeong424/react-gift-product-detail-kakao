import styled from '@emotion/styled';

export const ThemeInfoWrapper = styled.div``;

export const ThemeInfoHeader = styled.div<{ background: string }>`
  background-color: ${({ background, theme }) => background || theme.colors.gray00};
  color: ${({ theme }) => theme.colors.gray00};
  padding: ${({ theme }) => `${theme.spacing.spacing7_5} ${theme.spacing.spacing5}`};
  max-height: 30vh;
    
  h2 {
    padding: ${({ theme }) => `${theme.spacing.spacing2_5} ${theme.spacing.spacing0}`};
  }
`;
