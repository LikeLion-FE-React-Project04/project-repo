import { Badge } from '../../../components/Badge/Badge';
import { Button } from '../../../components/Button/Button';

import classes from '../../../styles/main.module.css';

import styles from './ProductInquiry.module.scss';

export function ProductInquiry () {

  return (
    <>
      <section className={styles.productInquiryWrap}>
        <div className={styles.aboutInquiry}>
          <div>
            <h2>상품문의</h2>
            <ul>
              <li>상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</li>
              <li>배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1 문의에 남겨주세요.</li>
            </ul>
          </div>
          <Button uiType='fifth'>문의하기</Button>
        </div>
        <article className={styles.inquiryTable}>
          <table>
            <caption className={classes.a11yHidden}>상품 문의글을 보여주는 테이블</caption>
            <thead>
              <tr>
                <th className={styles.writingTitle}>제목</th>
                <th className={styles.writer}>작성자</th>
                <th className={styles.reportingDate}>작성일</th>
                <th className={styles.answerStatus}>답변상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  
                  {/* <button class="notice_title collapsible_table">판매(일시)중단 제품 안내(22.11.10 업데이트)</button> */}
                </td>
                {/* <td class="author">칼리</td>
                <td class="created_date">2017.02.01</td>
                <td class="status">-</td> */}
              </tr>
            </tbody>
          </table>
          
        </article>

      </section>
    </>
  );

};

export default ProductInquiry;