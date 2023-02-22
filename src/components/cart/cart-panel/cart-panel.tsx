import { SidePanelResponsive } from '@alfalab/core-components/side-panel/Component.responsive';
import CartList from '../cart-list/cart-list';
import styles from './style.module.css';
import { useSelector } from 'react-redux';
import { selectCartTotalCost } from '../../../store/products-slice/selectors';
import { formatPrice } from '../../../utils/utils';
import type { ICartItem } from '../../../types/types';

interface ICartPanelProps {
  cart: ICartItem[];
  isOpen: boolean;
  onClose: () => void;
}

function CartPanel({ isOpen, onClose, cart }: ICartPanelProps) {
  const cartTotal = useSelector(selectCartTotalCost);

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
        <CartList cart={cart} />
        <p className={styles.total}>Сумма: {formatPrice(cartTotal)} ₽</p>
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
