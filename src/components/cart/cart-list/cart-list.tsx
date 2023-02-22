import { formatPrice } from '../../../utils/utils';
import type { ICartItem, IProductOptions } from '../../../types/types';
import styles from './style.module.css';
import { useDispatch } from 'react-redux';
import { productsActions } from '../../../store/products-slice/products-slice';

const OptionTitle: {
  [K in keyof IProductOptions]: string;
} = {
  size: 'Размер',
  color: 'Цвет',
  model: 'Модель',
  stickerNumber: 'Номер стикера',
};

interface ICartListProps {
  cart: ICartItem[];
}

function CartList({ cart }: ICartListProps) {
  const dispatch = useDispatch();

  const incrementItemQuantity = (element: ICartItem) => () => {
    dispatch(productsActions.incrementCartItem(element));
  };

  const decrementItemQuantity = (element: ICartItem) => () => {
    dispatch(productsActions.decrementCartItem(element));
  };

  const removeItemQuantity = (element: ICartItem) => () => {
    dispatch(productsActions.removeCartItem(element));
  };

  return (
    <ul className={styles.list}>
      {cart.map((element) => {
        const { item, itemTotal, quantity, options } = element;
        return (
          <li className="item">
            <div className={styles.product}>
              <img className={styles.img} src={item.preview} alt={item.title} />

              <div className={styles['product-body']}>
                <div className={styles['product-info']}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <div className={styles.options}>
                    {(Object.keys(options) as Array<keyof typeof options>).map((item) => (
                      <p className={styles.option}>
                        {OptionTitle[item]}: {options[item]}
                      </p>
                    ))}
                  </div>
                </div>

                <div className={styles['product-footer']}>
                  <div className={styles['input-wrapper']}>
                    <button
                      className={styles['minus-button']}
                      onClick={decrementItemQuantity(element)}>
                      -
                    </button>
                    <input className={styles.input} type="number" value={quantity} />
                    <button
                      className={styles['plus-button']}
                      onClick={incrementItemQuantity(element)}>
                      +
                    </button>
                  </div>
                  <p className={styles.price}>{formatPrice(itemTotal)} ₽</p>
                  <button
                    className={styles['remove-button']}
                    type="button"
                    onClick={removeItemQuantity(element)}>
                    X
                  </button>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CartList;
