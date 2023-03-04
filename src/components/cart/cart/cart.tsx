import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CartPanelContext } from '../../../context/cart-panel-context';
import { selectCartTotalCost, selectIsCartLength } from '../../../store/products-slice/selectors';
import CartPanel from '../cart-panel/cart-panel';

import styles from './style.module.css';

function Cart() {
  const [open, setOpen] = useState(false);
  const cartLength = useSelector(selectIsCartLength);
  const cartTotal = useSelector(selectCartTotalCost);

  const toggleModalOpen = () => setOpen(!open);
  const handleModalClose = () => {
    setOpen(false);
  };

  const context = {
    closeModal: handleModalClose,
  };

  return (
    <>
      <button
        className={styles.button}
        type="button"
        onClick={toggleModalOpen}
        data-testid="cart-button">
        <svg
          role="img"
          stroke="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          viewBox="0 0 64 64">
          <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M44 18h10v45H10V18h10z" />
          <path
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M22 24V11c0-5.523 4.477-10 10-10s10 4.477 10 10v13"
          />
        </svg>
        <div className={styles.amount}>{cartLength}</div>
      </button>

      <CartPanelContext.Provider value={context}>
        <CartPanel onClose={toggleModalOpen} isOpen={open} total={cartTotal} />
      </CartPanelContext.Provider>
    </>
  );
}

export default Cart;
