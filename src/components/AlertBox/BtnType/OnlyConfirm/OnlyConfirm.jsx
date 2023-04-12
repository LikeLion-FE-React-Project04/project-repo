import { useRef } from 'react';
import styles from './OnlyConfirm.module.scss';

export function OnlyConfirm({confirmEvent}) {
  const confirmBtnRef = useRef();

  const handleModalKeyEvent = (e) => {
    const firstFocusableElement = confirmBtnRef.current; 
    
    const isTabPressed = (e.key === 'Tab');

    if(!isTabPressed) { // Tab키를 누르지 않은 경우
      console.log('Tab이 아닙니다.');

      return; 
    }
    firstFocusableElement.focus();
    e.preventDefault();
  }

  return (
    <>
      <div>
        <button 
          className={styles.confirmBtn} 
          onClick = {confirmEvent}
          onKeyDown={handleModalKeyEvent}
          ref={confirmBtnRef}
          >확인</button>
      </div>
    </>
  );
}
