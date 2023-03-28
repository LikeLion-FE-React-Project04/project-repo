import { selectedState, selectedAllState } from '@/store/cartModalState.js';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import styles from './CartDataCheckBox.module.scss';

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
    <label htmlFor={name} className={styles.label}>
      <input
        type="checkbox"
        className={styles.CartDataCheckBox}
        id={name}
        checked={isChecked}
        onClick={handleClickBtn}
      />
      {visibleLabel && children}
    </label>
  );
}

export default CartDataCheckBox;
