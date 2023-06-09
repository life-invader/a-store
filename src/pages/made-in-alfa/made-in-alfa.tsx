import CatalogList from '../../components/catalog/catalog-list/catalog-list';
import { Typography } from '@alfalab/core-components/typography';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAlfaProductsAction } from '../../store/products-slice/actions';
import {
  selectIsError,
  selectIsLoading,
  selectProducts,
} from '../../store/products-slice/selectors';
import Spinner from '../../components/spinner/spinner';
import { useSpinnerDelay } from '../../hooks/use-spinner-delay';
import Error from '../../components/error/error';

import styles from './style.module.css';

function MadeInAlfa() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const showLoader = useSpinnerDelay(isLoading);

  useEffect(() => {
    dispatch(getAlfaProductsAction());
  }, [dispatch]);

  const data = isError ? <Error /> : showLoader ? <Spinner /> : <CatalogList products={products} />;

  return (
    <section className={`${styles.page} container`}>
      <Typography.TitleResponsive tag="h1" className={styles.title}>
        Сделано в Альфе
      </Typography.TitleResponsive>
      <p className={styles.text}>Хотим каждую из этих вещей! Себе, родным и друзьям</p>
      {data}
    </section>
  );
}

export default MadeInAlfa;
