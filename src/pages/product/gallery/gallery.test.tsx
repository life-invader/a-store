import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from './gallery';
import { AlfaMadeProducts } from '../../../mocks/api-made-in-alfa';

const product = AlfaMadeProducts[0];

test('Проверяет переключение картинок в компоненте <Gallery />', () => {
  render(<Gallery images={product.images} title={product.title} />);

  const mainImage = screen.getByTestId('main-image');
  const thumbnails = screen.getAllByTestId('thumbnail-image');

  expect(screen.getAllByTestId('gallery-thumbnail')).toHaveLength(product.images.length);
  expect(mainImage).toHaveAttribute('src', product.preview);
  fireEvent.click(thumbnails[1]);
  expect(mainImage).toHaveAttribute('src', product.images[1]);
});
