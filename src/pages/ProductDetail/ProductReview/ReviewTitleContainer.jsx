import { useSetRecoilState } from 'recoil';

import { useEffect } from 'react';

import { productLayoutState } from "../../../store/detailLayoutState";

import styles from "./ReviewTitleContainer.module.scss";

import { useDetailCollection } from './../../../firebase/firestore/useDetailCollection';

import { Button, PageTitle } from '@/components';
import { productDetailModalState } from '@/store/detailModalState.js';
import { darkFilterState } from '@/store/darkFilterState.js';
import { useAuthState } from '@/firebase/auth';
import { alertModalMoveState, alertModalState, alertModalText, alertModalUiType } from '../../../components/AlertBox/@recoil/alertModalState';

export default function ReviewTitleContainer() {
  // user의 정보 받기
  const { user } = useAuthState();

  const setProductDetailModalState = useSetRecoilState(productDetailModalState);
  const setDarkFilterState = useSetRecoilState(darkFilterState);

  // (추가)uiType
  const setLayoutState = useSetRecoilState(productLayoutState);

  const setAlertModalState = useSetRecoilState(alertModalState);
  const setAlertModalText = useSetRecoilState(alertModalText);
  const setAlertModalMoveState = useSetRecoilState(alertModalMoveState);
  const setAlertModalUiType = useSetRecoilState(alertModalUiType);

  function productModalClickHandler() {
    if (user == null) { // 로그인이 안 된 상태라면? 팝업창을 띄우면 안됨
      // alert("로그인하셔야 본 서비스를 이용하실 수 있습니다.");
      setAlertModalState(true);
      setDarkFilterState(true);
      setAlertModalText('로그인하셔야 본 서비스를 이용하실 수 있습니다.');
      setAlertModalMoveState({
        needToMove: true,
        moveUrl: '/SignIn',
      });
      setAlertModalUiType('onlyConfirm');
    } else {
      setProductDetailModalState(true);
      setDarkFilterState(true);
      setLayoutState('review');
    }
  }

  return (
    <div className={styles.productReviewFrame}>
      <div>
        <PageTitle uiType='productReviewAndInquiry'>상품후기</PageTitle>
        <ul className={styles.productReviewText}>
          <li>글후기 50원 적립금 혜택이 있어요.</li>
          <li className={styles.li}> 퍼플, 더퍼플은 2배 적립 (100원) / 주간 베스트 후기로 선정 시 5,000원 추가 적립</li>
          <li className={styles.li}> 후기 작성은 배송완료일로부터 30일 이내 가능합니다.</li>
          <li className={styles.li}> 작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균 1~2일 소요)</li>
        </ul>
      </div>
      <Button uiType='fifth' onClick={productModalClickHandler}>후기 작성하기</Button>
    </div>
  )
}