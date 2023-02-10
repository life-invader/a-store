import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { PromoData } from '../../constants/common';
import MainPage from './main-page';

test('Проверяет рендер компонента <MadeInAlfa />', () => {
  render(<MainPage />, { wrapper: MemoryRouter });

  PromoData.forEach((item) => {
    expect(screen.getByText(item.title)).toBeInTheDocument();
  });

  expect(screen.getAllByRole('link')).toHaveLength(PromoData.length);
});
