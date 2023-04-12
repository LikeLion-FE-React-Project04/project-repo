// import { useSetRecoilState, useRecoilValue } from 'recoil';
// import styles from './AlertBox.module.scss';
// import { alertModalMoveState, alertModalState, alertModalText, alertModalUiType } from './@recoil/alertModalState';
// import { darkFilterState } from '@/store/darkFilterState.js';
// //import { OnlyConfirm } from './BtnType/OnlyConfirm/OnlyConfirm';
// //import { ConfirmAndCancel } from './BtnType/ConfirmAndCancel/ConfirmAndCancel';

// // uiType에 따른 버튼 형태를 결정한다
// function checkBtnType(uiType, event) {
//   switch (uiType) {
//     case 'onlyConfirm':
//       return { btnComponent: <OnlyConfirm event={event} /> };
//     case 'confirmAndCancel':
//       return { btnComponent: <ConfirmAndCancel event={event} />};
//     default:
//       console.log(new Error('경고창의 uiType이 올바르지 않습니다'));
//   }
// }

// // useCallback, useMemo

// export function AlertBox({
//     children,
// }) {
//   // darkFilter를 띄울것인지 말것인지 상태
//   const setDarkFilterState = useSetRecoilState(darkFilterState);
//   // alertModal을 띄울것인지 말것인지 상태
//   const setAlertModalState = useSetRecoilState(alertModalState);

//   // 경고창의 텍스트를 가져옴
//   const text = useRecoilValue(alertModalText);
//   // '확인'버튼을 눌렀을 때 링크 이동 여부를 저장
//   const { needToMove, moveUrl } = useRecoilValue(alertModalMoveState);
 
//   function confirmBtnHandler() { // 확인 버튼
//     setDarkFilterState(false); // 다크필터 끄기
//     setAlertModalState(false); // 경고창 모달 끄기
//   }

//   const { btnComponent } = checkBtnType(uiType, closeModal); 

//   return (
//     <div className={styles.alertBoxWrapper}>
//       <div className={styles.alertText}>
//         {text}
//       </div>
//       <button 
//         className={styles.confirmBtn} 
//         onClick = {confirmBtnHandler}
//       >확인</button>
//     </div>
//   );
// }



