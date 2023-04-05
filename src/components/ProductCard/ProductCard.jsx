import { useNavigate } from 'react-router-dom';

import { useSetRecoilState } from 'recoil';

import { attr, getPriceFormat, getSalePercent } from '../../utils';

import Mark from './Mark';

import classes from '@/components/ProductCard/ProductCard.module.scss';
import { selectedproductId } from '@/store/productListState.js';
import { productCartModalState } from '@/store/cartModalState.js';
import { darkFilterState } from '@/store/darkFilterState.js';
import { modalBtnState } from '../../store/cartModalState';
import { useRef } from 'react';
import CartButton from './CartButton';

/* Component ---------------------------------------------------------------- */

export default function ProductCard({ product, isListCard = false }) {
  const setProductCartModalState = useSetRecoilState(productCartModalState);
  const setSelectedproductId = useSetRecoilState(selectedproductId);
  const setDarkFilterState = useSetRecoilState(darkFilterState);
  const movePage = useNavigate();
  const setModalBtnState = useSetRecoilState(modalBtnState);
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
      // setModalBtnState();

      return;
    }

    if (target.dataset.name === 'productCard') {
      movePage(`/productDetail/${product.id}`);

      return;
    }
  }

  if (product) {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <button
        className={classes.productCardBtn}
        data-name="productCard"
        type="button"
        onClick={productCardClickHandler}
      >
        <div className={classes.productCard}>
          <div
            className={classes.img}
            style={{
              background: `url(${product.image.thumbnail}) 50% 50%/ 100% no-repeat`,
            }}
          >
            <CartButton ref={cartBtnRef} />
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
