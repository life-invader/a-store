import CatalogItem from '../catalog-item/catalog-item';
import { Typography } from '@alfalab/core-components/typography';
import type { ICatalogListProps } from './type';

import styles from './style.module.css';

function CatalogList({ products, description, title }: ICatalogListProps) {
  return (
    <div className={styles.catalog}>
      {description && title && (
        <>
          <Typography.TitleResponsive tag="h2" className={styles.title}>
            {title}
          </Typography.TitleResponsive>
          <p className={styles.description}>{description}</p>
        </>
      )}
      <ul className={styles.list} data-testid="catalog-list">
        {products.map((item) => (
          <li key={item.id} data-testid="catalog-item">
            <CatalogItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogList;
