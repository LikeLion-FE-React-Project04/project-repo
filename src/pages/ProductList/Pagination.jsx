import { useRecoilValue, useRecoilState } from 'recoil';

import styles from './Pagination.module.css';

import {
  renderAllFilterListSelector,
  limitAtom,
  pageAtom,
} from '@/pages/ProductList/@recoil/renderState';

export const Pagination = () => {
  const renderAllFilterList = useRecoilValue(renderAllFilterListSelector);

  // productListState
  const limit = useRecoilValue(limitAtom);
  const [page, setPage] = useRecoilState(pageAtom);
  // total = 15개
  const numPages = Math.ceil(renderAllFilterList.length / limit);

  return (
    <>
      <nav className={styles.paginationContainer}>
        <button
          className={styles.paginationPrev}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        />
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              key={i + 1}
              aria-current={page === i + 1 ? 'page' : null}
              className={styles.paginationNum}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        <button
          className={styles.paginationNext}
          disabled={page === numPages}
          onClick={() => setPage(page + 1)}
        />
      </nav>
    </>
  );
};
