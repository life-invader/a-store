import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomDesign from './custom-design';

test('Проверяет рендер компонента <CustomDesign />', () => {
  render(<CustomDesign />);
  const title = screen.getByText('Свой дизайн');
  expect(title).toBeInTheDocument();
});
