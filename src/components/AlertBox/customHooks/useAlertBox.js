import { useSetRecoilState } from "recoil";
import { darkFilterState } from "../../../store/darkFilterState";
import { alertModalMoveState, alertModalState, alertModalText, alertModalUiType, caseOfRemoveProduct } from "../@recoil/alertModalState";

// 초기값
let initialValue = {
  alertText: '', 
  needToMove: false,
  moveUrl: '',
  btnUiType: '',
  needToRemove: false,
  product: {},
};

export const useAlertBox = () => {
  // 다크필터
  const setDarkFilterState = useSetRecoilState(darkFilterState);
  // 경고창 관련 atom들
  const setAlertModalState = useSetRecoilState(alertModalState); 
  const setAlertModalText = useSetRecoilState(alertModalText);
  const setAlertModalMoveState = useSetRecoilState(alertModalMoveState);
  const setAlertModalUiType = useSetRecoilState(alertModalUiType);
  const setCaseOfRemoveProduct = useSetRecoilState(caseOfRemoveProduct);

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
    setCaseOfRemoveProduct({
      needToRemove: alertState.needToRemove,
      product: alertState.product,
    });
  }
  
  return { settingAlertBox };
};
