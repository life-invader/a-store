import OrderForm from './order-form/order-form';
import CartList from '../../components/cart/cart-list/cart-list';
import { selectCartTotalCost, selectIsCartEmpty } from '../../store/products-slice/selectors';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../utils/utils';

import styles from './style.module.css';

function Cart() {
  const isEmpty = useSelector(selectIsCartEmpty);
  const cartTotal = useSelector(selectCartTotalCost);
  const price = formatPrice(cartTotal);
  const total = formatPrice(cartTotal + 350);

  return (
    <div className="container">
      <section className={styles.cart}>
        <div className={styles['form-wrapper']}>
          <OrderForm />
        </div>
        <div>
          <CartList />
          {isEmpty && (
            <>
              <p className={styles['cart-price']} data-testid="cart-price">
                Сумма: {price} ₽
              </p>

              <div className={styles.info}>
                <p>Сумма: {price} ₽</p>
                <p>Доставка по России: 350 ₽</p>
                <p>Итоговая сумма: {total} ₽</p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Cart;
