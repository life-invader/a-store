import { Link } from 'react-router-dom';
import './side-menu-element.css';

interface ISideMenuElementProps {
  href: string;
  title: string;
  onClick: () => void;
}

function SideMenuElement({ href, title, onClick }: ISideMenuElementProps) {
  return (
    <Link className="menu-link" to={href} onClick={onClick}>
      {title}
    </Link>
  );
}

export default SideMenuElement;
