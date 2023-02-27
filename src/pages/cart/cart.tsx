import OrderForm from './order-form/order-form';
import CartItem from './cart-item/cart-item';
import './cart.css';

function Cart() {
  return (
    <div className="cart container">
      <OrderForm />

      <ul className="cart__list">
        <li className="cart__list-item">
          <CartItem />
        </li>

        <li className="cart__list-item">
          <CartItem />
        </li>
      </ul>
    </div>
  );
}

export default Cart;
