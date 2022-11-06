import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Popup.module.css';

interface PortalProps {
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const [container] = React.useState(() => document.createElement('div'));

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

interface PopupProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const Popup: React.FC<PopupProps> = ({ children, onClose, isOpen }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.padding = `8rem ${
        window.innerWidth - document.documentElement.clientWidth
      }px 0 0`;
    } else {
      document.body.style.overflow = '';
      document.body.style.padding = '';
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={styles.popup} role='dialog'>
        <div
          className={styles.popup_overlay}
          role='button'
          aria-label='close'
          tabIndex={0}
          onClick={onClose}
          onKeyDown={onClose}
        />

        <div className={styles.popup_content}>
          <button onClick={onClose} className={styles.popup_close}>
            +
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
