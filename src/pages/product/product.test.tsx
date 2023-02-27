import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Product from './product';
import { ProductsAllTogether } from '../../data';
import type { IProduct } from '../../types/types';

const productId = 1;
const product = ProductsAllTogether.find((item) => item.id === productId) as IProduct;

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
  test('Проверяет рендер компонента <Product />', () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText(product.title)).toBeInTheDocument();
  });
});
