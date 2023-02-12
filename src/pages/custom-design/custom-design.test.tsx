import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomDesign from './custom-design';
import { MemoryRouter } from 'react-router-dom';
import { CustomDesignProducts } from '../../data';

const { groups } = CustomDesignProducts;

test('Проверяет рендер компонента <CustomDesign />', () => {
  render(<CustomDesign />, { wrapper: MemoryRouter });
  const title = screen.getByText('Свой дизайн');
  const screenGroups = screen.getAllByTestId('custom-design-group');
  expect(title).toBeInTheDocument();
  expect(screenGroups).toHaveLength(groups.length);
});
