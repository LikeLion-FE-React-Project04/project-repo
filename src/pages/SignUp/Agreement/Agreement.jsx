import styles from './Agreement.module.scss';
import RightArrow from '@/assets/common/ic-right-arrow.svg';
import CheckBox from '../CheckBox/CheckBox';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { agreementState } from '../@recoil/signUp';

function Agreement() {
  const checkedList = {
    ag1: false,
    ag2: false,
    ag3: false,
    ag4: false,
  };
  const [allChecked, setAllChecked] = useState(false);
  const [checkedState, setCheckedState] = useRecoilState(agreementState);

  const handleChangeAllChecked = () => {
    const currenChecked = allChecked;
    setAllChecked(!currenChecked);
    setCheckedState((prev) => {
      const newState = { ...prev };
      Object.keys(prev).map((key) => {
        newState[key] = !currenChecked;
      });
      return newState;
    });
  };

  const handleChangeChecked = (e) => {
    setCheckedState((prev) => {
      const newState = { ...prev };
      newState[e.target.id] = !prev[e.target.id];
      return newState;
    });
  };

  return (
    <div className={styles.Agreement}>
      <div className={styles.SubTitle}>
        <p>이용약관동의</p>
      </div>
      <div className={styles.SubAgreeList}>
        <ul>
          <li className={styles.AllSelectList}>
            <CheckBox
              name={'all'}
              visibleLabel={true}
              checked={allChecked}
              onChange={handleChangeAllChecked}
            >
              <div className={styles.AllAgreeLayout}>
                <div className={styles.AllAgreeTitle}>
                  전체 동의합니다.
                  <div className={styles.AllAgreeSubText}>
                    선택항목에 동의하지 않은 경우도 회원가입 및 일반적인
                    서비스를 이용할 수 있습니다.
                  </div>
                </div>
              </div>
            </CheckBox>
          </li>
          <li className={styles.AgreeSelectList}>
            <CheckBox
              name={'ag1'}
              visibleLabel={true}
              checked={checkedState.ag1}
              onChange={handleChangeChecked}
            >
              <span>이용약관 동의 (필수)</span>
            </CheckBox>
            <div>
              <p>약관보기</p>
              <img src={RightArrow} alt={'약관보기 화살표'} />
            </div>
          </li>
          <li className={styles.AgreeSelectList}>
            <CheckBox
              name={'ag2'}
              visibleLabel={true}
              checked={checkedState.ag2}
              onChange={handleChangeChecked}
            >
              <span>개인정보 수집 · 이용 동의 (필수)</span>
            </CheckBox>
            <div>
              <p>약관보기</p>
              <img src={RightArrow} alt={'약관보기 화살표'} />
            </div>
          </li>
          <li className={styles.AgreeSelectList}>
            <CheckBox
              name={'ag3'}
              visibleLabel={true}
              checked={checkedState.ag3}
              onChange={handleChangeChecked}
            >
              <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)</span>
            </CheckBox>
            <div>
              <p>약관보기</p>
              <img src={RightArrow} alt={'약관보기 화살표'} />
            </div>
          </li>
          <li className={styles.AgreeSelectList}>
            <CheckBox
              name={'ag4'}
              visibleLabel={true}
              checked={checkedState.ag4}
              onChange={handleChangeChecked}
            >
              <span>본인은 만 14세 이상입니다. (필수)</span>
            </CheckBox>
            <div>
              <p>약관보기</p>
              <img src={RightArrow} alt={'약관보기 화살표'} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Agreement;
