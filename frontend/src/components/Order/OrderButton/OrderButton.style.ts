import styled from '@emotion/styled';

export const PriceButton = styled.button`
  height: ${({ theme }) => theme.spacing.spacing12_5};
  max-width: ${({ theme }) => theme.spacing.spacing720};
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: ${({ theme }) => theme.semantic.brand.kakaoYellow};
  border: none;
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.spacing4};
  cursor: pointer;
`;
