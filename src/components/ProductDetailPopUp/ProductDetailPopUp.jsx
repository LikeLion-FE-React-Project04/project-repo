import styles from './ProductDetailPopUp.module.scss';

import { default as PageTitle } from '@/components/PageTitle/PageTitle.jsx'
import productImg from "@/assets/product/tangtang/thumbnail.jpg";

export function ProductDetailPopUp() {
  return (
    <>
      <article className={styles.detailPopUpWrap}>
        <PageTitle uiType='productReviewAndInquiry'>상품 문의하기</PageTitle>
        <div className={styles.productInformation}>
          <img alt="탱탱쫄면" src={productImg} />
          <p>[풀무원] 탱탱쫄면 (4개입)</p>
        </div>
        <div className={styles.inputField}>
          <fieldset className={styles.inquiryTitleWrapper}>
            <label htmlFor='inquiryTitle'>제목</label>
            <input required id="inquiryTitle" placeholder="제목을 입력해 주세요" type="text"  />
          </fieldset>
          <fieldset className={styles.inquiryContentWrapper}>
            <label htmlFor='inquiryText'>내용</label>
            <textarea inputMode='text' id="inquiryText" required maxLength="5000" name="content"></textarea>
            <p id="inquiryCount">0/5000</p>
          </fieldset>
          <span className={styles.countSpan}>이응</span>
        </div>
      </article>
    </>
  );
}