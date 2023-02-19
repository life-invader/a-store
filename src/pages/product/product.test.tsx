import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Product from './product';
import { CustomDesignProducts } from '../../mocks/api-your-design';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const product = CustomDesignProducts[0].products[0];
const productId = product.id;

const routes = [
  {
    path: '/product/:id',
    element: <Product />,
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: [`/product/${productId}`],
});

describe('Проверяет рендер компонента <Product />', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Проверяет рендер компонента <Product />', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(product),
      } as Response),
    );

    jest.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );

    // Дождаться закрытия спиннера в компоненте
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1000);
    });

    const title = await screen.findByText(product.title);
    expect(title).toBeInTheDocument();
    expect(store.dispatch).toHaveBeenCalled();
  });

  test('Проверяет обработку ошибок в компоненте <Product />', () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      throw new Error();
    });

    jest.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );

    const title = screen.getByText('Что-то пошло не так(((');
    expect(title).toBeInTheDocument();
    expect(store.dispatch).toHaveBeenCalled();
  });
});
