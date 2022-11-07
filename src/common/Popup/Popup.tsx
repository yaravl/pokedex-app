import React from 'react';
import ReactDOM from 'react-dom';

import { PopupLayout } from '@common/Popup/PopupLayout';
import { usePopupMount } from '@common/Popup/usePopupMount';

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
  const { mounted } = usePopupMount({ opened: isOpen });

  React.useEffect(() => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (mounted) {
      document.body.style.overflow = 'hidden';
      document.body.style.padding = `8rem ${scrollBarWidth}px 0 0`;
    } else {
      document.body.style.overflow = '';
      document.body.style.padding = '';
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <PopupLayout onClose={onClose} opened={isOpen}>
        {children}
      </PopupLayout>
    </Portal>
  );
};
