import { forwardRef } from 'react';

import { inputHook } from '../@recoilhooks/inputHook';

import styles from './SearchForm.module.css';

import Search from '@/assets/header/ic-search.svg';

const SearchForm = forwardRef((_, ref) => {
  const { input, setInputValue, setSubmitValue, removeValue } = inputHook();

  return (
    <div ref={ref} style={{ display: 'none' }}>
      <h2 className={styles.a11yHidden}>검색</h2>
      <form action="/" className={styles.searchForm} method="get">
        <div className={styles.searchFormInner}>
          <div className={styles.formGroup}>
            <label htmlFor="search" className={styles.a11yHidden}>
              검색어를 입력해주세요
            </label>
            <input
              type="text"
              id="search"
              className={styles.formGroupInput}
              placeholder="검색어를 입력해주세요"
              required={true}
              value={input}
              onChange={setInputValue}
            />
          </div>
          <button
            onClick={() => {
              setSubmitValue();
              removeValue();
            }}
            type="button"
            className={styles.formGroupButton}
          >
            <img src={Search} alt="검색" />
          </button>
        </div>
      </form>
    </div>
  );
});

SearchForm.displayName = 'SearchForm';

export default SearchForm;
