import styled from '@emotion/styled';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing5};
  background-color: ${({ theme }) => theme.colors.gray00};
`;

export const Title = styled.h2`
  margin: ${({ theme }) =>
    `${theme.spacing.spacing5} ${theme.spacing.spacing0} ${theme.spacing.spacing5} ${theme.spacing.spacing3}`};
  font-size: ${({ theme }) => theme.spacing.spacing6};
  font-weight: bold;
`;

export const CategoryFilter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) =>
    `${theme.spacing.spacing0} ${theme.spacing.spacing3} ${theme.spacing.spacing5} ${theme.spacing.spacing3}`};
`;

export const SortOptions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0;
  margin: ${({ theme }) => `0 auto ${theme.spacing.spacing5}`};
  background-color: ${({ theme }) => theme.colors.blue100};
  padding: ${({ theme }) => `${theme.spacing.spacing2_5} ${theme.spacing.spacing0}`};
  border-radius: ${({ theme }) => theme.spacing.spacing3};
  max-width: ${({ theme }) => theme.spacing.spacing688};
  height: ${({ theme }) => theme.spacing.spacing12_5};
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing4};
`;

export const MoreButton = styled.button`
  width: 100%;
  height: ${({ theme }) => theme.spacing.spacing11};
  display: block;
  margin: ${({ theme }) => `${theme.spacing.spacing5} 0 auto `};
  padding: ${({ theme }) => `${theme.spacing.spacing2} ${theme.spacing.spacing6}`};
  background-color: ${({ theme }) => theme.colors.gray00};
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  border-radius: ${({ theme }) => theme.spacing.spacing3};
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.spacing3_5};
  cursor: pointer;
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.spacing7_5};
  margin: ${({ theme }) => `${theme.spacing.spacing10} 0`};
`;
