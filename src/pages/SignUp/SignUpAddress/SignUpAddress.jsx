import { useState } from 'react';
import { Button } from '../../../components/Button/Button';
import styles from './SignUpAddress.module.scss';
import Input from '@/pages/SignUp/Input/Input';
import { useRecoilState } from 'recoil';
import { addressState, addressNumberState } from '@/store/addressState.js';
import DaumPostcode from 'react-daum-postcode';
import { FormInput } from '@/components/FormInput/FormInput';

// 장바구니 주소 로직 통합 필요..
function SignUpAddress() {
  const [openPostcode, setOpenPostcode] = useState(false);
  const [address, setAddress] = useRecoilState(addressState);
  const [addressNumber, setAddressNumber] = useRecoilState(addressNumberState);
  const handle = {

    // 버튼 클릭 이벤트
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
    <div>
      
      {/* 주소 입력 여부에 따라 다른 랜더링 */}
      {!address ? (
        <Input text={'주소'} must={true}>
          <div className={styles.DivBox}>
            <Button
              name={'address'}
              uiType={'third'}
              className={styles.AddressSearchInput}
              onClick={handle.clickButton}
              type="button"
            >
              주소 검색
            </Button>
            <p className={styles.AddressInfo}>
              배송지에 따라 상품 정보가 달라질 수 있습니다.
            </p>
          </div>
        </Input>
      ) : (
        <Input text={'주소'} must={true}>
          <FormInput type="text" name="address" value={address} />
          <Button
            name={'address'}
            uiType={'third'}
            onClick={handle.clickButton}
            type="button"
          >
            재검색
          </Button>
        </Input>
      )}
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

export default SignUpAddress;
