import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import App from './app';

test('Проверяет рендер компонента <App />', () => {
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

  render(<App />, { wrapper: MemoryRouter });
  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();
});
