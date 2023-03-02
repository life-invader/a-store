import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../constants/app-routes';
import styles from './style.module.css';

function ErrorPage() {
  const navigate = useNavigate();

  const linkClickHandler = () => {
    navigate(AppRoutes.Main);
    window.location.reload();
  };

  return (
    <section className={styles.error}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Все сломалось</h1>
        <p className={styles.text}>
          Давай перейдем на{' '}
          <Link className={styles.link} to={AppRoutes.Main} onClick={linkClickHandler}>
            главную
          </Link>{' '}
          и начнем с начала
        </p>
      </div>
    </section>
  );
}

export default ErrorPage;
