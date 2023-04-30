import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';

import { useState } from 'react';
import { useRef } from 'react';

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
import { useAlertBox } from '../../../components/AlertBox/@hook/useAlertBox';

export default function ProductInquiry() {
  // user의 정보 받기
  const { user } = useAuthState();

  const setProductDetailModalState = useSetRecoilState(productDetailModalState);
  const setDarkFilterState = useSetRecoilState(darkFilterState);

  // (추가)uiType
  const setLayoutState = useSetRecoilState(productLayoutState);

  // 문서를 저장 할 컬렉션 이름
  const collectionName = 'inquiryData';
  // 한번 실행시켜 => useEffect가 실행될임

  const { dataState } = useDetailCollection(collectionName);
  const { settingAlertBox } = useAlertBox();

  // 페이지네이션
  // const limit = useRecoilValue(inquiryLimitAtom);
  const [limit, setState] = useState(6);

  // const [page, setPage] = useRecoilState(inquiryPageAtom);
  const [page, setPage] = useState(1);

  // numPages는 총 페이지 개수를 의미한다
  const [numPages, setNumPages] = useState(1);

  // 버튼 DOM참조
  const previousBtn = useRef();
  const nextBtn = useRef();

  useEffect(() => {
    console.log('[ProductInquiry] dataState: ', dataState);

    if (dataState) {
      console.log('dataState의 길이 출력 => ', dataState.length);
      // dataState안에 아무것도 없을때는 자동으로 default값인 1인 상태겠지?
      if (dataState.length != 0) {
        let calcNumPages = Math.ceil(dataState.length / limit);
        setNumPages(calcNumPages);
        console.log('페이지의 개수는? ', numPages);
      }
    }
  }, [dataState]);

  // 어떤 경고창을 띄울 지 세팅하기
  const showAlertBox = (getValue) => {
    settingAlertBox(getValue);
  };

  function productModalClickHandler() {
    console.log('user출력:', user);
    if (user == null) {
      showAlertBox({
        btnUiType: 'onlyConfirm',
        alertText: '로그인하셔야 본 서비스를 이용하실 수 있습니다.',
        moveUrl: '/SignIn',
      }); // 경고창 띄우기
    } else {
      setProductDetailModalState(true);
      setDarkFilterState(true);
      setLayoutState('inquiry');
    }
  }

  useEffect(() => {
    if (numPages == 1) {
      // 한페이지밖에 없는 경우
      //console.log("한페이지밖에 없는 경우~");
      previousBtn.current.style.background =
        "url('https://res.kurly.com/kurly/ico/2021/paging-prev-disabled.svg')";
      nextBtn.current.style.background =
        "url('https://res.kurly.com/kurly/ico/2021/paging-next-disabled.svg')";
      previousBtn.current.style.cursor = 'default';
      nextBtn.current.style.cursor = 'default';
    } else {
      // 여러 페이지가 존재하는 경우
      //console.log("여러 페이지가 존재하는 경우~");
      if (page == 1) {
        // 1page라면 previous버튼 비활성화 svg로 바꿔야 함
        previousBtn.current.style.background =
          "url('https://res.kurly.com/kurly/ico/2021/paging-prev-disabled.svg')";
        nextBtn.current.style.background =
          "url('https://res.kurly.com/kurly/ico/2021/paging-next-activated.svg')";
        previousBtn.current.style.cursor = 'default';
        nextBtn.current.style.cursor = 'pointer';
      } else if (page == numPages) {
        previousBtn.current.style.background =
          "url('https://res.kurly.com/kurly/ico/2021/paging-prev-activated.svg')";
        nextBtn.current.style.background =
          "url('https://res.kurly.com/kurly/ico/2021/paging-next-disabled.svg')";
        previousBtn.current.style.cursor = 'previous';
        nextBtn.current.style.cursor = 'default';
      } else {
        previousBtn.current.style.background =
          "url('https://res.kurly.com/kurly/ico/2021/paging-prev-activated.svg')";
        nextBtn.current.style.background =
          "url('https://res.kurly.com/kurly/ico/2021/paging-next-activated.svg')";
        previousBtn.current.style.cursor = 'pointer';
        nextBtn.current.style.cursor = 'pointer';
      }
    }
  }, [page, numPages]);

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
                배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이칼리
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
          {dataState ? (
            <ProductInquiryAccordion
              data={dataState}
              limit={limit}
              page={page}
            />
          ) : null}
        </article>
        {/* 페이지네이션 하드코딩 */}
        <nav className={styles.paginationContainer}>
          <button
            ref={previousBtn}
            className={styles.paginationPrev}
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
          />
          <button
            ref={nextBtn}
            className={styles.paginationNext}
            disabled={page === numPages}
            onClick={() => {
              setPage(page + 1);
            }}
          />
        </nav>
      </section>
    </>
  );
}
