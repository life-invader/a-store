import { PaymentOptions, ShipmentOptions } from '../../../constants/common';
import { formatPrice } from '../../../utils/utils';
import styles from './style.module.css';

function OrderForm() {
  return (
    <form className={styles.form}>
      <ul className={styles.list}>
        <li>
          <label className={styles.label} htmlFor="name">
            ФИО
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            placeholder="Фамилия Имя Отчество"
          />
        </li>

        <li>
          <label className={styles.label} htmlFor="email">
            e-mail
          </label>
          <input className={styles.input} type="email" id="email" placeholder="example@site.ru" />
        </li>

        <li>
          <label className={styles.label} htmlFor="number">
            Телефон
          </label>
          <input className={styles.input} type="tel" id="number" placeholder="+7 000 000 00 00" />
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
          />
        </li>

        <li>
          <h3 className={styles['sublist-title']}>Доставка</h3>
          <ul className={styles.sublist}>
            {ShipmentOptions.map(({ id, cost, option, title }) => {
              const shipmentCost = cost ? ` — ${formatPrice(cost)} ₽` : '';

              return (
                <li key={id}>
                  <label className={styles['radio-label']} htmlFor={option}>
                    <input
                      className={`${styles['radio-input']} visually-hidden`}
                      type="radio"
                      name="shipment"
                      id={option}
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
          </ul>
        </li>

        <li>
          <label className={styles.label} htmlFor="promo">
            Промокод
          </label>
          <p className={styles['input-wrapper']}>
            <input className={styles.input} type="text" id="promo" />
            <button className={styles['promo-button']} type="button">
              Поверить
            </button>
          </p>
        </li>

        <li>
          <label className={styles['checkbox-label']} htmlFor="policy">
            <input
              className={`${styles['checkbox-input']} visually-hidden`}
              type="checkbox"
              name="policy"
              id="policy"
            />
            <span>Согласен с политикой конфиденциальности и обработки персональных данных</span>
            <span className={styles['custom-checkbox']} />
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
          <ul className={styles.sublist}>
            {PaymentOptions.map(({ id, title, option }) => {
              return (
                <li key={id}>
                  <label className={styles['radio-label']} htmlFor={option}>
                    <input
                      className={`${styles['radio-input']} visually-hidden`}
                      type="radio"
                      name="payment"
                      id={option}
                    />
                    <span>{title}</span>
                    <span className={styles['custom-radio']} />
                  </label>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>

      <button className={styles.button} type="submit">
        Дальше
      </button>
    </form>
  );
}

export default OrderForm;
