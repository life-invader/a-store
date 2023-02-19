import { Spinner as AlfaSpinner } from '@alfalab/core-components/spinner';
import './style.css';

function Spinner() {
  return (
    <div className="spinner" data-testid="spinner">
      <AlfaSpinner className="spinner__circle" visible={true} size="m" />
    </div>
  );
}

export default Spinner;
