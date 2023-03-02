import PromoBlock from '../../components/promo-block/promo-block';
import { PromoData } from '../../constants/common';
import styles from './style.module.css';

function MainPage() {
  return (
    <>
      <h1 className="visually-hidden">Магазин мерча Альфа Банка</h1>
      <div>
        <ul className={styles.list}>
          {PromoData.map(({ title, imgSrc, pageLink, id }) => (
            <li key={id}>
              <PromoBlock title={title} imgSrc={imgSrc} pageLink={pageLink} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MainPage;
