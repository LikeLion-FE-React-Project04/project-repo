import classNames from 'classnames';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';

import styles from './CounterBtn.module.scss';

import {
  countState,
  countPlusBtnRefState,
} from '@/components/Counter/@recoil/counterState.js';

function CounterPlusBtn({ name, additionEvent }) {
  const setCountPlusBtnRef = useSetRecoilState(countPlusBtnRefState);
  const btnRef = useRef();
  let styleType = styles.plus;
  let message = '수량 1 증가';

  const [count, setCount] = useRecoilState(countState);

  useEffect(() => {
    setCountPlusBtnRef(btnRef.current);
  }, [btnRef]);

  const handleBtn = () => {
    additionEvent();
    setCount((count) => {
      let tmp = { ...count };

      tmp[name] += 1;

      return tmp;
    });
  };

  return (
    <button
      ref={btnRef}
      aria-label={message}
      className={classNames(styles.countButton, styleType)}
      type="button"
      onClick={handleBtn}
    />
  );
}

export default CounterPlusBtn;
