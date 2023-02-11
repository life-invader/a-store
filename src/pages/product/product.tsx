import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsAllTogether } from '../../data';
import { IProduct } from '../../types/types';
import { formatPrice } from '../../utils/utils';

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
    <div className="product container">
      <div className="product__gallery">
        <img className="product__img" src={images[currImg]} alt={title} />
        <ul className="product__thumbnail-list">
          {images.map((item, index) => (
            <li key={item} className="product__thumbnail-list-item">
              <img
                className="product__preview"
                src={item}
                alt={title}
                onClick={changeImgHandler(index)}
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
