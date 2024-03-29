import { useRecoilValue } from 'recoil';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './Address.module.scss';

import { Button } from '@/components/Button/Button';
import location from '@/assets/header/ic-location.svg';
import { addressState } from '@/store/addressState.js';
import { useAddress } from '@/hooks/useAddress.jsx';

function Address() {
  const address = useRecoilValue(addressState);
  const { handleClick } = useAddress();

  return (
    <div className={styles.address}>
      <div className={styles.title}>
        <LazyLoadImage src={location} alt="배송지" width={24} height={24} />
        배송지
      </div>
      <div className={styles.info}>
        {address ? address : '배송지를 입력해주세요.'}
      </div>
      <div className={styles.mark}>샛별배송</div>
      <Button
        className={styles.addressButton}
        uiType="third"
        onClick={handleClick}
      >
        주소 검색
      </Button>
    </div>
  );
}

export default Address;
