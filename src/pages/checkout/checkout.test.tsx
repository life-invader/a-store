import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { preloadedStore } from '../../mocks/preloaded-store';
import { createMockStore } from '../../utils/test-utils';
import Checkout from './checkout';

describe('Проверяет рендер страницы <Checkout />', () => {
  test('Проверяет рендер страницы <Checkout /> с пустой корзиной', () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <Checkout />
      </Provider>,
      { wrapper: MemoryRouter },
    );

    const id = screen.getByTestId('checkout');
    expect(id).toBeInTheDocument();
  });
});

describe('Проверяет рендер страницы <Checkout /> с товарами в корзине', () => {
  test('Проверяет рендер страницы <Checkout /> с пустой корзиной', () => {
    const store = createMockStore(preloadedStore);

    render(
      <Provider store={store}>
        <Checkout />
      </Provider>,
      { wrapper: MemoryRouter },
    );

    const text = screen.getByText(/Итоговая сумма/);
    expect(text).toBeInTheDocument();
  });
});
