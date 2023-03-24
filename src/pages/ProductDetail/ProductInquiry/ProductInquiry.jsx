import { useSetRecoilState } from 'recoil';

// import classes from '../../../styles/main.module.css';
import { useDetailCollection } from '../../../firebase/firestore/useDetailCollection';

import styles from './ProductInquiry.module.scss';

import { Badge } from '@/components/Badge/Badge.jsx';
import { Button } from '@/components/Button/Button.jsx';
import { default as AccordionItem } from '@/components/Accordion/AccordionItem';
import { default as PageTitle } from '@/components/PageTitle/PageTitle.jsx';
import { ReactComponent as Lock } from '@/assets/product-detail/ic-lock.svg';

import { productDetailModalState } from '@/store/detailModalState.js';
import { darkFilterState } from '@/store/darkFilterState.js';
import ProductInquiryHandle from './ProductInquiryHandle/ProductInquiryHandle';
import { useEffect } from 'react';
import { productLayoutState } from '../../../store/detailLayoutState';

export default function ProductInquiry () {
  const setProductDetailModalState = useSetRecoilState(productDetailModalState);
  const setDarkFilterState = useSetRecoilState(darkFilterState);

  // (추가)uiType
  const setLayoutState = useSetRecoilState(productLayoutState);

  // 문서를 저장 할 컬렉션 이름 
  const collectionName = 'inquiryData';
  // 한번 실행시켜 => useEffect가 실행될임
  const { dataState } = useDetailCollection(collectionName);

  useEffect(() => {
    console.log("[ProductInquiry] dataState: ", dataState);
  }, [dataState]);

  function productModalClickHandler() {
    setProductDetailModalState(true);
    setDarkFilterState(true);
    // 추가
    setLayoutState('inquiry');
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
          <div className={styles.inquiryTableHead}>
            <div className={styles.writingTitleHead}>제목</div>
            <div className={styles.writerHead}>작성자</div>
            <div className={styles.reportingDateHead}>작성일</div>
            <div className={styles.answerStatusHead}>답변상태</div>
          </div>
          <AccordionItem index={1} width="1024px">
            {/* 핸들 */}
            <div className={styles.handleDivWrapper}>
              <div className={styles.writingTitle}>
                <Badge className={styles.noticeBadge} uiType="noticeBadge">공지</Badge>
                <span>판매(일시)중단 제품 안내 (22.11.10 업데이트)</span>
              </div>
              <div className={styles.writer}>칼리</div>
              <div className={styles.reportingDate}>2017.02.01</div>
              <div className={styles.answerStatus}>-</div>
            </div>
            {/* 패널 */}
            <div style={{background: 'salmon'}}>
              <span>패널테스트1</span>
              <span>패널테스트2</span>
            </div>
          </AccordionItem>
          <AccordionItem index={2} width="1024px">
            {/* 핸들 */}
            <div className={styles.handleDivWrapper}>
              <div className={styles.writingTitle}>팩이 터져서 왔어요</div>
              <div className={styles.writer}>김*식</div>
              <div className={styles.reportingDate}>2022.11.11</div>
              <div className={styles.answerStatus}>답변대기</div>
            </div>
            {/* 패널 */}
            <div style={{background: 'salmon'}}>
              <span>패널테스트1</span>
              <span>패널테스트2</span>
            </div>
          </AccordionItem>
          <AccordionItem index={3} width="1024px">
            {/* 핸들 */}
            <div className={styles.handleDivWrapper}>
              <div className={styles.writingTitle}>
                <span>비밀글입니다.</span>
                {/* <img src={Lock} alt="비밀글 자물쇠 아이콘" style={{marginLeft:'20px'}} /> */}
                <Lock alt="비밀글 자물쇠 아이콘" style={{marginLeft:'20px'}} />
              </div>
              <div className={styles.writer}>김*식</div>
              <div className={styles.reportingDate}>2022.11.11</div>
              <div className={styles.answerStatus}>답변대기</div>
            </div>
            {/* 패널 */}
            <div style={{background: 'salmon'}}>
              <span>패널테스트1</span>
              <span>패널테스트2</span>
            </div>
          </AccordionItem>
          {/* { recentData ? <ProductInquiryHandle data={recentData} /> : null } */}
        </article>
      </section>
    </>
  );
};



{/* <table>
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
          </table> */}