import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductForm from './product-form';

const product = {
  id: 0,
  preview: 'preview',
  images: ['images', 'images', 'images'],
  title: 'title',
  description: 'description',
  price: 4999,
  availability: true,
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['white', 'black', 'red'],
  models: [
    'iPhone 11',
    'iPhone 11 Pro',
    'iPhone 11 Pro Max',
    'iPhone 12',
    'iPhone 12 Pro',
    'iPhone 12 Pro Max',
    'iPhone 13',
    'iPhone 13 Pro',
    'iPhone 13 Pro Max',
    'iPhone 14',
    'iPhone 14 Plus',
    'iPhone 14 Pro',
    'iPhone 14 Pro Max',
  ],
};

test('Проверяет рендер компонента <ProductForm />', () => {
  render(<ProductForm {...product} />);

  expect(screen.getByTestId('product-form')).toBeInTheDocument();
  expect(screen.getByText('Цвет')).toBeInTheDocument();
  expect(screen.getByText('Размер')).toBeInTheDocument();
  expect(screen.getByText('Модель')).toBeInTheDocument();
  expect(screen.queryByText('Номер стикера')).toBeNull();
});
