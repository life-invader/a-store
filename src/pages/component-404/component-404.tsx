import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/routes';
import './style.css';

function Component404() {
  return (
    <section className="not-found">
      <div className="not-found__wrapper">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">
          Ого! Да ты потерялся. Страница которую ты ищешь не существует. Как ты сюда попал загадка.
          Но ты можешь кликнуть на{' '}
          <Link className="not-found__link" to={AppRoutes.Main}>
            кнопку
          </Link>{' '}
          и пойти{' '}
          <Link className="not-found__link" to={AppRoutes.Main}>
            домой
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

export default Component404;
