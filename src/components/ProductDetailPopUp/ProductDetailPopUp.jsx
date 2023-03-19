import styles from './ProductDetailPopUp.module.scss';

import { default as PageTitle } from '@/components/PageTitle/PageTitle.jsx'
import productImg from "@/assets/product/tangtang/thumbnail.jpg";

export function ProductDetailPopUp() {
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
            <div className={styles.textAreaWrap}>
              <textarea inputMode='text' id="inquiryText" required maxLength="5000" name="content"></textarea>
              <div className={styles.placeHolder}>
                <div>
                  <div>
                    <strong>상품문의 작성 전 확인해 주세요</strong>
                    <ul>
                      <li>답변은 영업일 기준 2~3일 소요됩니다.</li>
                      <li>해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</li>
                      <li>배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이칼리 내 1:1 문의에 남겨주세요.</li>
                    </ul>
                  </div>
                  <div>
                    <strong>제품</strong>
                    <ul>
                      <li>입고일 : 품절 상품 입고 일이 확정된 경우, 섬네일에 기재되어 있습니다. (종 모양을 클릭하여, 재입고 알림 설정 가능)</li>
                      <li>제품 상세정보 : 영양성분 및 함량, 용량, 보관 및 취급 방법 등 제품 정보는 상세이미지 또는 상세정보에서 확인 가능합니다.</li>
                    </ul>
                  </div>
                  <div>
                    <strong>주문취소</strong>
                    <ul>
                      <li>배송 단계별로 주문취소 방법이 상이합니다.</li>
                      <li>[입금확인] 단계 : [마이칼리 > 주문내역 상세페이지] 에서 직접 취소 가능</li>
                      <li>[입금확인] 이후 단계 : 고객센터로 문의</li>
                      <li>생산이 시작된 [상품 준비중] 이후에는 취소가 제한되는 점 고객님의 양해 부탁드립니다.</li>
                      <li>비회원은 모바일 App 또는 모바일 웹사이트에서 [마이칼리 > 비회원 주문 조회 페이지] 에서 취소가 가능합니다.</li>
                      <li>일부 예약상품은 배송 3~4일 전에만 취소 가능합니다.</li>
                    </ul>
                    <p>※ 주문상품의 부분 취소는 불가능합니다. 전체 주문 취소 후 재구매 해주세요.</p>
                  </div>
                  <div>
                    <strong>배송</strong>
                    <ul>
                      <li>주문 완료 후 배송 방법(샛별/택배)은 변경이 불가능합니다.</li>
                      <li>배송일 배송시간 지정은 불가능합니다. (예약배송 포함)</li>
                    </ul>
                    <p>※ 전화번호, 이메일, 주소, 계좌번호 등의 상세 개인정보가 문의 내용에 저장되지 않도록 주의해 주시기 바랍니다.</p>
                  </div>
                </div>
              </div>
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