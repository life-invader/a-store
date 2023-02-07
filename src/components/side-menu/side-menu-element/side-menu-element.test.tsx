import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import SideMenuElement from './side-menu-element';

test('Проверяет рендер компонента <PromoBlock />', async () => {
  const onClick = jest.fn();
  const title = 'title';

  render(<SideMenuElement href="/" title={title} onClick={onClick} />, { wrapper: MemoryRouter });
  const link = screen.getByText(title);
  expect(link).toBeInTheDocument();

  fireEvent.click(link);
  expect(onClick).toBeCalled();
});
