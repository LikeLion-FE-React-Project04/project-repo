import styles from './SearchInput.module.css';

import Search from '@/assets/header/ic-search.svg';

function SearchInput() {
  return (
    <>
      <h2 className={styles.a11yHidden}>검색</h2>
      {/* <form action="#" className={styles.searchForm} method="post"> */}
      <div className={styles.searchFormInner}>
        <div className={styles.formGroup}>
          <form action="#" method="post">
            <label htmlFor="Search">
              <input
                className={styles.formGroupInput}
                id="Search"
                placeholder="검색어를 입력해주세요"
                required={true}
                type="text"
              />
            </label>
          </form>
        </div>
        <button className={styles.formGroupButton} type="submit">
          <img alt="검색하기" src={Search} />
        </button>
      </div>
    </>
  );
}

export default SearchInput;
