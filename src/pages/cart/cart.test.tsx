import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cart from './cart';

test('Проверяет рендер компонента <Cart />', () => {
  render(<Cart />);
  const label = screen.getByLabelText('ФИО');
  expect(label).toBeInTheDocument();
});
