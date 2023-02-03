import { Link } from 'react-router-dom';
import './side-menu-element.css';

function SideMenuElement({ href, title, onClick }: any) {
  return (
    <Link className="menu-link" to={href} onClick={onClick}>
      {title}
    </Link>
  );
}

export default SideMenuElement;
