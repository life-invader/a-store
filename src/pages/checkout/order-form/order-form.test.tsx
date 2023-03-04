import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import OrderForm from './order-form';

test('Проверяет работу компонента <OrderForm />', () => {
  render(<OrderForm onShipmentChange={jest.fn()} onClose={jest.fn()} />);

  fireEvent.input(screen.getByLabelText('ФИО'), { target: { value: 'Имя' } });
  expect(screen.getByLabelText('ФИО')).toHaveValue('Имя');

  fireEvent.input(screen.getByLabelText('e-mail'), { target: { value: 'example@gmail.com' } });
  expect(screen.getByLabelText('e-mail')).toHaveValue('example@gmail.com');

  fireEvent.input(screen.getByLabelText('Телефон'), { target: { value: '89999999999' } });
  expect(screen.getByLabelText('Телефон')).toHaveValue('89999999999');

  fireEvent.click(screen.getByLabelText(/Согласен с политикой/));
  expect(screen.getByLabelText(/Согласен с политикой/)).toBeChecked();

  fireEvent.click(screen.getByLabelText(/Банковская карта/));
  expect(screen.getByLabelText(/Банковская карта/)).toBeChecked();

  fireEvent.click(screen.getByRole('button', { name: /дальше/i }));
  expect(screen.queryAllByText(/Обязательное поле/)).toHaveLength(0);
});
