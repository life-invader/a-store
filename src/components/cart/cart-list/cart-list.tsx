import { generateUniqueKey } from '../../../utils/utils';
import { useSelector } from 'react-redux';
import { selectCart } from '../../../store/products-slice/selectors';
import CartElement from '../cart-element/cart-element';

import styles from './style.module.css';

function CartList() {
  const cart = useSelector(selectCart);
  return (
    <div>
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
    </div>
  );
}

export default CartList;
