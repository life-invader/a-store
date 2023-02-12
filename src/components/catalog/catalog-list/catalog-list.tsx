import CatalogItem from '../catalog-item/catalog-item';
import { Typography } from '@alfalab/core-components/typography';
import type { IProduct } from '../../../types/types';

import './catalog-list.css';

interface ICatalogList {
  products: IProduct[];
  title?: string;
  description?: string;
}

function CatalogList({ products, description, title }: ICatalogList) {
  return (
    <div className="catalog">
      {description && title && (
        <>
          <Typography.TitleResponsive tag="h2" className="catalog__title">
            {title}
          </Typography.TitleResponsive>
          <p className="catalog__description">{description}</p>
        </>
      )}
      <ul className="catalog__list" data-testid="catalog-list">
        {products.map((item) => (
          <li key={item.id} className="catalog__list-item" data-testid="catalog-item">
            <CatalogItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogList;
