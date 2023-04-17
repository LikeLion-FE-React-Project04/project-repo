import { useSetRecoilState } from "recoil";
import { darkFilterState } from "../../../store/darkFilterState";
import { alertModalMoveState, alertModalState, alertModalText, alertModalUiType } from "../@recoil/alertModalState";

// 초기값
let initialValue = {
  btnUiType: '',
  alertText: '',
  needToMove: false,
  moveUrl: '',
};

export const useAlertBox = () => {
  // 다크필터
  const setDarkFilterState = useSetRecoilState(darkFilterState);
  // 경고창 관련
  const setAlertModalState = useSetRecoilState(alertModalState); 
  const setAlertModalText = useSetRecoilState(alertModalText);
  const setAlertModalMoveState = useSetRecoilState(alertModalMoveState);
  const setAlertModalUiType = useSetRecoilState(alertModalUiType);

  // 경고창을 세팅할 수 있는 함수
  const settingAlertBox = (getValue) => {
    // 객체 합치기
    const alertState = {...initialValue, ...getValue};

    // 다크필터 세팅
    setDarkFilterState(true);
  
    // 경고창 세팅
    setAlertModalState(true);
    setAlertModalText(alertState.alertText);
    setAlertModalMoveState({
      needToMove: alertState.needToMove,
      moveUrl: alertState.moveUrl,
    });
    setAlertModalUiType(alertState.btnUiType);
  }
  
  return { settingAlertBox };
};
