import { forwardRef } from 'react';

import styles from './SearchForm.module.css';

import Search from '@/assets/header/ic-search.svg';

const SearchForm = forwardRef((_, ref) => {
  return (
    <div ref={ref} style={{ display: 'none' }}>
      <h2 className={styles.a11yHidden}>검색</h2>
      <form action="#" className={styles.searchForm} method="post">
        <div className={styles.searchFormInner}>
          <div className={styles.formGroup}>
            <label htmlFor="search" className={styles.formGroupLabel} />
            <input
              type="search"
              id="search"
              className={styles.formGroupInput}
              placeholder="검색어를 입력해주세요"
              required={true}
            />
          </div>
          <button type="submit" className={styles.formGroupButton}>
            <img src={Search} alt="검색하기" />
          </button>
        </div>
      </form>
    </div>
  );
});

SearchForm.displayName = 'SearchForm';

export default SearchForm;
