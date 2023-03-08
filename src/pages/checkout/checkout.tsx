import { useEffect, useState } from 'react';
import OrderForm from './order-form/order-form';
import CartList from '../../components/cart/cart-list/cart-list';
import {
  selectCartTotalCost,
  selectIsCartEmpty,
  selectOrderStatus,
} from '../../store/products-slice/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { OrderStatus, ShipmentOptions } from '../../constants/common';
import { formatPrice } from '../../utils/format-price';
import { OrderInitValues } from './validation';
import { useForm, FormProvider } from 'react-hook-form';
import { productsActions } from '../../store/products-slice/products-slice';
import { ModalDesktop } from '@alfalab/core-components/modal/desktop';
import type { ICheckoutProps, IFormValues } from './type';

import styles from './style.module.css';

function Checkout({ onClose }: ICheckoutProps) {
  const dispatch = useDispatch();
  const methods = useForm<IFormValues>(OrderInitValues);
  const { watch, reset } = methods;

  const isEmpty = useSelector(selectIsCartEmpty);
  const cartTotal = useSelector(selectCartTotalCost);
  const orderStatus = useSelector(selectOrderStatus);
  const isOrderSuccess = orderStatus === OrderStatus.Success;
  const isOrderError = orderStatus === OrderStatus.Error;

  const [currentShipment, setCurrentShipment] = useState(0);

  const price = formatPrice(cartTotal);
  const total = formatPrice(cartTotal + ShipmentOptions[currentShipment].cost);

  const modalCloseSuccessHandler = () => {
    dispatch(productsActions.setOrderStatus(OrderStatus.Default));
    dispatch(productsActions.clearCart());
    onClose();
    reset();
  };

  const modalCloseErrorHandler = () => {
    dispatch(productsActions.setOrderStatus(OrderStatus.Default));
  };

  const shipmentOption = watch('deliveryType');
  useEffect(() => {
    const index = ShipmentOptions.findIndex((item) => {
      return shipmentOption === item.title;
    });
    setCurrentShipment(index);
  }, [shipmentOption]);

  return (
    <div className="container">
      <section className={styles.cart} data-testid="checkout">
        <div className={styles['form-wrapper']}>
          <FormProvider {...methods}>
            <OrderForm />
          </FormProvider>
        </div>
        <div>
          <div className={styles['list-wrapper']}>
            <CartList />
            {!isEmpty && (
              <div className={styles.wrapper}>
                <p className={styles['cart-price']} data-testid="cart-price">
                  Сумма: {price} ₽
                </p>

                <div className={styles.info}>
                  <p>Сумма: {price} ₽</p>
                  <p>{ShipmentOptions[currentShipment].title}</p>
                  <p className={styles.total}>Итоговая сумма: {total} ₽</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ModalDesktop
        open={isOrderSuccess || isOrderError}
        onClose={isOrderSuccess ? modalCloseSuccessHandler : modalCloseErrorHandler}
        size="s"
        hasCloser={true}
        keepMounted>
        <ModalDesktop.Header hasCloser={true} sticky={true} className={styles.modal} />
        <ModalDesktop.Content>
          {isOrderSuccess ? 'Заказ принят' : 'Что-то пошло не так'}
        </ModalDesktop.Content>
      </ModalDesktop>
    </div>
  );
}

export default Checkout;
