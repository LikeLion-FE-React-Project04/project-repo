import styles from './PriceInfo.modules.scss';
import { cartPriceData } from '@/store/cartModalState.js';
import { useRecoilValue } from 'recoil';
import { getPriceFormat } from '@/utils';
import EarnPointsMark from '../../../components/CartModal/EarnPointsMark';


function PriceInfo() {
  const [totalPrice, totalSalePrice, totalPaymentPrice] =
    useRecoilValue(cartPriceData);

  return (
    <div className={styles.priceInfo}>
      <div className={styles.priceLayout}>
        <span>상품금액</span>
        <span>{getPriceFormat(totalPrice)}원</span>
      </div>
      <div className={styles.priceLayout}>
        <span>상품할인금액</span>
        <span>{getPriceFormat(totalSalePrice)}원</span>
      </div>
      <div className={styles.priceLayout}>
        <span>배송비</span>
        <span>+3,000원</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.priceLayout}>
        <span>결재예정금액</span>
        <span className={styles.totalPaymentPrice}>
          {getPriceFormat(totalPaymentPrice + 3000)}원
        </span>
      </div>
      <div className={styles.pointLayout}>
        <EarnPointsMark />
        <span>최대 36월 적립 일반 0.1%</span>
      </div>
    </div>
  );
}

export default PriceInfo;
