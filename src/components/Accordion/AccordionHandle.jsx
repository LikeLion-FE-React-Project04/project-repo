import styles from './AccordionHandle.module.scss';

export default function AccordionHandle({
  controlId,
  isActive,
  onActive,
  children,
  handelArrow,
}) {
  return (
    <div data-component="AccordionHandle">
      <button
        type="button"
        id={`${controlId}-handle`}
        aria-expanded={isActive}
        aria-controls={controlId}
        onClick={onActive}
        className={styles.handleButton}
      >
        {children}

        {handelArrow ? (
          isActive ? (
            <div alt="화살표" className={styles.arrowUp} />
          ) : (
            <div alt="화살표" className={styles.arrowDown} />
          )
        ) : null}
      </button>
    </div>
  );
}
