import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import SideMenuElement from './side-menu-element';

test('Проверяет рендер компонента <PromoBlock />', async () => {
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

  const onClick = jest.fn();
  const title = 'title';

  render(<SideMenuElement href="/" title={title} onClick={onClick} />, { wrapper: MemoryRouter });
  const link = screen.getByText(title);
  expect(link).toBeInTheDocument();

  fireEvent.click(link);
  expect(onClick).toBeCalled();
});
