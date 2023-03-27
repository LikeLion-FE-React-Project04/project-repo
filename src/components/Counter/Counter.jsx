import { useSetRecoilState } from 'recoil';
import { countState } from '@/store/CounterState.js';

import styles from './Counter.module.scss';
import CounterBtn from './CounterBtn';
import Count from './Count';
import { useEffect } from 'react';

// 리팩토링 가능할듯 카운터 형태를 children으로,,,
function Counter({
  name = 'default',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  minusBtnEvent = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  plusBtnEvent = () => {},
}) {
  const setCount = useSetRecoilState(countState);

  return (
    <div className={styles.countLayout}>
      <CounterBtn
        type="minus"
        onClick={() => {
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
