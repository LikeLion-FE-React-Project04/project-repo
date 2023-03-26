import { useRecoilValue } from 'recoil';
import ReactDOM from 'react-dom';

import styles from './ProductDetailPopUpLayout.module.scss';
import { ProductDetailPopUp } from './ProductDetailPopUp';

import { productLayoutState } from '@/store/detailLayoutState.js';
import { productDetailModalState } from '@/store/detailModalState.js';




function ProductDetailPopUpLayout() {
  const isVisible = useRecoilValue(productDetailModalState);
  const typeOfUi = useRecoilValue(productLayoutState); // 기본 상태는 inquiry

  if (isVisible) {
    return ReactDOM.createPortal(
      <div className={styles.productDetailPopUpLayout}>
        <ProductDetailPopUp uiType={typeOfUi} />
      </div>,
      document.getElementById("detailPortal")
    );
  }
}

export default ProductDetailPopUpLayout;