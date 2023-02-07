import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderForm from './order-form';

test('Проверяет рендер компонента <OrderForm />', () => {
  render(<OrderForm />);
  const label = screen.getByLabelText('ФИО');
  expect(label).toBeInTheDocument();
});
