import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { products } from '../../../data';
import CatalogList from './catalog-list';

test('Проверяет рендер компонента <CatalogList />', () => {
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

  render(<CatalogList />, { wrapper: MemoryRouter });
  const list = screen.getByTestId('catalog-list');
  expect(list).toBeInTheDocument();
  const renderedProducts = screen.getAllByTestId('catalog-item');
  expect(renderedProducts.length).toBe(products.length);
});
