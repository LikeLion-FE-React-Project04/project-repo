import { useNavigate } from 'react-router-dom';

import { attr, getPriceFormat, getSalePercent } from '../../utils';

import classes from '@/components/ProductCard/ProductCard.module.scss';
import { selectedproductId } from '@/store/productListState.js';
import { productCartModalState } from '@/store/cartModalState.js';
import { darkFilterState } from '@/store/darkFilterState.js';
import { useSetRecoilState } from 'recoil';
import Mark from './Mark';

/* Component ---------------------------------------------------------------- */

export default function ProductCard({ product, isListCard = false }) {
  const setProductCartModalState = useSetRecoilState(productCartModalState);
  const setSelectedproductId = useSetRecoilState(selectedproductId);
  const setDarkFilterState = useSetRecoilState(darkFilterState);
  const movePage = useNavigate();

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
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
        className={classes.productCard}
        data-name="productCard"
        onClick={productCardClickHandler}
      >
        <div
          className={classes.img}
          style={{
            background: `url(${product.image.thumbnail}) 50% 50%/ 100% no-repeat`,
          }}
        >
          <CartButton />
        </div>
        <p className={classes.productName}>{product.name}</p>
        {isListCard && <p className={classes.description}>{product.description}</p>}
        <ProductCardPrice product={product} />

        {isListCard && <Mark product={product} />}
      </div>
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

function CartButton() {
  return (
    <button
      aria-label={'cartBtn'}
      className={classes.cartBtn}
      data-id={1}
      data-name="cartbutton"
      type="button"
    />
  );
}

/* Props -------------------------------------------------------------------- */
