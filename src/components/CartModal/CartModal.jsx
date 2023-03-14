import classNames from 'classnames';

import styles from './CartModal.module.scss';

import {
  selectedproductId,
  productListFamily,
} from '@/store/productListState.js';
import { productCartModalState } from '@/store/cartModalState.js';
import { darkFilterState } from '@/store/darkFilterState.js';
import Counter from '../Counter/Counter';
import { getPriceFormat } from '@/utils';
import TotalPrice from './TotalPrice';
import { Button } from '../Button/Button';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { useId } from 'react';
import { countState } from '@/store/CounterState.js';
import { saveCartDataToLocalStorage } from '../../utils/saveCartDataToLocalStorage';

function CartModal() {
  const productId = useRecoilValue(selectedproductId);
  const product = useRecoilValue(productListFamily(productId));
  const [isVisible, setIsVisible] = useRecoilState(productCartModalState);
  const setDarkFilter = useSetRecoilState(darkFilterState);
  const count = useRecoilValue(countState);

  const handleCancelBtnClick = () => {
    setIsVisible(false);
    setDarkFilter(false);
  };

  const handleCartBtnClick = () => {
    saveCartDataToLocalStorage(product.id, count);
    setIsVisible(false);
    setDarkFilter(false);
  };

  if (isVisible) {
    return (
      <div className={styles.cartModal}>
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
          <Counter />
        </div>
        <div className={styles.totalPrice}>
          <div className={styles.priceLayout1}>
            <span className={styles.total}>합계</span>
            {product.saleRatio ? (
              <TotalPrice price={product.salePrice} />
            ) : (
              <TotalPrice price={product.price} />
            )}
          </div>
          <div className={styles.priceLayout3}>
            <span className={styles.mark}>적립</span>
            <span className={styles.accumulate}>구매시 5원 적립</span>
          </div>
        </div>
        <div className={styles.buttonLayout}>
          <Button type="button" uiType="fourth" onClick={handleCancelBtnClick}>
            취소
          </Button>
          <Button type="button" onClick={handleCartBtnClick}>
            장바구니 담기
          </Button>
        </div>
      </div>
    );
  }
}

export default CartModal;
