import { useRecoilValue } from 'recoil';

import styles from './TransparentFilter.module.scss'
import { transparentFilterFocusState, transparentFilterState } from './@recoil/transparentFilterState';


function TransparentFilter() {
  let isActive = useRecoilValue(transparentFilterState);
  const transparentFilterFocus = useRecoilValue(transparentFilterFocusState); 

  const handleFilterClick = (e) => { //  투명필터를 클릭할때마다
    if (transparentFilterFocus) { // 모달창의 DOM이 들어있는 상태라면? 즉, 모달창이 떠있는 상황이라면?
      transparentFilterFocus.focus(); // 다시 모달창으로 focus를 시켜준다..
    }
  };

  return isActive? <div className={styles.transparentFilter} onClick={handleFilterClick}/>: null;
}

export default TransparentFilter;