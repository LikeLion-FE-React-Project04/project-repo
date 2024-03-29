import { forwardRef } from 'react';

import { MainIcon } from '../HeaderIcon/';

import styles from './MainIconList.module.css';

import Location from '@/assets/header/ic-location.svg';
import Heart from '@/assets/header/ic-heart.svg';
import Cart from '@/assets/header/ic-cart.svg';
import CartPopup from '@/components/CartPopup/CartPopup.jsx';

const MainIconList = forwardRef((_, ref) => {
  return (
    <div ref={ref} style={{ display: 'none' }}>
      <div className={styles.mainIcons}>
        <MainIcon href={'/'} img={Location} alt={'위치'} />
        <MainIcon href={'/'} img={Heart} alt={'찜하기'} />
        <MainIcon href={'/Cart'} img={Cart} alt={'장바구니'} />
      </div>
      <CartPopup />
    </div>
  );
});

MainIconList.displayName = 'MainIconList';

export default MainIconList;
