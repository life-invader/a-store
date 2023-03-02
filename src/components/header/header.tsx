import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/app-routes';
import SideMenu from '../side-menu/side-menu';

import styles from './style.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to={AppRoutes.Main}>
        A-Store
      </Link>
      <SideMenu title="Меню" />
    </header>
  );
}

export default Header;
