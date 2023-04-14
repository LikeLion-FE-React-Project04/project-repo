import { useRecoilState } from 'recoil';

import CounterBtn from './CounterBtn';
import Count from './Count';
import styles from './Counter.module.scss';

import { countState } from '@/store/CounterState.js';

// 리팩토링 가능할듯 카운터 형태를 children으로,,,
function Counter({
  name = 'default',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  minusBtnEvent = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  plusBtnEvent = () => {},
}) {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div className={styles.countLayout}>
      <CounterBtn
        type="minus"
        onClick={() => {
          if (count[name] == 1) {
            
            return;
          }
          minusBtnEvent();
          setCount((count) => {
            let tmp = { ...count };

            tmp[name] -= 1;

            return tmp;
          });
        }}
      />
      <Count name={name} />
      <CounterBtn
        type="plus"
        onClick={() => {
          plusBtnEvent();
          setCount((count) => {
            let tmp = { ...count };

            tmp[name] += 1;

            return tmp;
          });
        }}
      />
    </div>
  );
}

export default Counter;
