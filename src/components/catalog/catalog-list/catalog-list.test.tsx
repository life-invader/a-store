import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { products } from '../../../data';
import CatalogList from './catalog-list';

test('Проверяет рендер компонента <CatalogList />', () => {
  render(<CatalogList />, { wrapper: MemoryRouter });

  const list = screen.getByTestId('catalog-list');
  expect(list).toBeInTheDocument();
  const renderedProducts = screen.getAllByTestId('catalog-item');
  expect(renderedProducts.length).toBe(products.length);
});
