import React from 'react';
// @ts-ignore
import { CSSTransition } from 'react-transition-group';

import { ANIMATION_TIME } from './usePopupMount';

import styles from './Popup.module.css';

const overlayAnimation = {
  enter: styles.overlayEnter,
  enterActive: styles.overlayEnterActive,
  exit: styles.overlayExit,
  exitActive: styles.overlayExitActive
};

const contentAnimation = {
  enter: styles.contentEnter,
  enterActive: styles.contentEnterActive,
  exit: styles.contentExit,
  exitActive: styles.contentExitActive
};

interface PopupLayoutProps {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const PopupLayout: React.FC<PopupLayoutProps> = ({ onClose, children, opened }) => {
  const [animationIn, setAnimationIn] = React.useState(false);

  const overlayRef = React.useRef(null);
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return (
    <div className={styles.popup} role='dialog'>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        classNames={overlayAnimation}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
      >
        <div
          ref={overlayRef}
          className={styles.popup_overlay}
          role='button'
          aria-label='close'
          tabIndex={0}
          onClick={onClose}
          onKeyDown={onClose}
        />
      </CSSTransition>

      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        classNames={contentAnimation}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
      >
        <div ref={contentRef} className={styles.popup_content}>
          <button onClick={onClose} className={styles.popup_close}>
            +
          </button>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};
