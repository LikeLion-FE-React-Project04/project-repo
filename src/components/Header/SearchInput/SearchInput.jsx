import styles from './SearchInput.module.css';

import Search from '@/assets/header/ic-search.svg';

function SearchInput() {
  return (
    <>
      <h2 className={styles.a11yHidden}>검색</h2>
      <form action="#" className={styles.searchForm} method="post">
        <div className={styles.searchFormInner}>
          <div className={styles.formGroup}>
            <label className={styles.formGroupLabel} htmlFor="search" />
            <input
              className={styles.formGroupInput}
              id="search"
              placeholder="검색어를 입력해주세요"
              required={true}
              type="search"
            />
          </div>
          <button className={styles.formGroupButton} type="submit">
            <img alt="검색하기" src={Search} />
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchInput;
