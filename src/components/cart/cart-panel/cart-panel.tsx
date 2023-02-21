import { SidePanelResponsive } from '@alfalab/core-components/side-panel/Component.responsive';
import CartList from '../cart-list/cart-list';
import styles from './style.module.css';

function CartPanel({ isOpen, onClose }: any) {
  return (
    <SidePanelResponsive
      open={isOpen}
      onClose={onClose}
      placement="right"
      nativeScrollbar={false}
      breakpoint={600}
      className={styles.menu}>
      <SidePanelResponsive.Header
        className={styles.header}
        hasCloser={true}
        sticky={true}
        title={'Ваш заказ'}
      />

      <SidePanelResponsive.Content className={styles.content}>
        <CartList />
        <p className={styles.total}>Сумма: 9 798 ₽</p>
      </SidePanelResponsive.Content>

      <SidePanelResponsive.Footer className={styles.footer} sticky={true}>
        <button className={styles.button} type="button" onClick={onClose}>
          Дальше
        </button>
      </SidePanelResponsive.Footer>
    </SidePanelResponsive>
  );
}

export default CartPanel;
