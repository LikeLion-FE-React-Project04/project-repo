import CartModal from './CartModal';
import styles from './CartModalLayout.module.scss';
import { productCartModalState } from '@/store/cartModalState.js';
import { useRecoilValue } from 'recoil';

function CartModalLayout() {
  const isVisible = useRecoilValue(productCartModalState);

  if (isVisible) {
    return (
      <div className={styles.cartModalLayout}>
        <CartModal />
      </div>
    );
  }
}

export default CartModalLayout;
