import { useState } from 'react';
import { useRecoilValue, useRecoilState, useSetRecoilValue } from 'recoil';

import styles from './ProductList.module.css';

import { FilterList } from './FilterList';
import { Pagination } from './Pagination';

import { ProductCard } from '@/components/ProductCard/ProductCard';
import {
  categoryListSelectorFamily,
  renderCategorySelector,
  sortCategorySelector,
  sumTestSelector,
  renderKarlyOnlySelector,
} from '@/store/productListState.js';

import {
  SortLowerPriceButton,
  SortUpperPriceButton,
  DummyButtons,
} from './SortButton';

export const ProductList = () => {
  const productList = useRecoilValue(categoryListSelectorFamily('brand'));
  // const testCategory = useRecoilValue(renderCategorySelector);
  const testCategory = useRecoilValue(sumTestSelector);
  const renderKarlyTest = useRecoilValue(renderKarlyOnlySelector);

  console.log(renderKarlyTest);

  // const [card, setCard] = useRecoilState(renderCategorySelector);
  const [card, setCard] = useState(testCategory);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  //sort 기능 안먹히는 이슈발생 (renderCategorySelector를가져올떄)
  // Recoil의 set을 써야할거같은데..?
  const upperPriceSort = () => {
    let upperPriceSortCard = [...card];

    upperPriceSortCard.sort((a, b) => b.price - a.price);
    setCard(upperPriceSortCard);
  };

  //페이지네이션은 적용 o
  const ProductCards = () => {
    return (
      <>
        {testCategory.slice(offset, offset + limit).map((product, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div key={`product-${index}`} style={{ marginBottom: '100px' }}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.productListTitle}>베스트</div>
          <section className={styles.product}>
            <FilterList />
            <div className={styles.productCardsWrapper}>
              <div className={styles.sortButtonContainer}>
                <DummyButtons text={'신상품순'} />
                <DummyButtons text={'판매량순'} />
                <DummyButtons text={'혜택순'} />
                <SortLowerPriceButton
                // handler={lowerPriceSort}
                />
                <SortUpperPriceButton handler={upperPriceSort} />
              </div>
              <ProductCards />
            </div>
          </section>
          <Pagination
            limit={limit}
            page={page}
            setPage={setPage}
            total={productList.length}
          />
        </div>
      </div>
    </>
  );
};
export default ProductList;

/* ----------------------- 만들다가 공용에게 밀린 나의 작고 소중한 컴포넌트들.. ----------------------- */

// export const CategoryContainer = ({ index, title, productEx, count }) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleBtn = (e) => {
//     e.preventDefault;
//     isActive ? setIsActive(false) : setIsActive(true);
//   };

//   return (
//     <div className={styles.navMenuCategory}>
//       <CategoryList controlId={index} handler={handleBtn} isActive={isActive}>
//         <span>{title}</span>
//       </CategoryList>
//       <NavMenu
//         controlId={index}
//         productEx={productEx}
//         isActive={isActive}
//         count={count}
//       />
//     </div>
//   );
// };

// export const CategoryList = ({ controlId, handler, isActive, children }) => {
//   return (
//     <button
//       id={`${controlId}-handle`}
//       className={styles.navMenuBtn}
//       // isActive={isActive}
//       onClick={handler}
//     >
//       {children}
//       {isActive ? (
//         <div alt="화살표" className={styles.arrowUp} />
//       ) : (
//         <div alt="화살표" className={styles.arrowDown} />
//       )}
//     </button>
//   );
// };

// export const NavMenu = ({ controlId, productEx, isActive, count }) => {
//   return (
//     <ul
//       aria-labelledby={`${controlId}-handle`}
//       className={classNames(
//         styles.navMenuUl,
//         isActive ? styles.active : styles.inactive
//       )}
//     >
//       <li className={styles.navMenuUlList}>
//         <input
//           type="checkbox"
//           name="checkbox"
//           id="check-box"
//           value={productEx}
//         />
//         <label htmlFor="check-box">{productEx}</label>
//         <span className={styles.ulListCount}>{count}</span>
//       </li>
//     </ul>
//   );
// };

/* --------------------------------- test console --------------------------------- */
// console.log(productList)
//8
// console.log(limit)
//1
// console.log(page)
//0
// console.log(offset)
//  => 0~8번 array(배열) 리턴
// console.log(productList.slice(0, 7)
