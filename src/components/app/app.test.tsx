import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import App from './app';
import { createMockStore } from '../../utils/test-utils';
import { Provider } from 'react-redux';
import { preloadedStore } from '../../mocks/preloaded-store';

describe('App', () => {
  beforeAll(() => {
    global.matchMedia =
      global.matchMedia ||
      function () {
        return {
          matches: true,
          media: 'query',
          onchange: null,
          addListener: jest.fn(), // deprecated
          removeListener: jest.fn(), // deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        };
      };
  });

  test('Проверяет рендер компонента <App />', () => {
    const store = createMockStore(preloadedStore);

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    const app = screen.getByTestId('app');
    const cartButton = screen.getByTestId('cart-button');
    expect(app).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
  });

  test('Проверяет рендер компонента <App /> без иконки корзины', () => {
    const store = createMockStore({ cart: [] });

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(screen.queryByTestId('cart-button')).toBeNull();
  });
});
