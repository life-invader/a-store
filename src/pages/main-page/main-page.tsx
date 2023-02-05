import PromoBlock from '../../components/promo-block/promo-block';
import { PromoData } from '../../constants/common';
import './main-page.css';

function MainPage() {
  return (
    <section className="main-page">
      <ul className="main-page__list">
        {PromoData.map(({ title, imgSrc, pageLink, id }) => (
          <li key={id} className="main-page__list-item">
            <PromoBlock title={title} imgSrc={imgSrc} pageLink={pageLink} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MainPage;
