import CatalogList from '../../components/catalog/catalog-list/catalog-list';
import { CustomDesignProducts } from '../../data';

import './custom-design.css';

function CustomDesign() {
  const { groups } = CustomDesignProducts;

  return (
    <section className="custom-design container">
      <h1 className="custom-design__title">Свой дизайн</h1>
      <p className="custom-design__text">
        Выберите вещь, а затем — цвет, размер и стикер. Перенесём стикер на вещь как на фото
      </p>

      <ul className="custom-design-list">
        {groups.map((category) => (
          <li
            className="custom-design-list__item"
            key={category.id}
            data-testid="custom-design-group">
            <CatalogList
              products={category.products}
              title={category.title}
              description={category.description}
            />
          </li>
        ))}
      </ul>

      <footer className="custom-design__footer">
        Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить
        сразу несколько стикеров на одну вещь.
      </footer>
    </section>
  );
}

export default CustomDesign;
