import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CartButton from './cart-button';

test('Проверяет рендер компонента <CartButton />', () => {
  render(<CartButton />, { wrapper: MemoryRouter });
  const link = screen.getByRole('link');
  expect(link).toBeInTheDocument();
});
