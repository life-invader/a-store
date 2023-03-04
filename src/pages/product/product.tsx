import { useParams } from 'react-router-dom';
import ProductForm from './product-form/product-form';
import Gallery from './gallery/gallery';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductAction } from '../../store/products-slice/actions';
import {
  selectCurrentProduct,
  selectIsError,
  selectIsLoading,
} from '../../store/products-slice/selectors';
import { useSpinnerDelay } from '../../hooks/use-spinner-delay';
import { formatPrice } from '../../utils/format-price';
import Spinner from '../../components/spinner/spinner';
import Error from '../../components/error/error';

import styles from './style.module.css';

function Product() {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectCurrentProduct);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const showLoader = useSpinnerDelay(isLoading);

  useEffect(() => {
    dispatch(getProductAction(productId!));
  }, [dispatch, productId]);

  if (isError) {
    return (
      <div className={`${styles.product} container`} data-testid="product-test">
        <Error />
      </div>
    );
  }

  if (showLoader) {
    return (
      <div className={`${styles.product} container`} data-testid="product-test">
        <Spinner />
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const { title, price, images, description } = product;

  return (
    <div className={`${styles.product} container`} data-testid="product-test">
      <div className={styles.wrapper}>
        <Gallery images={images} title={title} />
        <div>
          <p>{title}</p>
          <p className={styles.price}>{formatPrice(price)} ₽</p>
          <ProductForm {...product} />
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
