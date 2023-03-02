import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { CartPanelContext } from '../../../context/cart-panel-context';
import { cartItemMock } from '../../../mocks/cart';
import { preloadedStore } from '../../../mocks/preloaded-store';
import { createMockStore } from '../../../utils/test-utils';
import CartElement from './cart-element';

test('Проверяет рендер компонента <CartElement />', async () => {
  const context = {
    closeModal: jest.fn(),
  };
  const store = createMockStore(preloadedStore);

  render(
    <Provider store={store}>
      <CartPanelContext.Provider value={context}>
        <CartElement product={cartItemMock} />
      </CartPanelContext.Provider>
    </Provider>,
    { wrapper: MemoryRouter },
  );

  fireEvent.click(screen.getByRole('link'));
  expect(context.closeModal).toBeCalled();
});
