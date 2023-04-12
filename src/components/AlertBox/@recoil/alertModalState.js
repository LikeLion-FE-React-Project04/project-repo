import { useSetRecoilState } from "recoil";
import { atom } from "recoil";
import { darkFilterState } from '@/store/darkFilterState.js';
// import { useNavigate } from 'react-router-dom';


// 경고창을 띄울지 말지의 상태를 관리
export const alertModalState = atom({
  key: 'alertModalState',
  default: false,
});

// 경고창의 텍스트를 관리
export const alertModalText = atom({
  key: 'alertModalText',
  default: '로그인한 사용자만 이용 가능합니다~',
});

// 경고창의 링크 이동 여부를 저장
export const alertModalMoveState = atom({
  key: 'alertModalMoveState',
  default: {
    needToMove: false,
    moveUrl: '',
  },
});

// // uiType 관리
// export const alertModalUiType = atom({
//   key: 'alertModalUiType',
//   default: 'onlyConfirm',
// });

// // 확인 버튼
// export const alertModalConfirmBtn = atom({
//   key: 'alertModalConfirmBtn',
//    default: ()=>{
//       console.log("default 함수입니다.");
//   },
// });

// export const alertModalConfirmBtn2 = atomFamily({
//   key: 'alertModalConfirmBtn2',
//   default: ()=>()=>movePage('/'),
 
// });

//default: 'default',

// // '확인(confirm)' 핸들러 관리
// export const alertModalConfirmBtnHandler = atom({
//   key: 'alertModalConfirmBtnHandler',
//   default: ()=>{
//     const setDarkFilterState = useSetRecoilState(darkFilterState);
//     const setAlertModalState = useSetRecoilState(alertModalState);

//     setDarkFilterState(false); // 다크필터 끄기
//     setAlertModalState(false); // 경고창 모달 끄기
//   },
// });

