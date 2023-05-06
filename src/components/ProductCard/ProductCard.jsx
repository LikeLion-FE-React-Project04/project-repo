import { useNavigate } from 'react-router-dom';

import { useSetRecoilState } from 'recoil';

import { useRef, forwardRef } from 'react';

import {
  attr,
  getPaymentPrice,
  getPriceFormat,
  getSalePercent,
} from '../../utils';

import { modalBtnState } from '../../store/cartModalState';

import Mark from './Mark';

import CartButton from './CartButton';

import classes from '@/components/ProductCard/ProductCard.module.scss';
import { selectedproductId } from '@/store/productListState.js';
import { productCartModalState } from '@/store/cartModalState.js';
import { darkFilterState } from '@/store/darkFilterState.js';
import { useEffect } from 'react';

/* Component ---------------------------------------------------------------- */

export default function ProductCard({
  product,
  isListCard = false,
  isActive = true,
}) {
  const setProductCartModalState = useSetRecoilState(productCartModalState);
  const setSelectedproductId = useSetRecoilState(selectedproductId);
  const setDarkFilterState = useSetRecoilState(darkFilterState);
  const movePage = useNavigate();
  const cartBtnRef = useRef();

  function productCardClickHandler(e) {
    let target = e.target;

    while (!attr(target, 'data-name')) {
      target = target.parentNode;
      if (target.nodeName === 'BODY') {
        target = null;

        return;
      }
    }

    if (target.dataset.name === 'cartbutton') {
      setSelectedproductId(product.id);
      setProductCartModalState(true);
      setDarkFilterState(true);

      return;
    }

    if (target.dataset.name === 'productCard') {
      movePage(`/productDetail/${product.id}`);

      return;
    }
  }

  if (product) {
    return (
      <button
        aria-hidden={isActive ? false : true}
        aria-label={`${product.name} ${getPaymentPrice(product)}원`}
        className={classes.productCardBtn}
        data-name="productCard"
        style={{
          background: `url(${product.image.thumbnail}) 0 0/ 100% no-repeat`,
        }}
        tabIndex={isActive ? 'none' : -1}
        type="button"
        onClick={productCardClickHandler}
      >
        <div className={classes.productCard}>
          <div className={classes.img}>
            <CartButton ref={cartBtnRef} isActive={isActive} />
          </div>
          <p className={classes.productName}>{product.name}</p>
          {isListCard && (
            <p className={classes.description}>{product.description}</p>
          )}
          <ProductCardPrice product={product} />

          {isListCard && <Mark product={product} />}
        </div>
      </button>
    );
  }
}

function ProductCardPrice({ product }) {
  if (product.saleRatio) {
    return (
      <>
        <p className={classes.productPrice}>
          <span className={classes.salePercent}>
            {getSalePercent(product.saleRatio)}%
          </span>
          {getPriceFormat(product.salePrice)}원
        </p>
        <p className={classes.originPrice}>{getPriceFormat(product.price)}원</p>
      </>
    );
  } else {
    return (
      <p className={classes.productPrice}>{getPriceFormat(product.price)}원</p>
    );
  }
}

/* Props -------------------------------------------------------------------- */
