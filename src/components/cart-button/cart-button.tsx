import { Link } from 'react-router-dom';
import './cart-button.css';

function CartButton() {
  return (
    <Link className="cart-button" to="/cart" data-testid="cart-button">
      <div className="cart-button__amount">1</div>
    </Link>
  );
}

export default CartButton;
