import styles from './AccordionPanel.module.scss';

export default function AccordionPanel({ controlId, isActive, children }) {
  return (
    <div
      role="region"
      aria-labelledby={`${controlId}-handle`}
      data-component="AccordionPanel"
      className={isActive ? styles.active : styles.inactive}
    >
      {children}
    </div>
  );
}
