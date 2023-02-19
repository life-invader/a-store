import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from './gallery';
import { ProductMock } from '../../../mocks/api-product';

test('Проверяет переключение картинок в компоненте <Gallery />', () => {
  render(<Gallery images={ProductMock.images} title={ProductMock.title} />);

  const mainImage = screen.getByTestId('main-image');
  const thumbnails = screen.getAllByTestId('thumbnail-image');

  expect(screen.getAllByTestId('gallery-thumbnail')).toHaveLength(ProductMock.images.length);
  expect(mainImage).toHaveAttribute('src', ProductMock.preview);
  fireEvent.click(thumbnails[1]);
  expect(mainImage).toHaveAttribute('src', ProductMock.images[1]);
});
