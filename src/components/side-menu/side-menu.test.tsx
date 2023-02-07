import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import SideMenu, { Links } from './side-menu';

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

  const title = 'Кнопка';

  render(<SideMenu title={title} />, { wrapper: MemoryRouter });
  const button = screen.getByText(title);
  fireEvent.click(button);

  Object.values(Links).forEach((item) => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });

  const closeButton = screen.getByLabelText('закрыть');
  fireEvent.click(closeButton);

  await waitForElementToBeRemoved(closeButton);

  Object.values(Links).forEach((item) => {
    expect(screen.queryByText(item)).toBeNull();
  });
});
