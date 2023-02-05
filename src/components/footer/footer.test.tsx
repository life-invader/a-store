import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './footer';

test('Проверяет рендер компонента <Footer />', () => {
  render(<Footer />);

  const footerText = screen.getByText(/Альфа Фьюче Пипл/i);
  expect(footerText).toBeInTheDocument();
});
