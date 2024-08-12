import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  Backdrop,
  Body,
  CloseModalBtn,
  Header,
  ModalContent,
  ModalTitle,
} from './Modal.styled';

const modalRoot = window.document.getElementById('modal-root');

const Modal = ({ children, title, onClose }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    window.document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <Header>
          <ModalTitle>{title}</ModalTitle>
          <CloseModalBtn type="button" onClick={onClose}>
            Close
          </CloseModalBtn>
        </Header>
        <Body>{children}</Body>
      </ModalContent>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;
