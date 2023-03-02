import { Link } from 'react-router-dom';
import type { ISideMenuElementProps } from './type';
import styles from './style.module.css';

function SideMenuElement({ href, title, onClick }: ISideMenuElementProps) {
  return (
    <Link className={styles.link} to={href} onClick={onClick}>
      {title}
    </Link>
  );
}

export default SideMenuElement;
