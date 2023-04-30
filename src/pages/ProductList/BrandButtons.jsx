import styles from './BrandButtons.module.css';

export const BrandButtons = ({ 자음, 셋팅자음 }) => {
  return (
    <div className={styles.brandButtonContainer}>
      <button
        className={styles.brandSortButton}
        type="button"
        onClick={() => 셋팅자음('ㄱ')}
      >
        ㄱ
      </button>
      <button
        className={styles.brandSortButton}
        type="button"
        onClick={() => 셋팅자음('ㄴ')}
      >
        ㄴ
      </button>
      <button
        className={styles.brandSortButton}
        type="button"
        onClick={() => 셋팅자음('ㄷ')}
      >
        ㄷ
      </button>
      <button
        className={styles.brandSortButton}
        type="button"
        onClick={() => 셋팅자음('ㄹ')}
      >
        ㄹ
      </button>
      <button
        className={styles.brandSortButton}
        type="button"
        onClick={() => 셋팅자음('ㅁ')}
      >
        ㅁ
      </button>
      <button
        className={styles.brandSortButton}
        type="button"
        onClick={() => 셋팅자음('ㅂ')}
      >
        ㅂ
      </button>
      <button
        className={styles.brandSortButton}
        type="button"
        onClick={() => 셋팅자음('ㅅ')}
      >
        ㅅ
      </button>
      <button
        className={styles.brandSortButton}
        type="button"
        onClick={() => 셋팅자음('ㅇ')}
      >
        ㅇ
      </button>
      <button
        className={styles.brandSortButton}
        type="button"
        onClick={() => 셋팅자음('ㅈ')}
      >
        ㅈ
      </button>
      <button
        className={styles.brandSortButton}
        type="button"
        onClick={() => 셋팅자음('ㅊ')}
      >
        ㅊ
      </button>
      <button
        className={styles.brandSortButton}
        type="button"
        onClick={() => 셋팅자음('ㅋ')}
      >
        ㅋ
      </button>
      <button
        className={styles.brandSortButton}
        type="button"
        onClick={() => 셋팅자음('ㅍ')}
      >
        ㅍ
      </button>

      <button
        className={styles.brandSortButton}
        type="button"
        onClick={() => 셋팅자음('ㅎ')}
      >
        ㅎ
      </button>
      <button
        className={styles.brandETCButton}
        type="button"
        onClick={() => 셋팅자음('etc')}
      >
        ETC
      </button>
    </div>
  );
};
