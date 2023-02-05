import { Link } from 'react-router-dom';
import './promo-block.css';

interface IPromoBlock {
  title: string;
  imgSrc: string;
  pageLink: string;
}

function PromoBlock({ title, imgSrc, pageLink }: IPromoBlock) {
  return (
    <Link className="promo" to={pageLink}>
      <h2 className="promo__title">{title}</h2>
      <img className="promo__img" src={imgSrc} alt="Картинка промо блока на главной странице" />
    </Link>
  );
}

export default PromoBlock;
