import PropTypes from 'prop-types';
import classes from '@/components/ProductCard/ProductCard.module.scss';

/* Component ---------------------------------------------------------------- */

export function ProductCard() {
  return (
    <div className={classes.productCard}>
      <div className={classes.img}>
        <CartButton />
      </div>
      <p className={classes.productName}>{'[크라운] 크림산도'}</p>
      <ProductCardPrice isSale={true} />
    </div>
  );
}

function ProductCardPrice(props) {
  if (props.isSale) {
    return (
      <>
        <p className={classes.productPrice}>
          <span className={classes.salePercent}>{'24%'}</span>
          {5000}원
        </p>
        <p className={classes.originPrice}>{5000}원</p>
      </>
    );
  } else {
    return <p className={classes.productPrice}>{5000}원</p>;
  }
}

function CartButton() {
  return (
    <button
      aria-label={'임시'}
      className={classes.cartBtn}
      data-id={1}
      data-name="button"
      type="button"
      onClick={()=>{
        console.log('CartBtn 클릭되었습니다');
      }}
     />
  );
}

export default ProductCardPrice;

/* Props -------------------------------------------------------------------- */
