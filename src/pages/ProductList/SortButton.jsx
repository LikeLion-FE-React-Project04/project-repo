import { useSetRecoilState } from 'recoil';

import styles from './SortButton.module.css';
import { sortByPriceDescAtom } from './@recoil/renderState';

export const SortLowerPriceButton = () => {
  const setDesc = useSetRecoilState(sortByPriceDescAtom);

  return (
    <button
      aria-labelledby={'상품들을 낮은 가격순으로 정렬 해주는 버튼'}
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
      aria-labelledby={'상품들을 높은 가격순으로 정렬 해주는 버튼'}
      className={styles.sortUpperPriceButton}
      type="button"
      onClick={() => setDesc(true)}
    >
      높은가격순
    </button>
  );
};

export const DummyButtons = ({ text, AlternativeText }) => {
  return (
    <button aria-labelledby={AlternativeText} className={styles.dummybutton}>
      {text}
    </button>
  );
};
