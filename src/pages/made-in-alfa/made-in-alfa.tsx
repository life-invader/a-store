import CatalogList from '../../components/catalog/catalog-list/catalog-list';
import { Typography } from '@alfalab/core-components/typography';
import { Products } from '../../data';

import './made-in-alfa.css';

function MadeInAlfa() {
  return (
    <section className="alfa-made container">
      <Typography.TitleResponsive tag="h1" className="alfa-made__title">
        Сделано в Альфе
      </Typography.TitleResponsive>
      <p className="alfa-made__text">Хотим каждую из этих вещей! Себе, родным и друзьям</p>
      <CatalogList products={Products} />
    </section>
  );
}

export default MadeInAlfa;
