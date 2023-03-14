import styles from './DarkFilter.module.scss'

import {darkFilterState} from '@/store/darkFilterState.js'
import { useRecoilValue } from 'recoil';

function DarkFilter() {
  let isActive = useRecoilValue(darkFilterState);

  return isActive? <div className={styles.darkFilter} />: null;
}

export default DarkFilter