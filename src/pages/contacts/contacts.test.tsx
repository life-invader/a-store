import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contacts from './contacts';

test('Проверяет рендер компонента <Contacts />', () => {
  render(<Contacts />);
  const title = screen.getByText('Контакты');
  expect(title).toBeInTheDocument();
});
