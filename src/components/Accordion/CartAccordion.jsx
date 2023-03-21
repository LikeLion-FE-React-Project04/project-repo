import styles from './CartAccordion.module.scss';
import AccordionItem from './AccordionItem';
import checkedFalse from '@/assets/cart/ic-checked-false.svg';
import checkedTrue from '@/assets/cart/ic-checked-true.svg';
import testImg from '@/assets/product/tangtang/thumbnail.jpg';
import cancel from '@/assets/cart/ic-cancel.svg';
import Counter from '@/components/Counter/Counter.jsx';

export default function CartAccordion() {
  return (
    <>
      <AccordionItem index={1} width="742px" handelArrow>
        <div className={styles.Handle}>
          <span className={styles.cartListImg}>
            <img src="/assets/cart/ic-cold.svg" alt="냉장" />
          </span>
          냉장 식품
        </div>
        <div className={styles.panel}>
          <CartAccordionPanelItem />
          <CartAccordionPanelItem />
        </div>
        <div className={styles.accordionLine}></div>
      </AccordionItem>
      <AccordionItem index={2} width="742px" handelArrow>
        <div className={styles.Handle}>
          <span className={styles.cartListImg}>
            <img src="assets/cart/ic-frozen.svg" alt="냉장" />
          </span>
          냉장 식품
        </div>
        <div className={styles.panel}>
          <CartAccordionPanelItem />
          <CartAccordionPanelItem />
        </div>
        <div className={styles.accordionLine}></div>
      </AccordionItem>
      <AccordionItem index={3} width="742px" handelArrow>
        <div className={styles.Handle}>
          <span className={styles.cartListImg}>
            <img src="assets/cart/ic-temperature.svg" alt="냉장" />
          </span>
          냉동 식품
        </div>
        <div className={styles.panel}>
          <CartAccordionPanelItem />
          <CartAccordionPanelItem />
        </div>
        <div className={styles.accordionLine}></div>
      </AccordionItem>
    </>
  );
}

function CartAccordionPanelItem() {
  return (
    <div className={styles.CartAccordionPanelItem}>
      <img src={checkedTrue} width={24} height={24}></img>
      <div
        className={styles.panelImg}
        style={{
          backgroundImage: `url(${testImg})`,
        }}
      ></div>
      <span className={styles.panelTitle}>{`[풀무원] 탱탱쫄면 (4개입)`}</span>
      <Counter />
      <span className={styles.panelPrice}>4,980원</span>
      <img src={cancel} width={30} height={30}></img>
    </div>
  );
}
