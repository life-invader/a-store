import './cart-item.css';

function CartItem() {
  return (
    <div className="cart-item">
      <img className="cart-item__img" src="" alt="Картинка товара" />
      <div className="cart-item__info">
        <p className="cart-item__option">цвет: красный</p>
        <p className="cart-item__option">размер: S</p>
        <p className="cart-item__option">номер стикера: 1</p>
      </div>
    </div>
  );
}

export default CartItem;
