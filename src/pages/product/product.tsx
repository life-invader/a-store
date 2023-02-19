import { useParams } from 'react-router-dom';
import { formatPrice } from '../../utils/utils';
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
import Spinner from '../../components/spinner/spinner';
import Error from '../../components/error/error';

import './product.css';

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
      <div className="product container" data-testid="product-test">
        <Error />
      </div>
    );
  }

  if (showLoader) {
    return (
      <div className="product container" data-testid="product-test">
        <Spinner />
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const { title, price, images, description } = product!;

  return (
    <div className="product container" data-testid="product-test">
      <div className="product__wrapper">
        <Gallery images={images} title={title} />
        <div className="product__info">
          <p className="product__title">{title}</p>
          <p className="product__price">{formatPrice(price)} ₽</p>
          <ProductForm {...product} />
          <p className="product__description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
