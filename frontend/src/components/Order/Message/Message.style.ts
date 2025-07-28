import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray00};
  padding-right: ${({ theme }) => theme.spacing.spacing7_5};
`;

export const ImageWrapper = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  max-width: 100%;
`;

export const GifWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const GifImage = styled.img`
  display: flex;
  border-radius: ${({ theme }) => theme.spacing.spacing2_5};
  height: ${({ theme }) => theme.spacing.spacing280};
  margin: ${({ theme }) =>
    `${theme.spacing.spacing4} ${theme.spacing.spacing0} ${theme.spacing.spacing10} ${theme.spacing.spacing0}`};
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.2);
`;

export const TextArea = styled.textarea<{ isActive: boolean }>`
  width: 100%;
  height: ${({ theme }) => theme.spacing.spacing15};
  border: 1px solid
    ${({ theme, isActive }) => (isActive ? theme.colors.red700 : theme.colors.gray500)};
  border-radius: ${({ theme }) => theme.spacing.spacing1_5};
  font-size: ${({ theme }) => theme.spacing.spacing4};
  padding: ${({ theme }) => `${theme.spacing.spacing1_5} ${theme.spacing.spacing2}`};
  margin: ${({ theme, isActive }) =>
    `0 ${theme.spacing.spacing5} ${isActive ? theme.spacing.spacing0 : theme.spacing.spacing10} ${theme.spacing.spacing5}`};
`;

export const ErrorMessage = styled.p`
  margin-left: ${({ theme }) => theme.spacing.spacing5};
  padding-bottom: ${({ theme }) => theme.spacing.spacing7_5};
  color: ${({ theme }) => theme.colors.red700};
`;

export const MessageImage = styled.img`
  display: inline-block;
  margin: ${({ theme }) => theme.spacing.spacing1_5};
  border-radius: ${({ theme }) => theme.spacing.spacing2_5};
  height: ${({ theme }) => theme.spacing.spacing15};

  &:hover {
    cursor: pointer;
  }
`;
