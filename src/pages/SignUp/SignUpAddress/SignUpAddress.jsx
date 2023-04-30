import { useRecoilValue } from 'recoil';

import styles from './SignUpAddress.module.scss';

import { Button } from '@/components/Button/Button';
import Input from '@/pages/SignUp/Input/Input';
import { addressState } from '@/store/addressState.js';
import { FormInput } from '@/components/FormInput/FormInput';
import { useAddress } from '@/hooks/useAddress.jsx';

// 장바구니 주소 로직 통합 필요..
function SignUpAddress() {
  const address = useRecoilValue(addressState);

  return (
    <>
      {/* 주소 입력 여부에 따라 다른 랜더링 */}
      {!address ? <SearchAddress /> : <ReSearchAddress />}
    </>
  );
}

export default SignUpAddress;

// 내부 컴포넌트
function SearchAddress() {
  const { handleClick } = useAddress();

  return (
    <Input must={true} text={'주소'}>
      <div className={styles.DivBox}>
        <Button
          className={styles.AddressSearchInput}
          name={'address'}
          type="button"
          uiType={'third'}
          onClick={handleClick}
        >
          주소 검색
        </Button>
        <p className={styles.AddressInfo}>
          배송지에 따라 상품 정보가 달라질 수 있습니다.
        </p>
      </div>
    </Input>
  );
}

function ReSearchAddress() {
  const { handleClick } = useAddress();
  const address = useRecoilValue(addressState);

  return (
    <Input text={'주소'} must={true}>
      <FormInput type="text" name="address" value={address} />
      <Button
        name={'address'}
        type="button"
        uiType={'third'}
        onClick={handleClick}
      >
        재검색
      </Button>
    </Input>
  );
}
