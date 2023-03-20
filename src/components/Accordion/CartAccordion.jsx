import styles from './CartAccordion.module.scss';
import AccordionItem from './AccordionItem';

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
        <div className={styles.panel}>패널 부분</div>
        <div className={styles.accordionLine}></div>
      </AccordionItem>
      <AccordionItem index={2} width="742px" handelArrow>
        <div className={styles.Handle}>
          <span className={styles.cartListImg}>
            <img src="assets/cart/ic-frozen.svg" alt="냉장" />
          </span>
          냉장 식품
        </div>
        <div className={styles.panel}>패널 부분</div>
        <div className={styles.accordionLine}></div>
      </AccordionItem>
      <AccordionItem index={3} width="742px" handelArrow>
        <div className={styles.Handle}>
          <span className={styles.cartListImg}>
            <img src="assets/cart/ic-temperature.svg" alt="냉장" />
          </span>
          냉동 식품
        </div>
        <div className={styles.panel}>패널 부분</div>
        <div className={styles.accordionLine}></div>
      </AccordionItem>
    </>
  );
}
