import { useEffect } from 'react';
import { PaymentOptions, ShipmentOptions } from '../../../constants/common';
import { SubmitHandler, useForm } from 'react-hook-form';
import { OrderInitValues } from './validation';
import { formatPrice } from '../../../utils/format-price';
import { useDispatch } from 'react-redux';
import { productsActions } from '../../../store/products-slice/products-slice';
import type { IFormValues, IOrderFormProps } from './type';

import styles from './style.module.css';

const { clearCart } = productsActions;

function OrderForm({ onShipmentChange, onClose }: IOrderFormProps) {
  const dispatch = useDispatch();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>(OrderInitValues);

  const submitForm: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
    reset();
    dispatch(clearCart());
    onClose();
  };

  const shipmentOption = watch('deliveryType');
  useEffect(() => {
    const index = ShipmentOptions.findIndex((item) => {
      return shipmentOption === item.value;
    });
    onShipmentChange(index);
  }, [onShipmentChange, shipmentOption]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
      <ul className={styles.list}>
        <li>
          <label className={styles.label} htmlFor="name">
            ФИО
          </label>
          <input
            className={`${styles.input} ${errors.name ? styles.invalid : ''}`}
            type="text"
            id="name"
            placeholder="Фамилия Имя Отчество"
            {...register('name')}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </li>

        <li>
          <label className={styles.label} htmlFor="email">
            e-mail
          </label>
          <input
            className={`${styles.input} ${errors.email ? styles.invalid : ''}`}
            type="text"
            id="email"
            placeholder="example@site.ru"
            {...register('email')}
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </li>

        <li>
          <label className={styles.label} htmlFor="phone">
            Телефон
          </label>
          <input
            className={`${styles.input} ${errors.phone ? styles.invalid : ''}`}
            type="tel"
            id="phone"
            placeholder="+7 000 000 00 00"
            {...register('phone')}
          />
          {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
        </li>

        <li>
          <label className={styles.label} htmlFor="address">
            Адрес (если вы выбрали самовывоз — оставьте поле пустым)
          </label>
          <input
            className={styles.input}
            type="text"
            id="address"
            placeholder="Индекс, город, улица, дом, квартира"
            {...register('address')}
          />
        </li>

        <li>
          <h3 className={styles['sublist-title']}>Доставка</h3>
          <ul className={styles.sublist}>
            {ShipmentOptions.map(({ id, cost, value, title }) => {
              const shipmentCost = cost ? ` — ${formatPrice(cost)} ₽` : '';

              return (
                <li key={id}>
                  <label className={styles['radio-label']} htmlFor={value}>
                    <input
                      className={`${styles['radio-input']} visually-hidden`}
                      type="radio"
                      id={value}
                      value={value}
                      {...register('deliveryType')}
                    />
                    <span>
                      {title}
                      {shipmentCost}
                    </span>
                    <span className={styles['custom-radio']} />
                  </label>
                </li>
              );
            })}
            {errors.deliveryType && <p className={styles.error}>{errors.deliveryType.message}</p>}
          </ul>
        </li>

        <li>
          <label className={styles.label} htmlFor="promo">
            Промокод
          </label>
          <p className={styles['input-wrapper']}>
            <input className={styles['input-promo']} type="text" id="promo" />
            <button className={styles['promo-button']} type="button">
              Поверить
            </button>
          </p>
        </li>

        <li>
          <label
            className={`${styles['checkbox-label']} ${errors.policy ? styles.invalid : ''}`}
            htmlFor="policy">
            <input
              className={`${styles['checkbox-input']} visually-hidden`}
              type="checkbox"
              id="policy"
              {...register('policy')}
            />
            <span>Согласен с политикой конфиденциальности и обработки персональных данных</span>
            <span className={styles['custom-checkbox']} />
            {errors.policy && <p className={styles.error}>{errors.policy.message}</p>}
          </label>
        </li>

        <li>
          <label className={styles.label} htmlFor="comment">
            Комментарий к заказу
          </label>
          <textarea className={styles.textarea} id="comment" />
        </li>

        <li>
          <p className={styles.text}>
            Выберите способ оплаты «Промокод», если ваш заказ не превышает сумму промокода. Если
            больше — выберите оплату картой.
          </p>
        </li>

        <li>
          <h3 className={styles['sublist-title']}>Способ оплаты</h3>
          <ul className={`${styles.sublist} ${errors.paymentType ? styles.invalid : ''}`}>
            {PaymentOptions.map(({ id, title, value }) => {
              return (
                <li key={id}>
                  <label className={styles['radio-label']} htmlFor={value}>
                    <input
                      className={`${styles['radio-input']} visually-hidden`}
                      type="radio"
                      id={value}
                      value={value}
                      {...register('paymentType')}
                    />
                    <span>{title}</span>
                    <span className={styles['custom-radio']} />
                  </label>
                </li>
              );
            })}
          </ul>
          {errors.paymentType && <p className={styles.error}>{errors.paymentType.message}</p>}
        </li>
      </ul>

      <button className={styles.button} type="submit">
        Дальше
      </button>
    </form>
  );
}

export default OrderForm;
