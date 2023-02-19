import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Product from './product';
import { Provider } from 'react-redux';
import { createMockStore } from '../../utils/test-utils';
import { ProductMock } from '../../mocks/api-product';

const productId = ProductMock.id;
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
    const store = createMockStore();

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(ProductMock),
      } as Response),
    );
    jest.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );

    const title = await screen.findByText(ProductMock.title);
    expect(title).toBeInTheDocument();
    expect(store.dispatch).toHaveBeenCalled();
  });

  test('Проверяет обработку ошибок в компоненте <Product />', () => {
    const store = createMockStore();

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
