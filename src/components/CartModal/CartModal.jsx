import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useRef } from 'react';

import Counter from '../Counter/Counter';
import { saveCartData } from '../../utils';
import { Button } from '../Button/Button';
import { modalBtnState } from '../../store/cartModalState';

import styles from './CartModal.module.scss';
import TotalPrice from './TotalPrice';
import EarnPointsMark from './EarnPointsMark';

import {
  selectedproductId,
  productListFamily,
} from '@/store/productListState.js';
import {
  productCartModalState,
  cartDataState,
} from '@/store/cartModalState.js';
import { darkFilterState } from '@/store/darkFilterState.js';
import { getPriceFormat } from '@/utils';
import {
  countState,
  countMinusBtnRefState,
  countPlusBtnRefState,
} from '@/components/Counter/@recoil/counterState.js';
import { cartPopupInfoState, cartPopupState } from '@/store/Popup';
import { darkFilterFocusState } from '@/store/darkFilterState';

function CartModal() {
  const productId = useRecoilValue(selectedproductId);
  const product = useRecoilValue(productListFamily(productId));
  const setIsVisible = useSetRecoilState(productCartModalState);
  const setDarkFilter = useSetRecoilState(darkFilterState);
  const [cartData, setCartData] = useRecoilState(cartDataState);
  const closeBtnRef = useRef();
  const containBtnRef = useRef([]);
  const countMinusBtnRef = useRecoilValue(countMinusBtnRefState);
  const countPlusBtnRef = useRecoilValue(countPlusBtnRefState);
  const modalBtn = useRecoilValue(modalBtnState);
  const modalRef = useRef();
  const setCartPopupInfo = useSetRecoilState(cartPopupInfoState);
  const cartPopup = useSetRecoilState(cartPopupState);
  const setDarkFilterFocus = useSetRecoilState(darkFilterFocusState);

  // Counter 초기화
  useEffect(() => {
    console.log('useEffect1');
    setCount({
      [product.id]: 1,
    });
    closeBtnRef.current.focus();
    // 클린업 함수 필요
    setDarkFilterFocus(modalRef.current);
  }, []);

  const [count, setCount] = useRecoilState(countState);

  const handleCancelBtnClick = () => {
    setIsVisible(false);
    setDarkFilter(false);
    modalRef.current.ariaHidden = true;
    modalRef.current.ariaModal = false;
    modalBtn.focus();
  };

  const handleCartBtnClick = () => {
    saveCartData(product.id, count[product.id], cartData, setCartData);
    setIsVisible(false);
    setDarkFilter(false);
    setCartPopupInfo({
      desc: `${product.name}이 담겼습니다`,
      img: product.image.thumbnail,
    });
    cartPopup(true);

    modalBtn.focus();
  };

  const handleModalKeyEvent = (e) => {
    const focusableElements = [
      countMinusBtnRef,
      countPlusBtnRef,
      closeBtnRef.current,
      containBtnRef.current,
    ];

    let firstFocusableElement;

    if (countMinusBtnRef.disabled == false) {
      firstFocusableElement = countMinusBtnRef;
    } else {
      firstFocusableElement = countPlusBtnRef;
    }
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];
    const isTabPressed = e.key === 'Tab';
    const isShiftPressed = e.shiftKey;

    console.log(e.key);
    if (!isTabPressed) {
      return;
    }
    if (isShiftPressed) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      console.log('lastFocusableElement: ', lastFocusableElement);
      console.log('document.activeElement: ', document.activeElement);
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  };

  return (
    <div
      tabIndex="-1"
      ref={modalRef}
      aria-atomic="true"
      aria-label={`${product.name}모달창이 열렸습니다.`}
      aria-live="assertive"
      aria-modal="true"
      className={styles.cartModal}
      role="dialog"
      onKeyDown={handleModalKeyEvent}
    >
      <div className={styles.info}>
        <span className={styles.title}>{product.name}</span>
        <span className={styles.priceLayout}>
          {product.saleRatio ? (
            <>
              <span className={styles.price}>
                {getPriceFormat(product.salePrice)}원
              </span>
              <span className={styles.sale}>
                {getPriceFormat(product.price)}원
              </span>
            </>
          ) : (
            <span className={styles.price}>
              {getPriceFormat(product.price)}원
            </span>
          )}
        </span>
        <span className={styles.couterLayout}>
          <Counter name={product.id} />
        </span>
      </div>
      <div className={styles.totalPrice}>
        <div className={styles.priceLayout1}>
          <span className={styles.total}>합계</span>
          {/* 최적화 진행시 수정해야할듯 */}
          {product.saleRatio ? (
            <TotalPrice name={product.id} price={product.salePrice} />
          ) : (
            <TotalPrice name={product.id} price={product.price} />
          )}
        </div>
        <div className={styles.priceLayout3}>
          <EarnPointsMark />
          <span className={styles.accumulate}>구매시 5원 적립</span>
        </div>
      </div>
      <div className={styles.buttonLayout}>
        <Button
          ref={closeBtnRef}
          type="button"
          uiType="fourth"
          onClick={handleCancelBtnClick}
        >
          취소
        </Button>
        <Button ref={containBtnRef} type="button" onClick={handleCartBtnClick}>
          장바구니 담기
        </Button>
      </div>
    </div>
  );
}

export default CartModal;
