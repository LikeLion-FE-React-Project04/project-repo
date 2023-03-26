import { useSetRecoilState } from 'recoil';

import styles from "./ReviewTitleContainer.module.scss";

import { Button, PageTitle } from '@/components';
import { productDetailModalState } from '@/store/detailModalState.js';
import { darkFilterState } from '@/store/darkFilterState.js';


export default function ReviewTitleContainer() {
  const setProductDetailModalState = useSetRecoilState(productDetailModalState);
  const setDarkFilterState = useSetRecoilState(darkFilterState);

  function productModalClickHandler() {
    setProductDetailModalState(true);
    setDarkFilterState(true);
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