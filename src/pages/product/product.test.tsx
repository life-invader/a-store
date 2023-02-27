import { fireEvent, render, screen } from '@testing-library/react';
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
    expect(screen.getAllByTestId('product-thumbnail')).toHaveLength(product.images.length);
  });

  test('Проверяет переключение картинок в компоненте <Product />', () => {
    render(<RouterProvider router={router} />);
    const mainImage = screen.getByTestId('main-image');
    const thumbnails = screen.getAllByTestId('thumbnail-image');

    expect(mainImage).toHaveAttribute('src', product.preview);
    fireEvent.click(thumbnails[1]);
    expect(mainImage).toHaveAttribute('src', product.images[1]);
  });
});
