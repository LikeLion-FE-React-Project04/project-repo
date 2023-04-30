import { useRecoilState } from 'recoil';

import { cartPopupInfoState, cartPopupState } from '../../store/Popup';

import styles from './CartPopup.module.scss';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

function CartPopup({ type }) {
  const [cartPopup, setCartPopup] = useRecoilState(cartPopupState);
  const cartPopupInfo = useRecoilValue(cartPopupInfoState);

  // 부드럽게 사라잘려면 opacity로 랜더링을 계속 해야하나?
  //const [opacity, setOpacity] = useState(100);

  // 헤더랑 고정형 헤더를 따로 분리해서 만들어서 2가지 경우로 만들어야합니다..
  let layoutStyle;
  
  if (type == 'originHeader') {
    layoutStyle = 'cartPopup2'
  } else {
    layoutStyle = 'cartPopup';
  }

  useEffect(() => {
    if (cartPopup) {
      const timer = setTimeout(() => {
        setCartPopup(false);
      }, 3000);
      // const otimer = setTimeout(() => {
      //   setOpacity(opacity - 8);
      // }, 50);

      return () => clearTimeout(timer);
    }
  });

  if (cartPopup) {
    return (
      <div className={styles[layoutStyle]}>
        <div className={styles.cartInfo}>
          <div
            className={styles.img}
            style={{
              background: `url(${cartPopupInfo.img}) 50% 50% / 120% no-repeat`,
            }}
          />
          <div className={styles.productTitle}>{cartPopupInfo.desc}</div>
          <div className={styles.phrases}>장바구니가 담겼습니다.</div>
        </div>
      </div>
    );
  }
}

export default CartPopup;
