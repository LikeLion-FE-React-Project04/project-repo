import CartModal from './CartModal';
import styles from './CartModalLayout.module.scss';
import { productCartModalState } from '@/store/cartModalState.js';
import { useRecoilValue } from 'recoil';
import ReactDOM from 'react-dom';

function CartModalLayout() {
  const isVisible = useRecoilValue(productCartModalState);

  if (isVisible) {
    return ReactDOM.createPortal(
      <div className={styles.cartModalLayout}>
        <CartModal />
      </div>,
      document.getElementById('cartModalPortal')
    );
  }
}

export default CartModalLayout;
