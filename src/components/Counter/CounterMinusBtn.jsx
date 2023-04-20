import classNames from 'classnames';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';

import styles from './CounterBtn.module.scss';

import {
  countState,
  countMinusBtnRefState,
} from '@/components/Counter/@recoil/counterState.js';

function CounterMiunsBtn({ name, additionEvent }) {
  const setCountMinusBtnRef = useSetRecoilState(countMinusBtnRefState);
  const btnRef = useRef();
  let styleType = styles.minus;
  let message = '수량 1 감소';

  const [count, setCount] = useRecoilState(countState);

  useEffect(() => {
    setCountMinusBtnRef(btnRef.current);
  }, [btnRef]);

  useEffect(() => {
    if (count[name] == 1) {
      // 마이너스 버튼 비활성화
      btnRef.current.disabled = true;
    } else {
      btnRef.current.disabled = false;
    }
  }, [count]);

  const handleBtn = () => {
    if (count[name] == 1) {
      return;
    }
    additionEvent();
    setCount((count) => {
      let tmp = { ...count };

      tmp[name] -= 1;

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

export default CounterMiunsBtn;
