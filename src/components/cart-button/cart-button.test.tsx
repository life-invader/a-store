import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CartButton from './cart-button';

test('Проверяет рендер компонента <CartButton />', () => {
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

  render(<CartButton />, { wrapper: MemoryRouter });
  const link = screen.getByRole('link');
  expect(link).toBeInTheDocument();
});
