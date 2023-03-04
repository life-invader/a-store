import { ModalResponsive } from '@alfalab/core-components/modal/responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../constants/app-routes';
import Checkout from '../../pages/checkout/checkout';

import styles from './style.module.css';

function Modal() {
  const { hash, state } = useLocation();
  const navigate = useNavigate();

  const open = hash === AppRoutes.Checkout;
  const onCloseClickHandler = () => {
    if (state?.safe) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <ModalResponsive
        open={open}
        onClose={onCloseClickHandler}
        size="fullscreen"
        hasCloser={true}
        keepMounted>
        <ModalResponsive.Header
          hasCloser={true}
          sticky={true}
          title="Ваш заказ"
          className={styles.modal}
        />
        <ModalResponsive.Content>
          <Checkout onClose={onCloseClickHandler} />
        </ModalResponsive.Content>
      </ModalResponsive>
    </>
  );
}

export default Modal;
