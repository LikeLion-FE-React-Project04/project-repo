import { useRecoilValue } from 'recoil'
import { useState } from 'react'
import styles from './ProductList.module.css'

import {
  CategoryList,
  BrandList,
  KalryOnlyList,
  BenefitsList,
  PriceList,
} from './BrandList'

import AccordionItem from '@/components/Accordion/AccordionItem'

import { ProductCard } from '@/components/ProductCard/ProductCard.jsx'

import { productListState } from '@/store/productListState.js'

export const FilterContainer = () => {
  return (
    <div className={styles.productListNavFilter}>
      <span className={styles.navFillterText}>필터</span>
      <button type="button" className={styles.navFilterButton}>
        초기화
      </button>
    </div>
  )
}

export const ProductList = () => {
  const [limit, setLimit] = useState(12)
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit

  const productList = useRecoilValue(productListState)

  // console.log(productList)
  //8
  // console.log(limit)
  //1
  // console.log(page)
  //0
  // console.log(offset)
  //  => 0~8번 array(배열) 리턴
  // console.log(productList.slice(0, 7)

  const productCards = productList
    .slice(offset, offset + limit)
    .map((product, index) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <div style={{ marginBottom: '100px' }}>
          <ProductCard product={product} />
        </div>
      )
    })

  return (
    <>
      <div className={styles.container}>
        <div className={styles.gyungA}>
          <div className={styles.productListTitle}>베스트</div>
          <section className={styles.product}>
            <div className={styles.productListNav}>
              <FilterContainer />
              {/* <div> */}
              <AccordionItem index={0} width="220px" handelArrow>
                <div className={styles.Handle}>카테고리</div>
                <div className={styles.panel}>
                  <CategoryList filterName={'category'} />
                </div>
                <div className={styles.accordionLine}></div>
              </AccordionItem>
              <AccordionItem index={1} width="220px" handelArrow>
                <div className={styles.Handle}>브랜드</div>
                <div className={styles.panel}>
                  <BrandList />
                </div>
                <div className={styles.accordionLine}></div>
              </AccordionItem>
              <AccordionItem index={2} width="220px" handelArrow>
                <div className={styles.Handle}>가격</div>
                <div className={styles.panel}>
                  <PriceList />
                </div>
                <div className={styles.accordionLine}></div>
              </AccordionItem>
              <AccordionItem index={3} width="220px" handelArrow>
                <div className={styles.Handle}>혜택</div>
                <div className={styles.panel}>
                  <BenefitsList />
                </div>
                <div className={styles.accordionLine}></div>
              </AccordionItem>
              <AccordionItem index={4} width="220px" handelArrow>
                <div className={styles.Handle}>유형</div>
                <div className={styles.panel}>
                  <KalryOnlyList />
                </div>
                <div className={styles.accordionLine}></div>
              </AccordionItem>
            </div>
            <div style={{ width: '100%' }}>
              <div className={styles.hoeng}>{productCards}</div>
              {/* </div> */}
            </div>
          </section>
          <Pagination
            total={productList.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  )
}
export default ProductList

export const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit)

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
              // className={style}
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
  )
}

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

/* --------------------------------- 백업용 주석 --------------------------------- */
// const BrandList = () => {
//   const brandList = useRecoilValue(categoryListSelectorFamily('brand'))

//   // console.log(brandList)

//   return (
//     <>
//       {brandList.map((product, index) => {
//         const key = `${product.id} ${index}`

//         return <TestLi key={key} name="brand" value={product.brand} />
//       })}
//     </>
//   )
// }
// const CategoryList = () => {
//   const categoryList = useRecoilValue(categoryListSelectorFamily('category'))

//   console.log(categoryList)

//   return (
//     <>
//       {categoryList.map((product, index) => {
//         const key = `${product.id} ${index}`

//         return <TestLi key={key} name="category" value={product.category} />
//       })}
//     </>
//   )
// }
// export const TestLi = ({ name = 'brand', value = '스타벅스' }) => {
//   const countMap = useRecoilValue(categoryLengthListSelectorFamily(name))

//   return (
//     <ul className={styles.navMenuUl}>
//       <li className={styles.navMenuUlList}>
//         <input type="checkbox" name="checkbox" id="check-box" value={value} />
//         <label htmlFor="check-box">
//           <div className={styles.productExText}>{value}</div>
//         </label>
//         <span className={styles.ulListCount}>{countMap[value]}</span>
//       </li>
//     </ul>
//   )
// }
