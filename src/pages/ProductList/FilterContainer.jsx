import { useSetRecoilState } from 'recoil';

import { useResetRenderAllFilter } from './@recoilHook/useResetRenderAllFilter';

import styles from './FilterContainer.module.css';
import {
  checkedCategoryListAtom,
  checkedBrandListAtom,
  checkedKalryOnlyListAtom,
  checkedPriceListAtom,
  checkedBenefitsListAtom,
} from './@recoil/renderState';

useSetRecoilState;

export const FilterContainer = () => {
  const onClick = useResetRenderAllFilter();

  return (
    <div className={styles.productListNavFilter}>
      <span className={styles.navFillterText}>필터</span>
      <button
        type="button"
        onClick={onClick}
        className={styles.navFilterButton}
      >
        초기화
      </button>
    </div>
  );
};
