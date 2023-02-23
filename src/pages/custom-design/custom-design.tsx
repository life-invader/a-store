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

import styles from './style.module.css';

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
    <ul className={styles.list}>
      {groups.map((category) => (
        <li key={category.id} data-testid="custom-design-group">
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
    <section className={`${styles.page} container`}>
      <h1 className={styles.title}>Свой дизайн</h1>
      <p className={styles.text}>
        Выберите вещь, а затем — цвет, размер и стикер. Перенесём стикер на вещь как на фото
      </p>
      {data}
      <footer className={styles.footer}>
        Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить
        сразу несколько стикеров на одну вещь.
      </footer>
    </section>
  );
}

export default CustomDesign;
