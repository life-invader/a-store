import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/routes';
import SideMenu from '../side-menu/side-menu';

import './header.css';

function Header() {
  return (
    <header className="header">
      <Link className="header__link" to={AppRoutes.Main}>
        A-Store
      </Link>
      <SideMenu title="Меню" />
    </header>
  );
}

export default Header;
