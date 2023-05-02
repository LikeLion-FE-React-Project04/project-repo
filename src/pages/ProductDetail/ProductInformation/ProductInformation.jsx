import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './ProductInformation.module.scss';

function ProductInformation({ product }) {
  return (
      <div className={styles.ProductDetailInner}>
        <div className={styles.GoodsIntro}>
          <LazyLoadImage src={product.image.banner} alt={product.image.alt} />
          <p className={styles.GoodsTitle}>
            <span>{product.description}</span>
            {product.name}
          </p>
          <p className={styles.GoodsDescription}>{product.explanation}</p>
        </div>
        <div className={styles.GoodsPoint}>
          {/* <h3>
                <span>Karly's Check Point</span>

              </h3> */}
          <LazyLoadImage src={product.image.view} alt={product.image.alt} />
          <LazyLoadImage src={product.image.info} alt={product.image.alt} />

        </div>
      </div>
  );
}

export default ProductInformation;
