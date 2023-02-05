import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { PromoData } from '../../constants/common';
import PromoBlock from './promo-block';

test('Проверяет рендер компонента <PromoBlock />', () => {
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

  const item = PromoData[0];

  render(<PromoBlock {...item} />, { wrapper: MemoryRouter });
  const title = screen.getByText(item.title);
  expect(title).toBeInTheDocument();
});
