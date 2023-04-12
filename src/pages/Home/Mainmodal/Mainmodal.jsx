/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Link } from 'react-router-dom';

import styles from './Mainmodal.module.scss';
import { productMainmodalState } from './@recoil/MainmodalState';
import { useRecoilState } from 'recoil';
import { useSetRecoilState } from 'recoil';
import { useRef } from 'react';
import { useEffect } from 'react';
import { transparentFilterFocusState, transparentFilterState } from '../../../components/TransparentFilter/@recoil/transparentFilterState';

export default function Mainmodal() {
  const [isVisible, setIsVisible] = useRecoilState(productMainmodalState);
  const setTransparentFilter = useSetRecoilState(transparentFilterState);
  const setTransparentFilterFocusState = useSetRecoilState(transparentFilterFocusState);

  // DOM요소 접근을 위한 ref생성
  const closeBtnRef = useRef();
  const closeForADayBtnRef = useRef();
  const moveToBeautyKarlyRef = useRef();
  // 메인모달 전체를 참조하는 ref생성
  const modalRef = useRef();

  useEffect(() => {
    // closeBtnRef.current.focus();
    // 닫기 버튼에 주는게 아니라, 모달창 자체에 focus를 줌
    modalRef.current.focus();
    setTransparentFilterFocusState(modalRef.current); // 모달창 DOM자체를 저장해줌
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    setTransparentFilter(false);
  };

  const closeModalDuringToday = () => {
    // 하루 후의 데이터 값 가져오기
    let date = new Date(Date.now() + 86400e3);

    date = date.toUTCString();
    document.cookie = `modalClose=T; expires=${date}`; // 하루뒤에 만료되는 쿠키 생성

    closeModal(); // 창 닫기
  };


  const handleModalKeyEvent = (e) => {
    // focusable한 요소들 묶은 배열
    const focusableElements = [
      moveToBeautyKarlyRef.current,
      closeForADayBtnRef.current,
      closeBtnRef.current,
    ]

    const firstFocusableElement = focusableElements[0]; 
    const lastFocusableElement = focusableElements[focusableElements.length-1];

    // Tab, Shift키 누른 여부를 저장
    const isTabPressed = (e.key === 'Tab');
    const isShiftPressed = e.shiftKey;

    if(!isTabPressed) { // Tab키를 누르지 않은 경우
      console.log('Tab이 아닙니다.');

      return; // 아무 반응을 하지 않고 끝낸다
    }
    if(isShiftPressed) { // Shift+Tab 누른 경우
      // document.activeElement는 현재 focus요소를 가리킨다
      if(document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    }
    else { // Shift를 누르지 않고, tab키만 눌렀을 경우
      //console.log('lastFocusableElement: ', lastFocusableElement);
      //console.log('document.activeElement: ', document.activeElement);
      if(document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus(); // 다시 첫번째 요소로 focus
        e.preventDefault();
      }
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      <div 
        aria-modal="true"
        className={styles.mainModalWrap}
        role="dialog"
        aria-label="뷰티컬리에 대한 메인 모달창이 열렸습니다."
        onKeyDown={handleModalKeyEvent}
        ref={modalRef}
        tabIndex="-1"
      >
        <div className={styles.popUpContainer}>
          <div>
            <Link 
              className={styles.popUpBeauty} 
              to="/" 
              ref={moveToBeautyKarlyRef}
              aria-label="뷰티컬리로 이동하기"
            />
            <button  
              type="button" 
              onClick={closeModalDuringToday}
              ref={closeForADayBtnRef}
            >
              오늘 하루 안 보기
            </button>
            <button
              className={styles.modalCloseBtn}
              type="button"
              onClick={closeModal}
              ref={closeBtnRef}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
