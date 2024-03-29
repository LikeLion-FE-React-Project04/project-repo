import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import styles from './PaymentPrice.module.scss';

import { Button } from '@/components/Button/Button';
import { useAuthState } from '@/firebase/auth';
import { addressState } from '@/store/addressState.js';
import { cartProductsState , cartPriceData } from '@/store/cartModalState.js';
import { countState } from '@/components/Counter/@recoil/counterState.js';

import { getPriceFormat } from '@/utils';

function PaymentPrice() {
  const { user } = useAuthState();
  const address = useRecoilValue(addressState);
  const cartProducts = useRecoilValue(cartProductsState);
  const count = useRecoilValue(countState);
  const movePage = useNavigate();
  const [totalPrice, totalSalePrice, totalPaymentPrice] =
    useRecoilValue(cartPriceData);

  let cartsInfo = '';

  cartProducts.map((product) => {
    cartsInfo += `${product.name} - ${count[product.id]}개\n`;
  });

  if (user) {
    return (
      <Button
        className={styles.orderBtn}
        onClick={() => {
          alert(
            `주문이 완료되었습니다\n\n이름: ${
              user.displayName
            }님\n배송지: ${address}\n\n -주문내역-\n${cartsInfo}\n총 결제금액: ${getPriceFormat(
              totalPaymentPrice + 3000
            )}원`
          );
        }}
      >
        주문하기
      </Button>
    );
  } else {
    return (
      <Button
        uiType={'third'}
        className={styles.orderBtn}
        onClick={() => {
          alert('로그인이 필요합니다.');
          movePage('/signin');
        }}
      >
        로그인이 해주세요.
      </Button>
    );
  }
}

export default PaymentPrice;
