import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Cart from './cart';

test('Проверяет рендер компонента <CartButton />', () => {
  render(<Cart />, { wrapper: MemoryRouter });
  const link = screen.getByRole('link');
  expect(link).toBeInTheDocument();
});
