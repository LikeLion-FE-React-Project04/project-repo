import { useRecoilValue } from 'recoil';

import styles from './TotalPrice.module.scss';

import { countState } from '@/components/Counter/@recoil/counterState.js';
import { getPriceFormat } from '@/utils';

function TotalPrice({ price, name = 'default' }) {
  const count = useRecoilValue(countState);

  return (
    <span className={styles.priceLayout2}>
      {getPriceFormat(price * count[name])}원
    </span>
  );
}

export default TotalPrice;
