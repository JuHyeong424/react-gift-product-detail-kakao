import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray00};
  padding: ${({ theme }) => `${theme.spacing.spacing0} ${theme.spacing.spacing5}`};
`;

export const LogoImg = styled.img`
  width: ${({ theme }) => theme.spacing.spacing100};
  margin-bottom: ${({ theme }) => theme.spacing.spacing8};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
  width: ${({ theme }) => theme.spacing.spacing420};
`;

export const StyledInput = styled.input`
  height: ${({ theme }) => theme.spacing.spacing11};
  padding: ${({ theme }) => `${theme.spacing.spacing0} ${theme.spacing.spacing3}`};
  font-size: ${({ theme }) => theme.spacing.spacing4};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.gray500};
    background-color: ${({ theme }) => theme.colors.gray00};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

export const Alert = styled.span`
  color: ${({ theme }) => theme.colors.red700};
  font-size: ${({ theme }) => theme.spacing.spacing4};
`;

export const LoginButton = styled.button`
  width: ${({ theme }) => theme.spacing.spacing420};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.spacing1_5};
  background-color: ${({ theme }) => theme.colors.yellow500};
  ${({ theme }) => theme.colors.semantic.brand.kakaoYellow};
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.spacing4};
  cursor: pointer;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray1000};
  display: block;
  height: 100%;
  line-height: ${({ theme }) => theme.spacing.spacing11};

  &:hover {
    background-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellowHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray300};
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.gray700};
  }
`;
