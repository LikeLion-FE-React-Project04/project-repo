import styles from './ProductDetailPopUp.module.scss';

import { default as PageTitle } from '@/components/PageTitle/PageTitle.jsx'
import productImg from "@/assets/product/tangtang/thumbnail.jpg";
import { Placeholder } from './Placeholder/Placeholder';
import { useState } from 'react';
import { useRef } from 'react';


export function ProductDetailPopUp() {
  const area = useRef(); 

  // Placeholder가 띄워지냐 안지냐를 관리하는 state
  const [isActiveP, setIsActiveP] = useState(true); 
  
  function handlePlaceholder() { 
    setIsActiveP(false); // 상위 div태그(.textAreaWrap)을 클릭하면 placeholder는 사라져야 함
    area.current.focus(); // 동시에, textarea에 focus를 줘야함
  }

  function handlePlaceholderT() { // textArea의 focus가 해지될때 실행
    // useRef로 글자수를 관리하되, 글자수가 0일때만 다음 함수를 실행시키록
    setIsActiveP(true); // 다시 placeholder를 띄움
  }

  return (
    <>
      <article className={styles.detailPopUpWrap}>
        <div className={styles.popUpHeader}>
          <PageTitle uiType='productReviewAndInquiry'>상품 문의하기</PageTitle>
          <button aria-label="창닫기"></button>
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
            <div className={styles.textAreaWrap} onClick={handlePlaceholder}>
              <textarea id="inquiryText" inputMode='text' name="content" ref={area} required maxLength="5000" onBlur={handlePlaceholderT}></textarea>
              {isActiveP?<Placeholder />:null}
              <p className={styles.inquiryCount} id="inquiryCount">0/5000</p>
            </div>
          </fieldset>
        </div>
        <div className={styles.secretCheckBox}>
          <input type="checkbox" name="checker" id="isSecret" role="tab" aria-checked="false" tabindex="0" />
          <label htmlFor="isSecret"></label>
          <span>비밀글로 문의하기</span>
        </div>
        <div className={styles.popUpBtnWrapper}>
          <button className={styles.cancelBtn}>취소</button>
          <button className={styles.postBtn} id="postInquiry">등록</button>
        </div>
      </article>
    </>
  );
}