import { useSetRecoilState } from 'recoil';

import classes from '../../../styles/main.module.css';

import styles from './ProductInquiry.module.scss';

import { Badge } from '@/components/Badge/Badge.jsx';
import { Button } from '@/components/Button/Button.jsx';
import { default as PageTitle } from '@/components/PageTitle/PageTitle.jsx';
import { ReactComponent as Lock } from '@/assets/product-detail/ic-lock.svg';

import { productDetailModalState } from '@/store/detailModalState.js';
import { darkFilterState } from '@/store/darkFilterState.js';

export function ProductInquiry () {
  const setProductDetailModalState = useSetRecoilState(productDetailModalState);
  const setDarkFilterState = useSetRecoilState(darkFilterState);

  function productModalClickHandler() {
    setProductDetailModalState(true);
    setDarkFilterState(true);
  }

  return (
    <>
      <section className={styles.productInquiryWrap}>
        <div className={styles.aboutInquiry}>
          <div>
            <PageTitle uiType='productReviewAndInquiry'>상품문의</PageTitle>
            <ul>
              <li>상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</li>
              <li>배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1 문의에 남겨주세요.</li>
            </ul>
          </div>
          <Button uiType='fifth' onClick={productModalClickHandler}>문의하기</Button>
        </div>
        <article className={styles.inquiryTable}>
          <table>
            <caption className={classes.a11yHidden}>상품 문의글을 보여주는 테이블</caption>
            <thead>
              <tr>
                <th className={styles.writingTitleHead}>제목</th>
                <th className={styles.writerHead}>작성자</th>
                <th className={styles.reportingDateHead}>작성일</th>
                <th className={styles.answerStatusHead}>답변상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <button className={styles.writingTitleBtn}>
                  <td>
                    <Badge className={styles.noticeBadge} uiType="noticeBadge">공지</Badge>
                    <span className={styles.writingTitle}>판매(일시)중단 제품 안내 (22.11.10 업데이트)</span>
                  </td>
                </button>
                <td className={styles.writer}>칼리</td>
                <td className={styles.reportingDate}>2017.02.01</td>
                <td className={styles.answerStatus}>-</td>
              </tr>
              <tr>
                <button className={styles.writingTitleBtn}>
                  <td>
                    <span className={styles.writingTitle}>팩이 터져서 왔어요</span>
                  </td>
                </button>
                <td className={styles.writer}>김*식</td>
                <td className={styles.reportingDate}>2022.11.11</td>
                <td className={styles.answerStatus}>답변대기</td>
              </tr>
              <tr>
                <button className={styles.writingTitleBtn}>
                  <td>
                    <span className={styles.writingTitle}>비밀글입니다.</span>
                    <Lock alt="비밀글 자물쇠 아이콘" style={{marginLeft:'20px'}} />
                  </td>
                </button>
                <td className={styles.writer}>김*진</td>
                <td className={styles.reportingDate}>2022.10.09</td>
                <td className={styles.answerStatus}>답변대기</td>
              </tr>
            </tbody>
          </table>
          
        </article>

      </section>
    </>
  );

};

export default ProductInquiry;