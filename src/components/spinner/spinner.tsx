import { Spinner as AlfaSpinner } from '@alfalab/core-components/spinner';
import styles from './style.module.css';

function Spinner() {
  return (
    <div className={styles.spinner} data-testid="spinner">
      <AlfaSpinner className={styles.circle} visible={true} size="m" />
    </div>
  );
}

export default Spinner;
