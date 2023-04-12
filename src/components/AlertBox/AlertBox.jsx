import { useSetRecoilState, useRecoilValue } from 'recoil';
import styles from './AlertBox.module.scss';
import { alertModalMoveState, alertModalState, alertModalText, alertModalUiType } from './@recoil/alertModalState';
import { darkFilterState } from '@/store/darkFilterState.js';
import { useNavigate } from 'react-router-dom';
import { OnlyConfirm } from './BtnType/OnlyConfirm/OnlyConfirm';
import { ConfirmAndCancel } from './BtnType/ConfirmAndCancel/ConfirmAndCancel';
import { darkFilterFocusState } from '../../store/darkFilterState';
import { useRef } from 'react';
import { useEffect } from 'react';

function checkBtnType(uiType) {
  const setDarkFilterState = useSetRecoilState(darkFilterState);
  const setAlertModalState = useSetRecoilState(alertModalState);
  const { needToMove, moveUrl } = useRecoilValue(alertModalMoveState);
  const movePage = useNavigate();

  function confirmBtnHandler() { // 확인 버튼
    setDarkFilterState(false); // 다크필터 끄기
    setAlertModalState(false); // 경고창 모달 끄기
    if(needToMove == true) {
      movePage(moveUrl);
    }
  }

  function cancelBtnHandler() {
    setDarkFilterState(false); // 다크필터 끄기
    setAlertModalState(false); // 경고창 모달 끄기
  }

  switch (uiType) {
    case 'onlyConfirm':
      return { btnComponent: <OnlyConfirm confirmEvent={confirmBtnHandler} /> };
    case 'confirmAndCancel':
      return { btnComponent: <ConfirmAndCancel confirmEvent={confirmBtnHandler} cancelEvent={cancelBtnHandler} />};
    default:
      console.log(new Error('경고창의 uiType이 올바르지 않습니다'));
  }
}

export function AlertBox() {
  const setDarkFilterFocusState = useSetRecoilState(darkFilterFocusState);

  // 경고창 전체를 참조하는 ref생성
  const modalRef = useRef();

  useEffect(() => {
    modalRef.current.focus();
    setDarkFilterFocusState(modalRef.current); // 모달창 DOM자체를 저장해줌
  }, []);

  // 경고창의 텍스트를 가져옴
  const text = useRecoilValue(alertModalText);
  const uiType = useRecoilValue(alertModalUiType);

  const { btnComponent } = checkBtnType(uiType); 

  return (
    <div 
      className={styles.alertBoxWrapper}
      ref={modalRef}
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-label="경고창이 열렸습니다."
    >
      <div className={styles.alertText}>
        {text}
      </div>
      { btnComponent }
    </div>
  );
}



