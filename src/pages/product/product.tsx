import { useParams } from 'react-router-dom';
import { ProductsAllTogether } from '../../data';
import { formatPrice } from '../../utils/utils';
import ProductForm from './product-form/product-form';
import Gallery from './gallery/gallery';
import type { IProduct } from '../../types/types';

import './product.css';

function Product() {
  const { id: productId } = useParams();

  const product = ProductsAllTogether.find((item) => item.id === Number(productId)) as IProduct;
  const { title, price, images, description } = product;

  return (
    <div className="product container" data-testid="product-test">
      <Gallery images={images} title={title} />

      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">{formatPrice(price)} ₽</p>
        <ProductForm {...product} />
        <p className="product__description">{description}</p>
      </div>
    </div>
  );
}

export default Product;
