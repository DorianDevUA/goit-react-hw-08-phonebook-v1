import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  Backdrop,
  Body,
  Header,
  ModalContent,
  ModalTitle,
} from './Modal.styled';
import IconButton from 'components/IconButton';
import { MdClose } from 'react-icons/md';

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
          <IconButton onClick={onClose}>
            <MdClose />
          </IconButton>
        </Header>
        <Body>{children}</Body>
      </ModalContent>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;
