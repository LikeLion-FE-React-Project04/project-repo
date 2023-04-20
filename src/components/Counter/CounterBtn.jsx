import classNames from 'classnames';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';

import styles from './CounterBtn.module.scss';

import {
  countState,
  countMinusBtnRefState,
  countPlusBtnRefState,
} from '@/components/Counter/@recoil/counterState.js';
import { productListFamily, selectedproductId } from '@/store/productListState';

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

  const count = useRecoilValue(countState);
  const productId = useRecoilValue(selectedproductId);
  const product = useRecoilValue(productListFamily(productId));

  useEffect(() => {
    if (type == 'minus') {
      setCountMinusBtnRef(btnRef.current);
    } else {
      setCountPlusBtnRef(btnRef.current);
    }
  }, [btnRef]);

  return (
    <button
      ref={btnRef}
      aria-label={message}
      type="button"
      {...restProps}
      className={classNames(styles.countButton, styleType)}
      disabled={true}
    />
  );
}

export default CounterBtn;
