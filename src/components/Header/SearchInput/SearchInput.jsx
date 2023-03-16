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
            <label htmlFor="Search">
              <input
                className={styles.formGroupInput}
                id="Search"
                placeholder="검색어를 입력해주세요"
                required={true}
                type="text"
                value={input}
                onChange={setInputValue}
              />
            </label>
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
          <img alt="검색하기" src={Search} />
        </button>
      </div>
    </>
  );
}

export default SearchInput;
