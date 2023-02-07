import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import MadeInAlfa from './made-in-alfa';

test('Проверяет рендер компонента <MadeInAlfa />', () => {
  render(<MadeInAlfa />, { wrapper: MemoryRouter });
  const title = screen.getByText('Сделано в Альфе');
  expect(title).toBeInTheDocument();
});
