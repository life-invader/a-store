import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { preloadedStore } from '../../../mocks/preloaded-store';
import { createMockStore } from '../../../utils/test-utils';
import Cart from './cart';

test('Проверяет рендер компонента <CartButton />', async () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: false,
    value: jest.fn().mockReturnValue({
      matches: true,
      media: 'query',
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  });
  const store = createMockStore(preloadedStore);

  render(
    <Provider store={store}>
      <Cart />
    </Provider>,
    { wrapper: MemoryRouter },
  );
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText('Ваш заказ')).toBeInTheDocument();

  const closeButton = screen.getByLabelText('закрыть');
  fireEvent.click(closeButton);
  await waitForElementToBeRemoved(closeButton);
  expect(screen.queryByText('Ваш заказ')).toBeNull();
});
