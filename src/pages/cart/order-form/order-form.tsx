import './order-form.css';

function OrderForm() {
  return (
    <form className="cart__order-form">
      <ul>
        <li>
          <label>
            <span>ФИО</span>
            <input type="text" />
          </label>
        </li>

        <li>
          <label>
            <span>e-mail</span>
            <input type="email" />
          </label>
        </li>

        <li>
          <label>
            <span>Телефон</span>
            <input type="tel" />
          </label>
        </li>
      </ul>
    </form>
  );
}

export default OrderForm;
