import styles from './TotalPrice.module.scss';

import { useRecoilValue } from 'recoil';
import { countState } from '@/store/CounterState.js';
import { getPriceFormat } from '../../utils';

function TotalPrice({ price }) {
  const count = useRecoilValue(countState);

  return (
    <span className={styles.priceLayout2}>{getPriceFormat(price * count)}원</span>
  );
}

export default TotalPrice;
