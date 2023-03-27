import styles from './Address.module.scss';
import { Button } from '@/components/Button/Button';
import location from '@/assets/header/ic-location.svg';

function Address() {
  return (
    <div className={styles.address}>
      <div className={styles.title}>
        <img src={location} alt="배송지" width={24} height={24} />
        배송지
      </div>
      <div className={styles.info}>
        서울 중량구 면목로 42길 11 (행운빌딩) 603호
      </div>
      <div className={styles.mark}>샛별배송</div>
      <Button uiType="third" className={styles.addressButton}>
        주소 검색
      </Button>
    </div>
  );
}

export default Address;
