import { useState } from 'react';
import OrderForm from './order-form/order-form';
import CartList from '../../components/cart/cart-list/cart-list';
import { selectCartTotalCost, selectIsCartEmpty } from '../../store/products-slice/selectors';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../utils/utils';
import { ShipmentOptions } from '../../constants/common';

import styles from './style.module.css';

function Cart() {
  const isEmpty = useSelector(selectIsCartEmpty);
  const cartTotal = useSelector(selectCartTotalCost);
  const [currentShipment, setCurrentShipment] = useState(0);

  const price = formatPrice(cartTotal);
  const shipmentCost = ShipmentOptions[currentShipment].cost
    ? `: ${formatPrice(ShipmentOptions[currentShipment].cost)} ₽`
    : '';
  const total = formatPrice(cartTotal + ShipmentOptions[currentShipment].cost);

  const onShipmentChange = (index: number) => {
    setCurrentShipment(index);
  };

  return (
    <div className="container">
      <section className={styles.cart}>
        <div className={styles['form-wrapper']}>
          <OrderForm onShipmentChange={onShipmentChange} />
        </div>
        <div>
          <div className={styles['list-wrapper']}>
            <CartList />
            {isEmpty && (
              <div className={styles.wrapper}>
                <p className={styles['cart-price']} data-testid="cart-price">
                  Сумма: {price} ₽
                </p>

                <div className={styles.info}>
                  <p>Сумма: {price} ₽</p>
                  <p>
                    {ShipmentOptions[currentShipment].title}
                    {shipmentCost}
                  </p>
                  <p className={styles.total}>Итоговая сумма: {total} ₽</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
