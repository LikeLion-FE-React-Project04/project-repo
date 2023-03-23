import styles from "./ProductReview.module.scss";
import ReviewTitleContainer from './ReviewTitleContainer';
import ReviewListContainer from './ReviewListContainer';

function ProductReview() {
  return (
    <div className={styles.productReview}>
      <ReviewTitleContainer />
      <ReviewListContainer />
    </div>
  )
}

export default ProductReview