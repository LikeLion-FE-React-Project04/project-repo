import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';

import {useState} from 'react'


// import classes from '../../../styles/main.module.css';
import { useDetailCollection } from '../../../firebase/firestore/useDetailCollection';

import styles from './ProductInquiry.module.scss';

import { Badge } from '@/components/Badge/Badge.jsx';
import { Button } from '@/components/Button/Button.jsx';
import { default as AccordionItem } from '@/components/Accordion/AccordionItem';
import { default as PageTitle } from '@/components/PageTitle/PageTitle.jsx';

import { productDetailModalState } from '@/store/detailModalState.js';
import { darkFilterState } from '@/store/darkFilterState.js';
import ProductInquiryAccordion from './ProductInquiryAccordion/ProductInquiryAccordion';
import { useEffect } from 'react';
import { productLayoutState } from '../../../store/detailLayoutState';
import { useAuthState } from '@/firebase/auth';
import { dataStateAtom } from './../../../firebase/firestore/useDetailCollection';
import { inquiryLimitAtom, inquiryPageAtom } from './@recoil/renderState';

export default function ProductInquiry() {
  // user의 정보 받기
  const { user } = useAuthState();

  // const dataState = useRecoilValue(dataStateAtom);

  const setProductDetailModalState = useSetRecoilState(productDetailModalState);
  const setDarkFilterState = useSetRecoilState(darkFilterState);

  // (추가)uiType
  const setLayoutState = useSetRecoilState(productLayoutState);

  // 문서를 저장 할 컬렉션 이름
  const collectionName = 'inquiryData';
  // 한번 실행시켜 => useEffect가 실행될임

  const { dataState } = useDetailCollection(collectionName);


  // 페이지네이션 테스트

  //limit =  6
  // const limit = useRecoilValue(inquiryLimitAtom);
  const [limit,setState] = useState(6);



  // const [page, setPage] = useRecoilState(inquiryPageAtom);
  const [page, setPage] = useState(1);
  // total = 15개

  const numPages = Math.ceil(15 / limit);

  useEffect(() => {
    console.log('[ProductInquiry] dataState: ', dataState);
  }, [dataState]);

  function productModalClickHandler() {
    console.log('user출력:', user);
    if (user == null) {
      // 로그인이 안 된 상태라면? 팝업창을 띄우면 안됨
      alert('로그인하셔야 본 서비스를 이용하실 수 있습니다.');
    } else {
      setProductDetailModalState(true);
      setDarkFilterState(true);
      // 추가
      setLayoutState('inquiry');
    }
  }

  return (
    <>
      <section className={styles.productInquiryWrap}>
        <div className={styles.aboutInquiry}>
          <div>
            <PageTitle uiType="productReviewAndInquiry">상품문의</PageTitle>
            <ul>
              <li>
                상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른
                글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
              </li>
              <li>
                배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리
                내 1:1 문의에 남겨주세요.
              </li>
            </ul>
          </div>
          <Button uiType="fifth" onClick={productModalClickHandler}>
            문의하기
          </Button>
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
                <Badge className={styles.noticeBadge} uiType="noticeBadge">
                  공지
                </Badge>
                <span>판매(일시)중단 제품 안내 (22.11.10 업데이트)</span>
              </div>
              <div className={styles.writer}>칼리</div>
              <div className={styles.reportingDate}>2017. 2. 1.</div>
              <div className={styles.answerStatus}>-</div>
            </div>
            {/* 패널 */}
            <div className={styles.panelDivWrapper}>
              <div>
                안녕하세요. 칼리 입니다.
                <br />
                다음과 같은 사유로 인하여 <span>판매(일시)중단</span> 되었음을
                안내드립니다. <br />
                감사합니다.
                <br />
                칼리 드림
              </div>
            </div>
          </AccordionItem>
          {/* 데이터 뿌려주기 */}
          {dataState ? <ProductInquiryAccordion data={dataState}
          limit={limit}
          page={page}
          /> : null}
        </article>
        {/* 페이지네이션 하드코딩 */}
        <nav className={styles.paginationContainer}>
          <button
            className={styles.paginationPrev}
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          />
          <button
            className={styles.paginationNext}
            onClick={() => setPage(page + 1)}
            disabled={page === numPages}
          />
        </nav>
      </section>
    </>
  );
}

