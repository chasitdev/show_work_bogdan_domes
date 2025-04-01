import React from 'react';
import styles from './styles/modal.module.css';

interface ModalComponent{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal:React.FC<ModalComponent> = ({ isOpen, onClose, children }:ModalComponent) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
