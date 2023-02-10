import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorPage from './error-page';

test('Проверяет рендер компонента <ErrorPage />', () => {
  render(<ErrorPage />);
  const text = screen.getByText('ErrorPage');
  expect(text).toBeInTheDocument();
});
