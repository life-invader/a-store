import { ProductMock } from '../../../mocks/api-product';
import styles from './style.module.css';

function CartList() {
  return (
    <ul className={styles.list}>
      <li className="item">
        <div className={styles.product}>
          <img className={styles.img} src={ProductMock.preview} alt={ProductMock.title} />

          <div className={styles['product-body']}>
            <div className={styles['product-info']}>
              <h3 className={styles.title}>{ProductMock.title}</h3>
              <div className={styles.options}>
                <p className={styles.option}>Цвет: красный</p>
                <p className={styles.option}>Размер S</p>
              </div>
            </div>

            <div className={styles['product-footer']}>
              <div className={styles['input-wrapper']}>
                <button className={styles['minus-button']}>-</button>
                <input className={styles.input} type="number" placeholder="1" />
                <button className={styles['plus-button']}>+</button>
              </div>
              <p className={styles.price}>4 899 ₽</p>
              <button className={styles['remove-button']} type="button">
                X
              </button>
            </div>
          </div>
        </div>
      </li>

      <li className="item">
        <div className={styles.product}>
          <img className={styles.img} src={ProductMock.preview} alt={ProductMock.title} />

          <div className={styles['product-body']}>
            <div className={styles['product-info']}>
              <h3 className={styles.title}>{ProductMock.title}</h3>
              <div className={styles.options}>
                <p className={styles.option}>Цвет: красный</p>
                <p className={styles.option}>Размер S</p>
              </div>
            </div>

            <div className={styles['product-footer']}>
              <div className={styles['input-wrapper']}>
                <button className={styles['minus-button']}>-</button>
                <input className={styles.input} type="number" placeholder="1" />
                <button className={styles['plus-button']}>+</button>
              </div>
              <p className={styles.price}>4 899 ₽</p>
              <button className={styles['remove-button']} type="button">
                X
              </button>
            </div>
          </div>
        </div>
      </li>

      <li className="item">
        <div className={styles.product}>
          <img className={styles.img} src={ProductMock.preview} alt={ProductMock.title} />

          <div className={styles['product-body']}>
            <div className={styles['product-info']}>
              <h3 className={styles.title}>{ProductMock.title}</h3>
              <div className={styles.options}>
                <p className={styles.option}>Цвет: красный</p>
                <p className={styles.option}>Размер S</p>
              </div>
            </div>

            <div className={styles['product-footer']}>
              <div className={styles['input-wrapper']}>
                <button className={styles['minus-button']}>-</button>
                <input className={styles.input} type="number" placeholder="1" />
                <button className={styles['plus-button']}>+</button>
              </div>
              <p className={styles.price}>4 899 ₽</p>
              <button className={styles['remove-button']} type="button">
                X
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default CartList;
