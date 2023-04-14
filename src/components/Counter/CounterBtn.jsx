import classNames from 'classnames';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';

import styles from './CounterBtn.module.scss';
import { countState } from '@/store/CounterState.js';

import {
  countMinusBtnRefState,
  countPlusBtnRefState,
} from '@/store/CounterState.js';
import { productListFamily, selectedproductId } from '../../store/productListState';

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

  useEffect(()=>{
    if(count[productId] == 1) { // 마이너스 버튼 비활성화 
      if(type=="minus") {
        btnRef.current.style.background = "url('assets/modal/ic-minus-disabled.svg') 50% 50% / 100%";
      }
      if(type=="plus") {
        btnRef.current.style.background = "url('assets/modal/ic-plus-enabled.svg') 50% 50% / 100%";
      }
    }
    else {
      if(type=="minus") {
        btnRef.current.style.background = "url('assets/modal/ic-minus-enabled.svg') 50% 50% / 100%";
      }
      if(type=="plus") {
        btnRef.current.style.background = "url('assets/modal/ic-plus-enabled.svg') 50% 50% / 100%";
      }
    }
  }, [count, productId]);


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
