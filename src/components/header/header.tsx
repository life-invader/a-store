import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        A-Store
      </Link>
      <p className="header__menu-button">Меню</p>
    </header>
  );
}

export default Header;
