import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Select } from './select';

const props = {
  options: [
    { key: '0', content: 'white' },
    { key: '1', content: 'black' },
    { key: '2', content: 'cyan' },
  ],
  selected: { key: '0', content: 'white' },
  name: 'color',
  label: 'Цвет',
  onChange: jest.fn(),
};

test('Проверяет переключение опций компонента <Select />', () => {
  const { rerender } = render(<Select {...props} />);

  expect(screen.getByRole('combobox')).toBeInTheDocument();
  expect(screen.getByText(props.selected.content)).toBeInTheDocument();

  fireEvent.click(screen.getByText(props.selected.content));
  fireEvent.click(screen.getByText(props.options[2].content));

  expect(props.onChange).toBeCalled();

  props.selected = props.options[2];
  rerender(<Select {...props} />);

  expect(screen.getByText(props.selected.content)).toBeInTheDocument();
});
