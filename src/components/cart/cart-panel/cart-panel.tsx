import { SidePanelResponsive } from '@alfalab/core-components/side-panel/Component.responsive';
import CartList from '../cart-list/cart-list';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../constants/app-routes';
import type { ICartPanelProps } from './type';

import styles from './style.module.css';

function CartPanel({ isOpen, onClose, total }: ICartPanelProps) {
  const navigate = useNavigate();

  const nextClickHandler = () => {
    navigate(AppRoutes.Checkout, { state: { safe: true } });
    onClose();
  };

  return (
    <SidePanelResponsive
      open={isOpen}
      onClose={onClose}
      placement="right"
      nativeScrollbar={false}
      breakpoint={600}
      className={styles.menu}>
      <SidePanelResponsive.Header hasCloser={true} sticky={true} title={'Ваш заказ'} />

      <SidePanelResponsive.Content>
        <div className={styles.wrapper}>
          <CartList />
        </div>
        <p className={styles.total} data-testid="cart-price">
          Сумма: {total} ₽
        </p>
      </SidePanelResponsive.Content>

      <SidePanelResponsive.Footer sticky={true}>
        <button className={styles.button} type="button" onClick={nextClickHandler}>
          Дальше
        </button>
      </SidePanelResponsive.Footer>
    </SidePanelResponsive>
  );
}

export default CartPanel;
