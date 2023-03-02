import styles from './style.module.css';

function Error() {
  const onButtonClick = () => {
    window.location.reload();
  };

  return (
    <div className={styles.error}>
      <div className={styles.wrapper}>
        <p className={styles.text}>Что-то пошло не так(((</p>
        <button className={styles.button} onClick={onButtonClick}>
          Попробовать еще раз
        </button>
      </div>
    </div>
  );
}

export default Error;
