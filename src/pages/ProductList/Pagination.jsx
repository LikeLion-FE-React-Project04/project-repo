import styles from './Pagination.module.css';

export const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <nav className={styles.paginationContainer}>
        <button
          className={styles.paginationPrev}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        />
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              key={i + 1}
              className={styles.paginationNum}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </button>
          ))}
        <button
          className={styles.paginationNext}
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        />
      </nav>
    </>
  );
};

/* ------------------------------ test console들 ----------------------------- */
// console.log(total)
// console.log(limit)
// console.log(numPages)

//math.ceil = 올림
//15
// console.log(total)
//8
// console.log(limit)
//2
// console.log(page)
//15/8 의올림 =2
//numPage
//페이지변환
// console.log(setpage)
//  => 0~8번 array(배열) 리턴
// console.log(productList.slice(0, 7))

// console.log(Array(numPages).fill().map())
