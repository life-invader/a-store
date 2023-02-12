import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from '../../components/image/image';
import { ProductsAllTogether } from '../../data';
import { formatPrice } from '../../utils/utils';
import type { IProduct } from '../../types/types';

import './product.css';

function Product() {
  const [currImg, setCurrImg] = useState(0);
  const { id: productId } = useParams();

  const changeImgHandler = (id: number) => () => {
    setCurrImg(id);
  };

  const product = ProductsAllTogether.find((item) => item.id === Number(productId)) as IProduct;
  const { title, price, images } = product;

  return (
    <div className="product container" data-testid="product-test">
      <div className="product__gallery">
        <Image className="product__img" src={images[currImg]} alt={title} testId="main-image" />
        <ul className="product__thumbnail-list">
          {images.map((item, index) => (
            <li key={item} className="product__thumbnail-list-item" data-testid="product-thumbnail">
              <Image
                className="product__preview"
                src={item}
                alt={title}
                onClick={changeImgHandler(index)}
                testId="thumbnail-image"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">{formatPrice(price)} ₽</p>
      </div>
    </div>
  );
}

export default Product;
