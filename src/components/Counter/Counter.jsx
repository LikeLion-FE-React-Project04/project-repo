import { useSetRecoilState } from 'recoil';
import { countState } from '@/store/CounterState.js';

import styles from './Counter.module.scss';
import CounterBtn from './CounterBtn';
import Count from './Count';

function Counter() {
  const setCount = useSetRecoilState(countState);
  
  return (
    <div className={styles.countLayout}>
      <CounterBtn type="minus" onClick={() => setCount((count) => count - 1)} />
      <Count />
      <CounterBtn type="plus" onClick={() => setCount((count) => count + 1)} />
    </div>
  );
}

export default Counter;
