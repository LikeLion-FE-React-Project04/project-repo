// import AccordionItem from '@/components/Accordian/AccordionItem.jsx'
import PageTitle from '../../components/PageTitle/PageTitle';
import Address from './Address/Address';
import styles from './Cart.module.scss';
import { Button } from '@/components/Button/Button';

import CartAccordion from './CartAccordion/CartAccordion';
import PriceInfo from './PriceInfo/PriceInfo';

function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.title}>
        <PageTitle>장바구니</PageTitle>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginRight: '24px' }}>
          <CartAccordion />
        </div>
        <div>
          <Address />
          <PriceInfo></PriceInfo>
          <Button className={styles.orderBtn}>주문하기</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
