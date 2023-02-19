import { Link } from 'react-router-dom';
import { formatPrice } from '../../../utils/utils';
import { AppRoutes } from '../../../constants/routes';
import Image from '../../image/image';
import type { IProductPreview } from '../../../types/types';

import './catalog-item.css';

function CatalogItem({ id, preview, price, title, subtitle }: IProductPreview) {
  return (
    <Link className="product-card" to={AppRoutes.Product(id)}>
      <div className="product-card__img-wrapper">
        <Image className="product-card__img" src={preview} alt={title} />
      </div>
      <div className="product-card__info" data-testid="product-card-test">
        <p className="product-card__title">{title}</p>
        {subtitle && (
          <p className="product-card__subtitle" data-testid="subtitle-test">
            {subtitle}
          </p>
        )}
        <p className="product-card__price">{formatPrice(price)} ₽</p>
      </div>
    </Link>
  );
}

export default CatalogItem;
