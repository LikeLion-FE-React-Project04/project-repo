import { useRecoilValue } from 'recoil';
import ReactDOM from 'react-dom';

import { ProductDetailPopUp } from './ProductDetailPopUp';
import styles from './ProductDetailPopUpLayout.module.scss';

import { productDetailModalState } from '@/store/detailModalState.js';


function ProductDetailPopUpLayout() {
  const isVisible = useRecoilValue(productDetailModalState);

  if (isVisible) {
    return ReactDOM.createPortal(
      <div className={styles.productDetailPopUpLayout}>
        <ProductDetailPopUp uiType='inquiry' />
      </div>,
      document.getElementById("detailPortal")
    );
  }
}

export default ProductDetailPopUpLayout;