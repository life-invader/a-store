import PromoBlock from '../../components/promo-block/promo-block';
import './main-page.css';

const promoData = [
  {
    title: 'Сделано в Альфе',
    imgSrc: '',
    pageLink: '/sdelano-v-alfe',
  },
  {
    title: 'Свой дизайн',
    imgSrc: '',
    pageLink: '/svoy-dizain',
  },
];

function MainPage() {
  return (
    <section className="main-page">
      <ul className="main-page__list">
        {promoData.map(({ title, imgSrc, pageLink }) => (
          <li className="main-page__list-item">
            <PromoBlock title={title} imgSrc={imgSrc} pageLink={pageLink} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MainPage;
