import classNames from 'classnames';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useRef } from 'react';

import styles from './CounterBtn.module.scss';

import {
  countState,
  countPlusBtnRefState,
} from '@/components/Counter/@recoil/counterState.js';
import { productListFamily } from '@/store/productListState';

function CounterPlusBtn({ name, additionEvent }) {
  const setCountPlusBtnRef = useSetRecoilState(countPlusBtnRefState);
  const product = useRecoilValue(productListFamily(name));
  const btnRef = useRef();
  let styleType = styles.plus;
  let message = '수량 1 증가';

  const [count, setCount] = useRecoilState(countState);

  useEffect(() => {
    setCountPlusBtnRef(btnRef.current);
  }, [btnRef]);

  useEffect(() => {
    if (count[name] == product.stock) {
      // 플러스 버튼 비활성화
      btnRef.current.disabled = true;
    } else {
      btnRef.current.disabled = false;
    }
  }, [count]);

  const handleBtn = () => {
    console.log('product:', product.stock);
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
