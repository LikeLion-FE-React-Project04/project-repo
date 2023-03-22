import styles from './CartAccordionPanelItem.module.scss';
import testImg from '@/assets/product/tangtang/thumbnail.jpg';
import Counter from '@/components/Counter/Counter.jsx';

function CartAccordionPanelItem() {
  return (
    <div className={styles.CartAccordionPanelItem}>
      <img src={'assets/cart/ic-checked-true.svg'} width={24} height={24}></img>
      <div
        className={styles.panelImg}
        style={{
          backgroundImage: `url(${testImg})`,
        }}
      ></div>
      <span className={styles.panelTitle}>{`[풀무원] 탱탱쫄면 (4개입)`}</span>
      <Counter />
      <span className={styles.panelPrice}>4,980원</span>
      <img src={'assets/cart/ic-cancel.svg'} width={30} height={30}></img>
    </div>
  );
}

export default CartAccordionPanelItem;
