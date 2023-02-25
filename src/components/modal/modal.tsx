import { useNavigate } from 'react-router-dom';

function Modal() {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(-1);
  };

  return <div onClick={closeModal}>Modal</div>;
}

export default Modal;
