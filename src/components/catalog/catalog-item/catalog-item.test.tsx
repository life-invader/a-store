import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CatalogItem from './catalog-item';
import { products } from '../../../data';

test('Проверяет рендер компонента <CatalogItem />', () => {
  const product = products[0];
  render(<CatalogItem {...product} />, { wrapper: MemoryRouter });

  const title = screen.getByText(product.title);
  expect(title).toBeInTheDocument();
});
