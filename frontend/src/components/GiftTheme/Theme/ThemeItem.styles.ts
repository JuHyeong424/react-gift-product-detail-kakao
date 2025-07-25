import styled from '@emotion/styled';

export const ThemeCard = styled.div`
  flex: 0 0 auto;
  width: ${({ theme }) => theme.spacing.spacing104};
  text-align: center;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.spacing.spacing3};
    object-fit: cover;
    aspect-ratio: 1;
    transition: transform 0.2s ease;
  }

  p {
    margin-top: ${({ theme }) => theme.spacing.spacing1_5};
    font-size: ${({ theme }) => theme.spacing.spacing3};
    color: ${({ theme }) => theme.colors.gray700};
    white-space: nowrap;
  }

  &:hover img {
    transform: scale(1);
  }
`;
