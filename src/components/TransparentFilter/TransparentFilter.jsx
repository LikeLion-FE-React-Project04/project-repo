import { useRecoilValue } from 'recoil';

import styles from './TransparentFilter.module.scss'
import { transparentFilterState } from './@recoil/transparentFilterState';


function TransparentFilter() {
  let isActive = useRecoilValue(transparentFilterState);

  return isActive? <div className={styles.transparentFilter} />: null;
}

export default TransparentFilter;