import { Link } from 'react-router-dom';
import { formatPrice } from '../../../utils/utils';
import type { IProduct } from '../../../types/types';

import './catalog-item.css';

function CatalogItem({ preview, price, title }: IProduct) {
  return (
    <Link className="product" to={'/'}>
      <div className="product__img-wrapper">
        <img className="product__img" src={preview} alt={title} />
      </div>
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">{formatPrice(price)} ₽</p>
      </div>
    </Link>
  );
}

export default CatalogItem;
