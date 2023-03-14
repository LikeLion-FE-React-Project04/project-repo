import { forwardRef } from 'react';

import { MainIcon } from '../HeaderIcon/';

import styles from './MainIconList.module.css';

import Location from '@/assets/header/ic-location.svg';
import Heart from '@/assets/header/ic-heart.svg';
import Cart from '@/assets/header/ic-cart.svg';

const MainIconList = forwardRef((_, ref) => {
  return (
    <div ref={ref} style={{ display: 'none' }}>
      <div className={styles.mainIcons}>
        <MainIcon href={'/'} img={Location} alt={'위치이미지'} />
        <MainIcon href={'/'} img={Heart} alt={'찜하기이미지'} />
        <MainIcon href={'/Cart'} img={Cart} alt={'장바구니이미지'} />
      </div>
    </div>
  );
});

MainIconList.displayName = 'MainIconList';

export default MainIconList;
