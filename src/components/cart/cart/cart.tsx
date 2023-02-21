import { useState } from 'react';
import CartPanel from '../cart-panel/cart-panel';

import styles from './cart.module.css';

function CartButton() {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(!open);

  return (
    <>
      <button className={styles['cart-button']} type="button" onClick={handleModalOpen}>
        <svg
          role="img"
          stroke="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          viewBox="0 0 64 64">
          <path fill="none" stroke-width="2" stroke-miterlimit="10" d="M44 18h10v45H10V18h10z" />
          <path
            fill="none"
            stroke-width="2"
            stroke-miterlimit="10"
            d="M22 24V11c0-5.523 4.477-10 10-10s10 4.477 10 10v13"
          />
        </svg>
        <div className={styles.amount}>12</div>
      </button>

      <CartPanel onClose={handleModalOpen} isOpen={open} />
    </>
  );
}

export default CartButton;
