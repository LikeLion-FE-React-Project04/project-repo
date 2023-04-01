import { useResetRenderAllFilter } from './@recoilHook/useResetRenderAllFilter';

import styles from './FilterContainer.module.css';

export const FilterContainer = () => {
  const onClick = useResetRenderAllFilter();

  return (
    <div className={styles.productListNavFilter}>
      <span className={styles.navFillterText}>필터</span>
      <button
        aria-labelledby={'초기화 버튼'}
        className={styles.navFilterButton}
        type="button"
        onClick={onClick}
      >
        초기화
      </button>
    </div>
  );
};
