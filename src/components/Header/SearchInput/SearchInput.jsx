import { LazyLoadImage } from 'react-lazy-load-image-component';

import { inputHook } from '../@recoilhooks/inputHook';

import styles from './SearchInput.module.css';

import Search from '@/assets/header/ic-search.svg';

function SearchInput() {
  const { input, setInputValue, setSubmitValue, removeValue } = inputHook();

  return (
    <>
      <h2 className={styles.a11yHidden}>검색</h2>
      <div className={styles.searchFormInner}>
        <div className={styles.formGroup}>
          <form action="/" method="get">
            <label htmlFor="Search" className={styles.a11yHidden}>
              검색어를 입력해주세요
            </label>
            <input
              className={styles.formGroupInput}
              id="Search"
              placeholder="검색어를 입력해주세요"
              required={true}
              type="text"
              value={input}
              onChange={setInputValue}
            />
          </form>
        </div>
        <button
          onClick={() => {
            setSubmitValue();
            removeValue();
          }}
          className={styles.formGroupButton}
          type="button"
        >
          <LazyLoadImage alt="검색" src={Search} />
        </button>
      </div>
    </>
  );
}

export default SearchInput;
