import { Link } from 'react-router-dom';
import { formatPrice } from '../../../utils/utils';
import { AppRoutes } from '../../../constants/app-routes';
import Image from '../../image/image';
import type { IProductPreview } from '../../../types/types';

import styles from './style.module.css';

function CatalogItem({ id, preview, price, title, subtitle }: IProductPreview) {
  return (
    <Link className={styles.product} to={AppRoutes.Product(id)}>
      <div className={styles.wrapper}>
        <Image className={styles.img} src={preview} alt={title} />
      </div>
      <div className={styles.info} data-testid="product-card-test">
        <p>{title}</p>
        {subtitle && (
          <p className={styles.subtitle} data-testid="subtitle-test">
            {subtitle}
          </p>
        )}
        <p className={styles.price}>{formatPrice(price)} ₽</p>
      </div>
    </Link>
  );
}

export default CatalogItem;
