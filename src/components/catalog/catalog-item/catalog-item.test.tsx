import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CatalogItem from './catalog-item';
import { AlfaMadeProductsMock } from '../../../mocks/api-made-in-alfa';

const props = {
  product: AlfaMadeProductsMock[0],
  subtitle: 'subtitle',
};

describe('Проверяет рендер компонента <CatalogItem />', () => {
  test('Проверяет рендер компонента <CatalogItem /> без пропса subtitle', () => {
    render(<CatalogItem {...props.product} />, { wrapper: MemoryRouter });

    const title = screen.getByText(props.product.title);
    const subtitle = screen.queryByTestId('subtitle-test');
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeNull();
  });

  test('Проверяет рендер компонента <CatalogItem />', () => {
    render(<CatalogItem {...props.product} subtitle={'subtitle'} />, { wrapper: MemoryRouter });

    const title = screen.getByText(props.product.title);
    const subtitle = screen.queryByTestId('subtitle-test');
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
