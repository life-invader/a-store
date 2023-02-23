import { formatPrice, generateUniqueKey } from '../../../utils/utils';
import { useSelector } from 'react-redux';
import { selectCart, selectCartTotalCost } from '../../../store/products-slice/selectors';
import CartElement from '../cart-element/cart-element';

import styles from './style.module.css';

function CartList() {
  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotalCost);

  return (
    <>
      <ul className={styles.list}>
        {cart.map((element) => {
          const { item, options } = element;

          return (
            <li key={generateUniqueKey(item.id, options)} data-testid="cart-list-item">
              <CartElement product={element} />
            </li>
          );
        })}
      </ul>

      <p className={styles.total} data-testid="cart-price">
        Сумма: {formatPrice(cartTotal)} ₽
      </p>
    </>
  );
}

export default CartList;
