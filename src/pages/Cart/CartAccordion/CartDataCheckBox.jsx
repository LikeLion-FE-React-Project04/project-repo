import { selectedState, selectedAllState } from '@/store/cartModalState.js';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import styles from './CartDataCheckBox.module.scss';

// 체크박스
// 체크박스 (회원가입 체크박스) 컴포넌트 통합 가능할 듯.
function CartDataCheckBox({
  name = 'default',
  visibleLabel = false,
  children,
}) {
  const [select, setSelect] = useRecoilState(selectedState);
  const [selectedAll, setSelectedAll] = useRecoilState(selectedAllState);
  let isChecked = select[name];

  let handleClickBtn = (e) => {
    setSelect((prev) => {
      let tmp = { ...prev };

      tmp[name] = e.target.checked;

      return tmp;
    });
  };

  // 전체 선택
  if (name === 'selectedAll') {
    isChecked = selectedAll;

    handleClickBtn = (e) => {
      setSelectedAll(e.target.checked);
      setSelect((prev) => {
        let tmp = { ...prev };

        Object.keys(prev).map((v) => {
          tmp[v] = e.target.checked;
        });

        return tmp;
      });
    };
  }

  return (
    <>
      <input
        type="checkbox"
        className={styles.CartDataCheckBox}
        id={name}
        checked={isChecked}
        onClick={handleClickBtn}
      />
      <label htmlFor={name} className={styles.label}>
        {visibleLabel && children}
      </label>
    </>
  );
}

export default CartDataCheckBox;
