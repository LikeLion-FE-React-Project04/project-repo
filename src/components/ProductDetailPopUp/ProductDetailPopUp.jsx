import { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import styles from './ProductDetailPopUp.module.scss';
import { PlaceholderInquiry } from './PlaceholderInquiry/PlaceholderInquiry';
import { PlaceholderReview } from './PlaceholderReview/PlaceholderReview';
import { Secret } from './Secret/Secret';

import { productDetailModalState } from '@/store/detailModalState.js';
import { default as PageTitle } from '@/components/PageTitle/PageTitle.jsx'
import productImg from "@/assets/product/tangtang/thumbnail.jpg";

import { darkFilterState } from '@/store/darkFilterState.js';

function checkUiType(uiType) {
  switch (uiType) {
    case 'inquiry':
      return { title: '문의하기', ph: <PlaceholderInquiry /> };
    case 'review':
      return { title: '후기 작성', ph: <PlaceholderReview /> };
    default:
      console.log(new Error('uiType이 올바르지 않습니다'));
  }
}

export function ProductDetailPopUp({uiType='inquiry'}) {
  // uiType검사
  const { title, ph } = checkUiType(uiType);  

  // 다크필터
  const setDarkFilter = useSetRecoilState(darkFilterState);

  // 모달창을 띄울것인가 말것인가
  const [isVisible, setIsVisible] = useRecoilState(productDetailModalState);

  // textarea를 참조하기 위한 ref
  const area = useRef(); 
  // textarea의 text를 관리하기 위한 ref
  const textAreaText = useRef('');

  // placeholder가 띄워야할지 말지를 관리하는 state
  const [isActiveP, setIsActiveP] = useState(true); 
  // textarea의 글자수를 관리하는 state
  const [inputCount, setInputCount] = useState(0);
  

  // div태그(.textAreaWrap)을 클릭하면, 발생하는 이벤트
  function handlePlaceholder() { 
    setIsActiveP(false); // placeholder는 사라져야 함. Why? 입력을 받아야되니..
    area.current.focus(); // 동시에, textarea에 focus를 줘야함. Why? 입력을 해야되니..
  }

  // textarea의 focus가 해제될 때 발생하는 이벤트
  function handlePlaceholderT() { 
    if(inputCount == 0) { // 사용자가 아무것도 입력하지 않았을때만
      setIsActiveP(true); // 다시 placeholder를 띄움
    }
  }

  // textarea의 내용에 변화가 있을 때 발생하는 이벤트
  const textareaInputHandler = (e) => {
    // textarea의 내용이 바뀔때마다 ref의 current값을 변경해줌 => but리랜더링은 안되므로 화면에 반영이 안됨
    textAreaText.current = e.target.value;
    // 그래서 랜더링을 시키기 위해서 state 사용
    setInputCount(textAreaText.current.length);
  };
  
  // 사용자가 '취소'또는 'X'버튼을 클릭했을 때 발생하는 이트
  const handleCancelBtnClick = () => {
    setIsVisible(false); // 모달창을 띄우지 않는다
    setDarkFilter(false); // 다크 필터를 끈다
  };

  if(isVisible) {
    return ReactDOM.createPortal(
      <>
        <article className={styles.detailPopUpWrap}>
          <div className={styles.popUpHeader}>
            <PageTitle uiType='productReviewAndInquiry'>{title}</PageTitle>
            <button aria-label="창닫기" onClick={handleCancelBtnClick}></button>
          </div>
          <div className={styles.productInformation}>
            <img alt="탱탱쫄면" src={productImg} />
            <p>[풀무원] 탱탱쫄면 (4개입)</p>
          </div>
          <div className={styles.inputField}>
            <fieldset className={styles.inquiryTitleWrapper}>
              <label htmlFor='inquiryTitle'>제목</label>
              <input required id="inquiryTitle" placeholder="제목을 입력해 주세요" type="text" />
            </fieldset>
            <fieldset className={styles.inquiryContentWrapper}>
              <label htmlFor='inquiryText'>내용</label>
              <div className={styles.textAreaWrap} onClick={handlePlaceholder} aria-hidden="true">
                <textarea onChange={textareaInputHandler} id="inquiryText" inputMode='text' name="content" ref={area} required maxLength="5000" onBlur={handlePlaceholderT}></textarea>
                {isActiveP ? ph : null}
                <p className={styles.inquiryCount} id="inquiryCount">{inputCount}/5000</p>
              </div>
            </fieldset>
          </div>
          <div className={styles.isSecret}>
            {(uiType=='inquiry') ? <Secret/> : null}
          </div>
          <div className={styles.popUpBtnWrapper}>
            <button className={styles.cancelBtn} onClick={handleCancelBtnClick}>취소</button>
            <button className={styles.postBtn} id="postInquiry">등록</button>
          </div>
        </article>
      </>
      ,
      document.getElementById("detailPortal")
    );
  }
}

