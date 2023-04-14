// import AccordionItem from '@/components/Accordian/AccordionItem.jsx'
import PageTitle from '../../components/PageTitle/PageTitle';
import Address from './Address/Address';
import styles from './Cart.module.scss';
import { Button } from '@/components/Button/Button';

import CartAccordion from './CartAccordion/CartAccordion';
import PriceInfo from './PriceInfo/PriceInfo';
import PaymentPrice from './PaymentPrice/PaymentPrice';

function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.title}>
        <PageTitle>장바구니</PageTitle>
      </div>

      <div className={styles.layout}>
        <div>

          {/* 장바구니 아코디언 */}
          <CartAccordion />
        </div>
        <div>

          {/* 주소 */}
          <Address />

          {/* 가격 정보 */}
          <PriceInfo></PriceInfo>

          {/* 주문하기 */}
          <PaymentPrice></PaymentPrice>
        </div>
      </div>
    </div>
  );
}

export default Cart;
