import { Link } from 'react-router-dom';
import type { IPromoBlockProps } from './type';
import styles from './style.module.css';

function PromoBlock({ title, imgSrc, pageLink }: IPromoBlockProps) {
  return (
    <Link className={styles.promo} to={pageLink} style={{ backgroundImage: `url(${imgSrc})` }}>
      <h2 className={styles.title}>{title}</h2>
    </Link>
  );
}

export default PromoBlock;
