import { useSetRecoilState, useRecoilValue } from 'recoil';
import styles from './AlertBox.module.scss';
import { alertModalMoveState, alertModalState, alertModalText, alertModalUiType, caseOfRemoveProduct } from './@recoil/alertModalState';
import { darkFilterState } from '@/store/darkFilterState.js';
import { useNavigate } from 'react-router-dom';
import { OnlyConfirm } from './BtnType/OnlyConfirm/OnlyConfirm';
import { ConfirmAndCancel } from './BtnType/ConfirmAndCancel/ConfirmAndCancel';
import { darkFilterFocusState } from '../../store/darkFilterState';
import { useRef } from 'react';
import { useEffect } from 'react';
import { cartDataState } from '../../store/cartModalState';
import { useRecoilState } from 'recoil';

function checkBtnType(uiType) {
  const setDarkFilterState = useSetRecoilState(darkFilterState);
  const setAlertModalState = useSetRecoilState(alertModalState);
  const { needToMove, moveUrl } = useRecoilValue(alertModalMoveState);
  const movePage = useNavigate();

  // cart 관련 
  const setCaseOfRemoveProduct = useSetRecoilState(caseOfRemoveProduct);
  const [cartData, setCartData] = useRecoilState(cartDataState);
  const { needToRemove, product } = useRecoilValue(caseOfRemoveProduct);

  
  function confirmBtnHandler() { 
    // 모든 확인 버튼에 적용되는 동작
    setDarkFilterState(false); // 다크필터 끄기
    setAlertModalState(false); // 경고창 모달 끄기

    // 이동하려고 하는 경우만 동작
    if(needToMove == true) {
      movePage(moveUrl);
    }

    // 상품을 삭제하려고 하는 경우만 동작
    if(needToRemove == true) {
      setCartData((prev) => {
        const cartArr = prev.filter((data) => {
          return data.productId !== product.id;
        });
      
        return cartArr;
      });
      // 다시 풀어주기
      setCaseOfRemoveProduct({
        needToRemove: false,
        product: {},
      });
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



