import { useDispatch } from 'react-redux';
import { productsActions } from '../../../store/products-slice/products-slice';
import { formatPrice } from '../../../utils/utils';
import { AppRoutes } from '../../../constants/app-routes';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartPanelContext } from '../../../context/cart-panel-context';
import type { ICartElementProps } from './type';
import type { ICartItem } from '../../../types/types';
import type { OptionNameType } from '../cart-list/type';

import styles from './style.module.css';

const { incrementCartItem, decrementCartItem, removeCartItem } = productsActions;
const OptionName: OptionNameType = {
  size: 'Размер',
  color: 'Цвет',
  model: 'Модель',
  stickerNumber: 'Номер стикера',
};

function CartElement({ product }: ICartElementProps) {
  const dispatch = useDispatch();
  const { closeModal } = useContext(CartPanelContext);

  const incrementItemQuantity = (element: ICartItem) => () => {
    dispatch(incrementCartItem(element));
  };

  const decrementItemQuantity = (element: ICartItem) => () => {
    dispatch(decrementCartItem(element));
  };

  const removeItemQuantity = (element: ICartItem) => () => {
    dispatch(removeCartItem(element));
  };

  const onProductClick = () => {
    closeModal();
  };

  const { item, itemTotal, quantity, options } = product;
  const productOptions = Object.keys(options) as Array<keyof typeof options>;

  return (
    <div className={styles.product}>
      <img className={styles.img} src={item.preview} alt={item.title} />

      <div className={styles.body}>
        <div>
          <h3 className={styles.title}>
            <Link className={styles.link} to={AppRoutes.Product(item.id)} onClick={onProductClick}>
              {item.title}
            </Link>
          </h3>
          <div className={styles.options}>
            {productOptions.map((item) => (
              <p className={styles.option} key={item}>
                {OptionName[item]}: {options[item]}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.wrapper}>
            <button className={styles['minus-button']} onClick={decrementItemQuantity(product)}>
              -
            </button>
            <p>{quantity}</p>
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
