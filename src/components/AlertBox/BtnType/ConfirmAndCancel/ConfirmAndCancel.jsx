
import { useRef } from 'react';
import styles from './ConfirmAndCancel.module.scss';

export function ConfirmAndCancel({confirmEvent, cancelEvent}) {
  const cancelBtnRef = useRef();
  const confirmBtnRef = useRef();

  const handleModalKeyEvent = (e) => {
    const firstFocusableElement = cancelBtnRef.current; 
    const lastFocusableElement = confirmBtnRef.current;

    // Tab, Shift키 누른 여부를 저장
    const isTabPressed = (e.key === 'Tab');
    const isShiftPressed = e.shiftKey;

    if(!isTabPressed) { // Tab키를 누르지 않은 경우
      console.log('Tab이 아닙니다.');

      return; 
    }
    if(isShiftPressed) { // Shift+Tab 누른 경우
      // document.activeElement는 현재 focus요소를 가리킨다
      if(document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    }
    else { // Shift를 누르지 않고, tab키만 눌렀을 경우
      if(document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus(); // 다시 첫번째 요소로 focus
        e.preventDefault();
      }
    }
  }

  return (
    <>
      <div className={styles.btnWrapper}>
        <button 
          className={styles.cancelBtn} 
          onClick={cancelEvent}
          onKeyDown={handleModalKeyEvent}
          ref={cancelBtnRef}
        >
          취소
        </button>
        <button 
          className={styles.confirmBtn} 
          onClick={confirmEvent}
          onKeyDown={handleModalKeyEvent}
          ref={confirmBtnRef}
        >
          확인
        </button>
      </div>
    </>
  );
}