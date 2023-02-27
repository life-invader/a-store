import { ModalResponsive } from '@alfalab/core-components/modal/responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../constants/app-routes';
import Checkout from '../../pages/checkout/checkout';

import styles from './style.module.css';

function Modal() {
  const { hash, state } = useLocation();
  const navigate = useNavigate();

  const open = hash === AppRoutes.Checkout;
  const handleClose = () => {
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
        onClose={handleClose}
        size="fullscreen"
        hasCloser={true}
        keepMounted>
        <ModalResponsive.Header
          hasCloser={true}
          sticky={true}
          title="Ваш заказ"
          className={styles.modal}></ModalResponsive.Header>
        <ModalResponsive.Content>
          <Checkout />
        </ModalResponsive.Content>
      </ModalResponsive>
    </>
  );
}

export default Modal;
