import styles from './Address.module.scss';
import { Button } from '@/components/Button/Button';
import location from '@/assets/header/ic-location.svg';
import DaumPostcode from 'react-daum-postcode';
import { useState } from 'react';
import { addressState, addressNumberState } from '@/store/addressState.js';
import { useRecoilState } from 'recoil';

function Address() {
  const [openPostcode, setOpenPostcode] = useState(false);
  const [address, setAddress] = useRecoilState(addressState);
  const [addressNumber, setAddressNumber] = useRecoilState(addressNumberState);

  const handle = {
    // // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },
    // 주소 선택 이벤트
    selectAddress: (data) => {
      setAddress(data.address);
      setAddressNumber(data.zonecode);
      setOpenPostcode(false);
    },
  };

  return (
    <div className={styles.address}>
      <div className={styles.title}>
        <img src={location} alt="배송지" width={24} height={24} />
        배송지
      </div>
      <div className={styles.info}>{address}</div>
      <div className={styles.mark}>샛별배송</div>

      <Button
        uiType="third"
        className={styles.addressButton}
        onClick={handle.clickButton}
      >
        주소 검색
      </Button>
      {openPostcode && (
        <div className={styles.addressModal}>
          <DaumPostcode
            onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
            autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
            defaultQuery="판교역로 235" // 팝업을 열때 기본적으로 입력되는 검색어
          />
        </div>
      )}
    </div>
  );
}

export default Address;
