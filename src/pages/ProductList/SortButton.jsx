import { useSetRecoilState } from 'recoil';

import styles from './SortButton.module.css';
import { sortByPriceDescAtom } from './@recoil/renderState';

const onSubmit = (e) => {
  e.preventDefault;
};

export const SortLowerPriceButton = () => {
  const setDesc = useSetRecoilState(sortByPriceDescAtom);

  return (
    <button
      className={styles.sortLowerPriceButton}
      type="button"
      onClick={() => setDesc(false)}
    >
      낮은가격순
    </button>
  );
};
export const SortUpperPriceButton = () => {
  const setDesc = useSetRecoilState(sortByPriceDescAtom);

  return (
    <button
      className={styles.sortUpperPriceButton}
      type="button"
      onClick={() => setDesc(true)}
    >
      높은가격순
    </button>
  );
};

export const DummyButtons = ({ text }) => {
  return <button className={styles.dummybutton}>{text}</button>;
};
