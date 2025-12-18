import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.gray00};
  margin: ${({ theme }) => theme.spacing.spacing7};
  border-radius: ${({ theme }) => theme.spacing.spacing4_5};
  cursor: pointer;
`;

export const PlusButton = styled.button`
  background-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellow};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.spacing4};
  width: ${({ theme }) => theme.spacing.spacing10};
  height: ${({ theme }) => theme.spacing.spacing10};
  font-size: ${({ theme }) => theme.spacing.spacing6};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray1000};
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: #fada0a;
  }
`;

export const Message = styled.div`
  font-size: ${({ theme }) => theme.spacing.spacing4};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray800};
`;
