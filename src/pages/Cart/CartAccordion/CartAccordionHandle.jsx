import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './CartAccordionHandle.module.scss';

function CartAccordionHandle({ type = 'cold' }) {
  const { imgTag, title } = getUItype(type);

  return (
    <div className={styles.Handle}>
      <span className={styles.cartListImg}>{imgTag}</span>
      {title}
    </div>
  );
}

function getUItype(type) {
  let imgTag = {};
  let title = '';

  switch (type) {
    case 'cold':
      imgTag = <LazyLoadImage src="/assets/cart/ic-cold.svg" alt="냉장 식품" />;
      title = '냉장 식품';
      break;
    case 'frozen':
      imgTag = <LazyLoadImage src="assets/cart/ic-frozen.svg" alt="냉동 식품" />;
      title = '냉동 식품';
      break;
    case 'temperature':
      imgTag = <LazyLoadImage src="assets/cart/ic-temperature.svg" alt="상온 식품" />;
      title = '상온 식품';
      break;
    default:
      break;
  }

  return { imgTag, title };
}

export default CartAccordionHandle;
