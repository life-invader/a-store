import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/app-routes';
import styles from './style.module.css';

function Component404() {
  return (
    <section className={styles['not-found']}>
      <div className={styles.wrapper}>
        <h1>404</h1>
        <p className={styles.text}>
          Ого! Да ты потерялся. Страница которую ты ищешь не существует. Как ты сюда попал загадка.
          Но ты можешь кликнуть на{' '}
          <Link className={styles.link} to={AppRoutes.Main}>
            кнопку
          </Link>{' '}
          и пойти{' '}
          <Link className={styles.link} to={AppRoutes.Main}>
            домой
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

export default Component404;
