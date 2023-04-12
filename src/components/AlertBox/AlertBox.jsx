import { useSetRecoilState, useRecoilValue } from 'recoil';
import styles from './AlertBox.module.scss';
import { alertModalMoveState, alertModalState, alertModalText, alertModalUiType } from './@recoil/alertModalState';
import { darkFilterState } from '@/store/darkFilterState.js';
import { useNavigate } from 'react-router-dom';
import { OnlyConfirm } from './BtnType/OnlyConfirm/OnlyConfirm';
import { ConfirmAndCancel } from './BtnType/ConfirmAndCancel/ConfirmAndCancel';

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
  // 경고창의 텍스트를 가져옴
  const text = useRecoilValue(alertModalText);
  const uiType = useRecoilValue(alertModalUiType);

  const { btnComponent } = checkBtnType(uiType); 

  return (
    <div className={styles.alertBoxWrapper}>
      <div className={styles.alertText}>
        {text}
      </div>
      { btnComponent }
    </div>
  );
}



