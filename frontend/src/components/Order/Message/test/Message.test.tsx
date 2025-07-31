import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Message from '../Message';
import { orderMessage } from '@/data/orderMessage';
import { useForm, FormProvider } from 'react-hook-form';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';

function WrapperComponent() {
  const methods = useForm({
    defaultValues: {
      textMessage: '',
      messageCardId: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <ThemeProvider theme={theme}>
        <Message />
      </ThemeProvider>
    </FormProvider>
  );
}

function WrapperWithValidation() {
  const methods = useForm({
    defaultValues: {
      textMessage: '',
      messageCardId: '',
    },
    mode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
      <ThemeProvider theme={theme}>
        <Message />
      </ThemeProvider>
    </FormProvider>
  );
}

describe('Message 컴포넌트 Typography 테스트', () => {
  it('초기 렌더링 시 첫 번째 메시지 기본값이 설정되어 있어야 한다', () => {
    render(<WrapperComponent />);

    const firstDefaultText = orderMessage[0].defaultTextMessage;

    const input = screen.getByDisplayValue(firstDefaultText);
    expect(input).toBeInTheDocument();
  });

  it('썸네일 이미지를 클릭하면 메시지와 이미지가 변경되어야 한다', () => {
    render(<WrapperComponent />);

    const secondItem = orderMessage[1];

    const images = screen.getAllByAltText(secondItem.defaultTextMessage);
    const thumbImage = images[0];

    fireEvent.click(thumbImage);

    const input = screen.getByDisplayValue(secondItem.defaultTextMessage);
    expect(input).toBeInTheDocument();

    const selectedImage = screen.getByAltText('선택된 메시지 이미지') as HTMLImageElement;
    expect(selectedImage.src).toContain(secondItem.imageUrl);
  });

  it('MessageInput 컴포넌트에 에러가 있을 때 에러가 전달되는지 테스트', async () => {
    const { container } = render(<WrapperWithValidation />);

    const input = screen.getByRole('textbox') || container.querySelector('input');

    if (input) {
      fireEvent.change(input, { target: { value: '' } }); // 빈값 입력
      fireEvent.blur(input); // blur로 유효성 검사 트리거
    }

    const errorMessage = await screen.findByText(/메시지를 입력해주세요/);
    expect(errorMessage).toBeInTheDocument();
  });
});
