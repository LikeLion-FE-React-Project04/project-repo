import { useRecoilState } from 'recoil';

import { cartDataState } from '../../../store/cartModalState';

import styles from './CartAccordionPanelItem.module.scss';
import CartDataCheckBox from './CartDataCheckBox';

import Counter from '@/components/Counter/Counter.jsx';
import { getPriceFormat } from '@/utils';

import { countState } from '@/store/CounterState';


import { useAlertBox } from '@/components/AlertBox/@hook/useAlertBox.js';

function CartAccordionPanelItem({ product = {} }) {
  const [cartData, setCartData] = useRecoilState(cartDataState);
  const [count, setCount] = useRecoilState(countState);
  const { settingAlertBox } = useAlertBox();
  const showAlertBox = (getValue) => {
    settingAlertBox(getValue); // 경고창 세팅
  };

  const makeAlert = () => {
    showAlertBox({
      alertText: '삭제하시겠습니까?',
      btnUiType: 'confirmAndCancel',
      product: product,
    });
  };

  const handleCloseBtn = () => {
    makeAlert();
  };

  return (
    <div className={styles.CartAccordionPanelItem}>
      <CartDataCheckBox name={product.id} />
      <div
        className={styles.panelImg}
        style={{
          backgroundImage: `url(${product.image.thumbnail})`,
        }}
      />
      <span className={styles.panelTitle}>{product.name}</span>
      <Counter
        name={product.id}
        // 데이터 변경
        minusBtnEvent={() => {
          let cartItems = [...cartData];
          let cartItemIndex = cartItems.findIndex(
            (item) => item.productId == product.id
          );

          cartItems[cartItemIndex] = {
            ...cartItems[cartItemIndex],
            quantity: cartItems[cartItemIndex].quantity - 1,
          };
          setCartData(cartItems);
        }}
        plusBtnEvent={() => {
          let cartItems = [...cartData];
          let cartItemIndex = cartItems.findIndex(
            (item) => item.productId == product.id
          );

          cartItems[cartItemIndex] = {
            ...cartItems[cartItemIndex],
            quantity: cartItems[cartItemIndex].quantity + 1,
          };
          setCartData(cartItems);
        }}
      />
      <span className={styles.panelPrice}>{`${getPriceFormat(
        (product.saleRatio ? product.salePrice : product.price) *
          count[product.id]
      )}원`}</span>
      <button className={styles.closeBtn} onClick={handleCloseBtn} />
    </div>
  );
}

export default CartAccordionPanelItem;
