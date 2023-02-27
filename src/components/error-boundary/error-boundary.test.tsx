import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorBoundary from './error-boundary';

const ErrorChild = () => {
  throw new Error();
};

const Child = () => {
  return <p>im child</p>;
};

describe('Error Boundary', () => {
  test('Проверяет отлов ошибок в <ErrorBoundary />', () => {
    render(
      <ErrorBoundary>
        <ErrorChild />
      </ErrorBoundary>,
      { wrapper: MemoryRouter },
    );

    const errorMessage = screen.getByText('Все сломалось');
    expect(errorMessage).toBeInTheDocument();
  });

  test('Проверяет рендер компонента <ErrorBoundary /> без ошибок', () => {
    render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>,
      { wrapper: MemoryRouter },
    );

    const text = screen.getByText('im child');
    expect(text).toBeInTheDocument();
  });
});
