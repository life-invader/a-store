import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { preloadedStore } from '../../../mocks/preloaded-store';
import { createMockStore } from '../../../utils/test-utils';
import CartList from './cart-list';

test('Проверяет рендер компонента <CartList />', async () => {
  const store = createMockStore(preloadedStore);
  const cart = store.getState().cart;

  render(
    <Provider store={store}>
      <CartList />
    </Provider>,
    { wrapper: MemoryRouter },
  );

  expect(screen.getAllByTestId('cart-list-item')).toHaveLength(cart.length);
});
