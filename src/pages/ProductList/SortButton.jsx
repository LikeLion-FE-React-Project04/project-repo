import styles from './SortButton.module.css';

const onSubmit = (e) => {
  e.preventDefault;
};

export const SortLowerPriceButton = ({ handler }) => {
  return (
    <button
      className={styles.sortLowerPriceButton}
      type="button"
      // onSubmit={onSubmit}
      onClick={handler}
    >
      낮은가격순
    </button>
  );
};
export const SortUpperPriceButton = ({ handler }) => {
  return (
    <form onSubmit={onSubmit} onChange={handler}>
      <button
        // type="button"
        className={styles.sortUpperPriceButton}
        // onChange={handler}
      >
        높은가격순
      </button>
    </form>
  );
};

export const DummyButtons = ({ text }) => {
  return <button className={styles.dummybutton}>{text}</button>;
};
