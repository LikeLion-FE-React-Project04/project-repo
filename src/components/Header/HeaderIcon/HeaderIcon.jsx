import styles from './HeaderIcons.module.css';

import { MainIcon } from './';

import Location from '@/assets/header/ic-location.svg';
import Heart from '@/assets/header/ic-heart.svg';
import Cart from '@/assets/header/ic-cart.svg';

function IconsContainer({ children }) {
  return <div className={styles.iconsContainer}>{children}</div>;
}

const HeaderIcon = () => {
  return (
    <IconsContainer>
      <MainIcon alt={'위치이미지'} href={'/'} img={Location} />
      <MainIcon alt={'찜하기이미지'} href={'/'} img={Heart} />
      <MainIcon alt={'장바구니이미지'} href={'/Cart'} img={Cart} />
    </IconsContainer>
  );
};

export default HeaderIcon;
