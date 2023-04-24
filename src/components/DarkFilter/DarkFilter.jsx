import styles from './DarkFilter.module.scss';

import { darkFilterState } from '@/store/darkFilterState.js';
import { useRecoilValue } from 'recoil';
import { darkFilterFocusState } from '../../store/darkFilterState';

function DarkFilter() {
  let isActive = useRecoilValue(darkFilterState);
  const darkFilterFocus = useRecoilValue(darkFilterFocusState);

  const handleFilterClick = (e) => {
    if (darkFilterFocus) {
      darkFilterFocus.focus();
    }
  };

  return isActive ? (
    <div className={styles.darkFilter} onClick={handleFilterClick} />
  ) : null;
}

export default DarkFilter;
