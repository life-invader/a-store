import { Link } from 'react-router-dom';
import './promo-block.css';

interface IPromoBlock {
  title: string;
  imgSrc: string;
  pageLink: string;
}

function PromoBlock({ title, imgSrc, pageLink }: IPromoBlock) {
  return (
    <Link className="promo" to={pageLink} style={{ backgroundImage: `url(${imgSrc})` }}>
      <h2 className="promo__title">{title}</h2>
    </Link>
  );
}

export default PromoBlock;
