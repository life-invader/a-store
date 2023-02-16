import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CatalogList from './catalog-list';
import { AlfaMadeProducts } from '../../../mocks/api-made-in-alfa';

const props = {
  products: AlfaMadeProducts,
  title: 'title',
  description: 'description',
};

describe('Проверяет рендер компонента <CatalogList />', () => {
  test('Проверяет рендер компонента <CatalogList />', () => {
    render(<CatalogList {...props} />, { wrapper: MemoryRouter });

    const list = screen.getByTestId('catalog-list');
    const renderedProducts = screen.getAllByTestId('catalog-item');
    const title = screen.getByRole('heading');
    const description = screen.getByText(props.description);
    expect(list).toBeInTheDocument();
    expect(renderedProducts.length).toBe(props.products.length);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('Проверяет рендер компонента <CatalogList /> без пропсов title и description', () => {
    render(<CatalogList products={props.products} />, { wrapper: MemoryRouter });

    const list = screen.getByTestId('catalog-list');
    const renderedProducts = screen.getAllByTestId('catalog-item');
    const title = screen.queryByRole('heading');
    const description = screen.queryByText(props.description);
    expect(list).toBeInTheDocument();
    expect(renderedProducts.length).toBe(props.products.length);
    expect(title).toBeNull();
    expect(description).toBeNull();
  });
});
