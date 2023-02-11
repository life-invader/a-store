import { Link } from 'react-router-dom';
import { formatPrice } from '../../../utils/utils';
import { AppRoutes } from '../../../constants/routes';
import type { IProduct } from '../../../types/types';

import './catalog-item.css';

function CatalogItem({ id, preview, price, title, subtitle }: IProduct) {
  return (
    <Link className="product-card" to={AppRoutes.Product(id)}>
      <div className="product-card__img-wrapper">
        <img className="product-card__img" src={preview} alt={title} />
      </div>
      <div className="product-card__info">
        <p className="product-card__title">{title}</p>
        {subtitle && <p className="product-card__subtitle">{subtitle}</p>}
        <p className="product-card__price">{formatPrice(price)} ₽</p>
      </div>
    </Link>
  );
}

export default CatalogItem;
