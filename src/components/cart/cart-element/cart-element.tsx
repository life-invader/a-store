import { useDispatch } from 'react-redux';
import { productsActions } from '../../../store/products-slice/products-slice';
import { formatPrice } from '../../../utils/utils';
import type { ICartElementProps } from './type';
import type { ICartItem } from '../../../types/types';
import type { OptionNameType } from '../cart-list/type';

import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../constants/app-routes';

const { incrementCartItem, decrementCartItem, removeCartItem } = productsActions;
const OptionName: OptionNameType = {
  size: 'Размер',
  color: 'Цвет',
  model: 'Модель',
  stickerNumber: 'Номер стикера',
};

function CartElement({ product }: ICartElementProps) {
  const dispatch = useDispatch();

  const incrementItemQuantity = (element: ICartItem) => () => {
    dispatch(incrementCartItem(element));
  };

  const decrementItemQuantity = (element: ICartItem) => () => {
    dispatch(decrementCartItem(element));
  };

  const removeItemQuantity = (element: ICartItem) => () => {
    dispatch(removeCartItem(element));
  };

  const { item, itemTotal, quantity, options } = product;
  const productOptions = Object.keys(options) as Array<keyof typeof options>;

  return (
    <div className={styles.product}>
      <img className={styles.img} src={item.preview} alt={item.title} />

      <div className={styles['product-body']}>
        <div className={styles['product-info']}>
          <h3 className={styles.title}>
            <Link className={styles.link} to={AppRoutes.Product(item.id)}>
              {item.title}
            </Link>
          </h3>
          <div className={styles.options}>
            {productOptions.map((item) => (
              <p className={styles.option}>
                {OptionName[item]}: {options[item]}
              </p>
            ))}
          </div>
        </div>

        <div className={styles['product-footer']}>
          <div className={styles['input-wrapper']}>
            <button className={styles['minus-button']} onClick={decrementItemQuantity(product)}>
              -
            </button>
            <input className={styles.input} type="number" value={quantity} />
            <button className={styles['plus-button']} onClick={incrementItemQuantity(product)}>
              +
            </button>
          </div>
          <p className={styles.price}>{formatPrice(itemTotal)} ₽</p>
          <button
            className={styles['remove-button']}
            type="button"
            onClick={removeItemQuantity(product)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartElement;
