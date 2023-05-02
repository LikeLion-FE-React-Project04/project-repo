import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { modalBtnState } from '../../store/cartModalState';

import classes from './CartButton.module.scss';

export default function CartButton({ isActive }) {
  const setModalBtnState = useSetRecoilState(modalBtnState);
  const cartBtnRef = useRef();
  const handleCartBtnOnClick = () => {
    setModalBtnState(cartBtnRef.current);
  };

  return (
    <button
      ref={cartBtnRef}
      aria-label={'장바구니 담기'}
      className={classes.cartBtn}
      data-id={1}
      data-name="cartbutton"
      type="button"
      onClick={handleCartBtnOnClick}
      tabIndex={isActive ? 'none' : -1}
      aria-hidden={isActive ? false : true}
    />
  );
}
