import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartItem from './cart-item';

test('Проверяет рендер компонента <CartItem />', () => {
  render(<CartItem />);
  const text = screen.getByText('цвет: красный');
  expect(text).toBeInTheDocument();
});
