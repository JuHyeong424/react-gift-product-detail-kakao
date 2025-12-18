import styled from '@emotion/styled';

export const ReceiverWrapper = styled.div`
  margin: ${({ theme }) => `${theme.spacing.spacing2_5} ${theme.spacing.spacing0}`};
  padding: ${({ theme }) =>
    `${theme.spacing.spacing2_5} ${theme.spacing.spacing4} ${theme.spacing.spacing5} ${theme.spacing.spacing4}`};
  background-color: ${({ theme }) => theme.colors.gray00};
`;

export const TitleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.spacing2_5};
`;

export const RecevierTitle = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.spacing4_5};
`;

export const ReceiverAddBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.gray200};
  width: ${({ theme }) => theme.spacing.spacing14};
  height: ${({ theme }) => theme.spacing.spacing9};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.spacing2_5};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray500};
  }
`;

export const ReceiverInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  border-radius: ${({ theme }) => theme.spacing.spacing1_5};
  padding: ${({ theme }) => theme.spacing.spacing10};

  p {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

export const BlurContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;
export const BaseContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90vw;
  max-width: ${({ theme }) => theme.spacing.spacing600};
  height: 90vh;
  max-height: ${({ theme }) => theme.spacing.spacing650};

  background-color: white;
  z-index: 2;
  padding: ${({ theme }) => `${theme.spacing.spacing5} ${theme.spacing.spacing7_5}`};
  border-radius: ${({ theme }) => theme.spacing.spacing2_5};
`;

export const ModalTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.spacing2_5};
`;

export const ModalText = styled.p`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${({ theme }) => theme.spacing.spacing3_5};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

export const ModalAddBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.gray300};
  border: none;
  width: ${({ theme }) => theme.spacing.spacing17};
  height: ${({ theme }) => theme.spacing.spacing8_5};
  border-radius: ${({ theme }) => theme.spacing.spacing1_5};
  cursor: pointer;
`;

export const ModalBottomBtn = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.spacing5};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.spacing2_5};
  width: 100%;
`;

export const ModalCancleBtn = styled.button`
  width: 30%;
  height: 6vh;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const ModalFinishBtn = styled.button`
  width: 60%;
  border: none;
  border-radius: ${({ theme }) => theme.spacing.spacing2_5};
  background-color: ${({ theme }) => theme.colors.yellow500};
  cursor: pointer;
`;
export const ReceiverForm = styled.form`
  margin: ${({ theme }) => `${theme.spacing.spacing2_5} ${theme.spacing.spacing0}`};
  width: 100%;
  max-height: 55vh;
  overflow: auto;
`;

export const InfoList = styled.div<{ isLast?: boolean }>`
  margin: ${({ theme }) => `${theme.spacing.spacing2_5} ${theme.spacing.spacing0}`};
  border-bottom: ${({ isLast, theme }) => (isLast ? 'none' : `1px solid ${theme.colors.gray300}`)};
`;

export const ReceiverIndex = styled.div`
  margin: ${({ theme }) => `${theme.spacing.spacing1} ${theme.spacing.spacing0}`};

  span {
    font-size: ${({ theme }) => theme.spacing.spacing4};
    font-weight: bold;
    margin-right: ${({ theme }) => theme.spacing.spacing1_5};
  }

  button {
    background: none;
    border: none;
  }
`;

export const ReceiverItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: ${({ theme }) => `${theme.spacing.spacing2_5} ${theme.spacing.spacing0}`};

  span {
    width: ${({ theme }) => theme.spacing.spacing100};
  }
`;

export const ItemInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    padding: ${({ theme }) => `${theme.spacing.spacing1} ${theme.spacing.spacing2}`};
    font-size: ${({ theme }) => theme.spacing.spacing3_5};
    color: ${({ theme }) => theme.colors.red700};
  }
`;
export const Input = styled.input<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: 1px solid
    ${({ isActive, theme }) => (isActive ? theme.colors.red500 : theme.colors.gray300)};
  border-radius: ${({ theme }) => theme.spacing.spacing2_5};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

export const ReceiverTable = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.spacing.spacing2_5};

  thead {
    background-color: ${({ theme }) => theme.colors.gray200};
    border-radius: ${({ theme }) => theme.spacing.spacing2_5};
    border-bottom: 1px solid gray;

    th {
      text-align: left;
      padding: ${({ theme }) =>
        `${theme.spacing.spacing4} ${theme.spacing.spacing0} ${theme.spacing.spacing4} ${theme.spacing.spacing2_5}`};
    }
  }

  tbody {
    border-bottom: 1px solid gray;

    tr {
      border-bottom: 1px solid gray;
    }

    td {
      text-align: left;
      padding: ${({ theme }) =>
        `${theme.spacing.spacing4} ${theme.spacing.spacing0} ${theme.spacing.spacing4} ${theme.spacing.spacing2_5}`};
    }
  }
`;
