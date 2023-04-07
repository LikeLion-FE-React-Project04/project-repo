import { useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { Timestamp } from 'firebase/firestore';

import { useDetailFireStore } from '../../firebase/firestore/useDetailFireStore.js';

import styles from './ProductDetailPopUp.module.scss';
import { PlaceholderInquiry } from './PlaceholderInquiry/PlaceholderInquiry';
import { PlaceholderReview } from './PlaceholderReview/PlaceholderReview';
import { Secret } from './Secret/Secret';

import { Button } from '@/components/Button/Button.jsx';
import { productDetailModalState } from '@/store/detailModalState.js';
import { default as PageTitle } from '@/components/PageTitle/PageTitle.jsx'
import { darkFilterState } from '@/store/darkFilterState.js';
import { useAuthState } from '@/firebase/auth';
import { productListFamily } from '@/store/productListState.js';
import { productNameAtom } from '@/pages/ProductDetail/ProductReview/@recoil/renderState';

function checkUiType(uiType) {
  switch (uiType) {
    case 'inquiry':
      return { title: '문의하기', ph: <PlaceholderInquiry />, collectionName: 'inquiryData'};
    case 'review':
      return { title: '후기 작성', ph: <PlaceholderReview />, collectionName: 'reviewData'};
    default:
      console.log(new Error('uiType이 올바르지 않습니다'));
  }
}

export function ProductDetailPopUp({uiType='inquiry'}) {
  // title과 textarea의 값을 저장
  const initialTextState = {
    title: '',
    textarea: '',
  };
  
  // title과 textarea의 텍스트를 관리하기 위한 ref
  const textStateRef = useRef(initialTextState); // textStateRef == { current : {title:'', textarea:''} }

  // uiType검사
  const { title, ph, collectionName } = checkUiType(uiType);  

  // 제품명과 관련된 recoil
  const productName = useRecoilValue(productNameAtom);

  // product id
  const { productId } = useParams();
  const product = useRecoilValue(productListFamily(productId));
  
  // 현재 로그인된 사용자의 사용자명 불러오기
  const { user } = useAuthState();

  // Test
  useEffect(() => {
    if (user) {
      // 잘 받아와지나 테스트용
      console.log('user 출력하기 => ', user);
      console.log('user displayName 출력하기 => ', user.displayName);
      console.log('product image의 thumbnail 출력하기 => ', product.image.thumbnail);
      console.log('product image의 alt 출력하기 => ', product.image.alt);
    }
  }, [user]);

  // firestore 사용
  const { addDocument } = useDetailFireStore(collectionName); 

  // 다크필터
  const setDarkFilter = useSetRecoilState(darkFilterState);

  // 모달창을 띄울것인가 말것인가
  const [isVisible, setIsVisible] = useRecoilState(productDetailModalState);

  // textarea를 참조하기 위한 ref
  const area = useRef(); 
  
  // placeholder가 띄워야할지 말지를 관리하는 state
  const [isActiveP, setIsActiveP] = useState(true); 
  // textarea의 글자수를 관리하는 state
  const [inputCount, setInputCount] = useState(0);
  // secret의 상태를 관리하는 state
  const [isSecret, setIsSecret] = useState(false);
  // 등록버튼의 uiType을 관리하는 state
  const [isReady, setIsReady] = useState(false);

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
    textStateRef.current.textarea = e.target.value;
    // 그래서 랜더링을 시키기 위해서 state 사용
    setInputCount(textStateRef.current.textarea.length);
    console.log('textarea의 내용을 바꾸고 있습니다');

    if(uiType=='inquiry') {
      // 제목과 내용이 모두 비어있지 않다면? => 등록 버튼 색 변해야함 왜? 등록이 가능하니깐
      if(textStateRef.current.textarea != '' && textStateRef.current.title != '') {
        setIsReady(true);
      }
      else {
        setIsReady(false);
      }
    }
    else { // uiType이 review라면
      // 내용만 채워지면 됨
      if(textStateRef.current.textarea != '') {
        setIsReady(true);
      }
      else {
        setIsReady(false);
      }
    }
  };
  
  // 제목의 내용이 바뀔때마다 넣어줌
  const handleTitleData = (e) => {
    textStateRef.current.title = e.target.value;
    console.log('제목의 current값을 바꾸고 있습니다');

    if(uiType=='inquiry') {
      // 제목과 내용이 모두 비어있지 않다면? => 등록 버튼 색 변해야함 왜? 등록이 가능하니깐
      if(textStateRef.current.textarea != '' && textStateRef.current.title != '') {
        setIsReady(true);
      }
      else {
        setIsReady(false);
      }
    }
    else { // uiType이 review라면
      // 내용만 채워지면 됨
      if(textStateRef.current.textarea != '') {
        setIsReady(true);
      }
      else {
        setIsReady(false);
      }
    }
  }

  // 사용자가 '취소'또는 'X'버튼을 클릭했을 때 발생하는 이벤트
  const handleCancelBtnClick = () => {
    setIsVisible(false); // 모달창을 띄우지 않는다
    setDarkFilter(false); // 다크 필터를 끈다
  };

  // 등록 버튼을 눌렀을 때 submit
  const handleSubmit = (e) => {
    if(textStateRef.current.title == '' && uiType=='inquiry') {
      alert("제목을 입력해주세요.");
    }
    else if(textStateRef.current.textarea == '') {
      alert("내용을 입력해주세요.");
    }
    else {
      e.preventDefault();
      console.log(textStateRef.current.title, textStateRef.current.textarea);
      let deliverArr = {};

      if(uiType == 'review') {
        deliverArr = {
          title: productName, 
          textarea: textStateRef.current.textarea, 
          writer: user.displayName,
          date: Timestamp.fromDate(new Date()),
          productId: product.id,
        };
      }
  
      // secret 관련
      if(uiType == 'inquiry') {
        deliverArr = {
          title: textStateRef.current.title, 
          textarea: textStateRef.current.textarea, 
          writer: user.displayName, 
          isSecret: isSecret,
          date: Timestamp.fromDate(new Date()),
          productId: product.id,
        };
      }
      addDocument(deliverArr);
      setIsVisible(false); // 모달창을 띄우지 않는다
      setDarkFilter(false); // 다크 필터를 끈다
    }
  }

  return (
      <>
        <article className={styles.detailPopUpWrap}>
          <div className={styles.popUpHeader}>
            <PageTitle uiType='productReviewAndInquiry'>{title}</PageTitle>
            <button aria-label="창닫기" onClick={handleCancelBtnClick}></button>
          </div>
          <div className={styles.productInformation}>
            <img alt={product.image.alt} src={product.image.thumbnail} />
            <p>{productName}</p>
          </div>
          <div className={styles.inputField}>
            <form onSubmit={handleSubmit}>
              <fieldset className={styles.inquiryTitleWrapper}>
              <label htmlFor='inquiryTitle'>제목</label>
              {(uiType == 'review') ? 
              <input required id="inquiryTitle" value={productName} type="text" onChange={handleTitleData} readOnly/> : null}
              {(uiType == 'inquiry') ? 
              <input required id="inquiryTitle" placeholder="제목을 입력해 주세요" type="text" onChange={handleTitleData} /> : null}
              </fieldset>
              <fieldset className={styles.inquiryContentWrapper}>
              <label htmlFor='inquiryText'>내용</label>
              <div className={styles.textAreaWrap} onClick={handlePlaceholder} aria-hidden="true">
                <textarea onChange={textareaInputHandler} id="inquiryText" inputMode='text' name="content" ref={area} required maxLength="5000" onBlur={handlePlaceholderT}></textarea>
                {isActiveP ? ph : null}
                <p className={styles.inquiryCount} id="inquiryCount">{inputCount}/5000</p>
              </div>
              </fieldset>
            </form>
          </div>
          <div className={styles.isSecret}>
            {(uiType=='inquiry') ? <Secret isSecret={isSecret} setIsSecret={setIsSecret} /> : null}
          </div>
          <div className={styles.popUpBtnWrapper}>
            <Button 
              uiType="seven" 
              className={styles.cancelBtn} 
              onClick={handleCancelBtnClick}
            >취소</Button>
            {(isReady == false)
            ?
            <Button 
              uiType="sixth" 
              className={styles.postBtn} 
              id="postInquiry" 
              type="submit" 
              onClick={handleSubmit} 
              disabled
            >등록</Button>
            :
            <Button 
              uiType="fifth" 
              className={styles.postBtn} 
              id="postInquiry" 
              type="submit" 
              onClick={handleSubmit} 
            >등록</Button>
            }
          </div>
        </article>
      </>
  );
}

