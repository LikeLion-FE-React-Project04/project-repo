import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { modalBtnState } from '../../store/cartModalState';

import classes from './CartButton.module.scss';

export default function CartButton() {
  const setModalBtnState = useSetRecoilState(modalBtnState);
  const cartBtnRef = useRef();
  const handleCartBtnOnClick = () => {
    setModalBtnState(cartBtnRef.current);
  };

  return (
    <button
      ref={cartBtnRef}
      aria-label={'cartBtn'}
      className={classes.cartBtn}
      data-id={1}
      data-name="cartbutton"
      type="button"
      onClick={handleCartBtnOnClick}
    />
  );
}
