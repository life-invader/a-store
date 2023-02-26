import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import OrderForm from './order-form';

test('Проверяет рендер компонента <OrderForm />', () => {
  render(<OrderForm onShipmentChange={jest.fn()} />);
  const label = screen.getByLabelText('ФИО');
  expect(label).toBeInTheDocument();
});
