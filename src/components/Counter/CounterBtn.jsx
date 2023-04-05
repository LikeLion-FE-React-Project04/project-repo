import classNames from 'classnames';
import { useSetRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';

import styles from './CounterBtn.module.scss';

import {
  countMinusBtnRefState,
  countPlusBtnRefState,
} from '@/store/CounterState.js';

function CounterBtn({ type = 'plus', ...restProps }) {
  const setCountMinusBtnRef = useSetRecoilState(countMinusBtnRefState);
  const setCountPlusBtnRef = useSetRecoilState(countPlusBtnRefState);
  const btnRef = useRef();
  let styleType = styles.plus;
  let message = '수량 1 증가';

  if (type == 'minus') {
    styleType = styles.minus;
    message = '수량 1 감소';
  }

  useEffect(() => {
    if (type == 'minus') {
      setCountMinusBtnRef(btnRef.current);
    } else {
      setCountPlusBtnRef(btnRef.current);
    }
  }, [btnRef]);

  return (
    <button
      aria-label={message}
      ref={btnRef}
      type="button"
      {...restProps}
      className={classNames(styles.countButton, styleType)}
    />
  );
}

export default CounterBtn;
