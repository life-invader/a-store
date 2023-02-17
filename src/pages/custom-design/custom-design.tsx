import CatalogList from '../../components/catalog/catalog-list/catalog-list';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCustomProductsAction } from '../../store/products-slice/actions';
import {
  selectCategories,
  selectIsError,
  selectIsLoading,
} from '../../store/products-slice/selectors';
import Spinner from '../../components/spinner/spinner';
import { useSpinnerDelay } from '../../hooks/use-spinner-delay';
import Error from '../../components/error/error';

import './custom-design.css';

function CustomDesign() {
  const dispatch = useDispatch();
  const groups = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const showLoader = useSpinnerDelay(isLoading);

  useEffect(() => {
    dispatch(getCustomProductsAction());
  }, [dispatch]);

  const data = isError ? (
    <Error />
  ) : showLoader ? (
    <Spinner />
  ) : (
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
  );

  return (
    <section className="custom-design container">
      <h1 className="custom-design__title">Свой дизайн</h1>
      <p className="custom-design__text">
        Выберите вещь, а затем — цвет, размер и стикер. Перенесём стикер на вещь как на фото
      </p>
      {data}
      <footer className="custom-design__footer">
        Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить
        сразу несколько стикеров на одну вещь.
      </footer>
    </section>
  );
}

export default CustomDesign;
