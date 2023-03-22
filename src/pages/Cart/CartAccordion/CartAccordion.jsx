import styles from './CartAccordion.module.scss';
import AccordionItem from '@/components/Accordion/AccordionItem';
import CartAccordionHandle from './CartAccordionHandle';
import CartAccordionPanelItem from './CartAccordionPanelItem';

export default function CartAccordion() {
  return (
    <>
      <AccordionItem index={1} width="742px" handelArrow>
        <CartAccordionHandle type="cold" />
        <div className={styles.panel}>
          <CartAccordionPanelItem />
          <CartAccordionPanelItem />
        </div>
        <div className={styles.accordionLine}></div>
      </AccordionItem>
      <AccordionItem index={2} width="742px" handelArrow>
        <CartAccordionHandle type="frozen" />
        <div className={styles.panel}>
          <CartAccordionPanelItem />
          <CartAccordionPanelItem />
        </div>
        <div className={styles.accordionLine}></div>
      </AccordionItem>
      <AccordionItem index={3} width="742px" handelArrow>
        <CartAccordionHandle type="temperature" />
        <div className={styles.panel}>
          <CartAccordionPanelItem />
          <CartAccordionPanelItem />
        </div>
        <div className={styles.accordionLine}></div>
      </AccordionItem>
    </>
  );
}
