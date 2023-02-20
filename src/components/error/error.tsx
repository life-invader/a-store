import './style.css';

function Error() {
  const onButtonClick = () => {
    window.location.reload();
  };

  return (
    <div className="error">
      <div className="error__wrapper">
        <p className="error__text">Что-то пошло не так(((</p>
        <button className="error__button" onClick={onButtonClick}>
          Попробовать еще раз
        </button>
      </div>
    </div>
  );
}

export default Error;
