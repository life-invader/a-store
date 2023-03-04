import styles from './style.module.css';

function Contacts() {
  return (
    <section className={`${styles.contacts} container`}>
      <h1 className={styles.title}>Контакты</h1>

      <p className={styles.text}>+7 906 061 60 20</p>
      <p className={styles.text}>info@alfabankstore.ru</p>
      <p className={`${styles.text} ${styles.address}`}>г. Москва, пр-т Андропова, 18 корп. 3</p>

      <p className={styles.text}>пн-чт:</p>
      <p className={styles.text}>10:00—19:00</p>
      <p className={styles.text}>пт:</p>
      <p className={styles.text}>10:00—17:30</p>

      <div className={styles.wrapper}>
        <p className={styles.text}>Принимаем к оплате карты Visa, Mastercard, МИР.</p>
        <a
          className={styles.policy}
          href="https://store.alfabank.ru/policy"
          target="_blank"
          rel="noreferrer">
          Политика конфиденциальностии обработки персональных данных
        </a>
      </div>

      <section className={styles.map}>
        <h2 className="visually-hidden">Как добраться до Альфа стора</h2>
        <iframe
          className={styles.frame}
          title="Альфа стор. Как добраться"
          src="https://yandex.ru/map-widget/v1/?from=api-maps&indoorLevel=1&ll=37.664536%2C55.694266&mode=whatshere&origin=jsapi_2_1_79&whatshere%5Bpoint%5D=37.662423%2C55.694318&whatshere%5Bzoom%5D=17&z=17"
          width="760"
          height="350"
          loading="lazy"
          allowFullScreen={false}
        />
      </section>
    </section>
  );
}

export default Contacts;
