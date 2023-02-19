import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../constants/routes';
import './style.css';

function ErrorPage() {
  const navigate = useNavigate();

  const linkClickHandler = () => {
    navigate(AppRoutes.Main);
    window.location.reload();
  };

  return (
    <section className="error-page">
      <div className="error-page__wrapper">
        <h1 className="error-page__title">Все сломалось</h1>
        <p className="error-page__text">
          Давай перейдем на{' '}
          <Link className="error-page__link" to={AppRoutes.Main} onClick={linkClickHandler}>
            главную
          </Link>{' '}
          и начнем с начала
        </p>
      </div>
    </section>
  );
}

export default ErrorPage;
