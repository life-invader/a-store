import { useEffect } from 'react';
import { PaymentOptions, ShipmentOptions } from '../../../constants/common';
import { formatPrice } from '../../../utils/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import type { IFormValues, IOrderFormProps } from './type';
import styles from './style.module.css';
import { OrderInitValues } from './validation';

function OrderForm({ onShipmentChange }: IOrderFormProps) {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>(OrderInitValues);

  const submitForm: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };

  const shipmentOption = watch('shipment');
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
          <label className={styles.label} htmlFor="number">
            Телефон
          </label>
          <input
            className={`${styles.input} ${errors.number ? styles.invalid : ''}`}
            type="tel"
            id="number"
            placeholder="+7 000 000 00 00"
            {...register('number')}
          />
          {errors.number && (
            <p className={styles.error}>{errors.number.message || 'Обязательное поле'}</p>
          )}
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
                      {...register('shipment')}
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
            {errors.shipment && <p className={styles.error}>Обязательное поле</p>}
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
          <ul className={`${styles.sublist} ${errors.payment ? styles.invalid : ''}`}>
            {PaymentOptions.map(({ id, title, value }) => {
              return (
                <li key={id}>
                  <label className={styles['radio-label']} htmlFor={value}>
                    <input
                      className={`${styles['radio-input']} visually-hidden`}
                      type="radio"
                      id={value}
                      value={value}
                      {...register('payment')}
                    />
                    <span>{title}</span>
                    <span className={styles['custom-radio']} />
                  </label>
                </li>
              );
            })}
          </ul>
          {errors.payment && <p className={styles.error}>Выберите способ оплаты</p>}
        </li>
      </ul>

      <button className={styles.button} type="submit">
        Дальше
      </button>
    </form>
  );
}

export default OrderForm;
