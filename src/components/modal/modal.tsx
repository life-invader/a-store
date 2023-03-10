import { ModalResponsive } from '@alfalab/core-components/modal/responsive';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../constants/app-routes';
import Checkout from '../../pages/checkout/checkout';
import { selectIsCartEmpty } from '../../store/products-slice/selectors';

import styles from './style.module.css';

function Modal() {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();
  const isCartEmpty = useSelector(selectIsCartEmpty);

  const open = hash === AppRoutes.Checkout && !isCartEmpty;
  const onCloseClickHandler = useCallback(() => {
    navigate(pathname, { replace: true });
  }, [navigate, pathname]);

  useEffect(() => {
    if (isCartEmpty) {
      onCloseClickHandler();
    }
  }, [isCartEmpty, onCloseClickHandler]);

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
