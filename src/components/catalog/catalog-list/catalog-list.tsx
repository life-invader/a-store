import CatalogItem from '../catalog-item/catalog-item';
import { products } from '../../../data';

import './catalog-list.css';

function CatalogList() {
  return (
    <ul className="catalog-list">
      {products.map((item) => (
        <li key={item.id} className="catalog-list__item">
          <CatalogItem {...item} />
        </li>
      ))}
    </ul>
  );
}

export default CatalogList;
