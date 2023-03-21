import styles from './ProductList.module.css'
import AccordionItem from '@/components/Accordion/AccordionItem'
import arrowDown from '@/assets/product-list/ic-arrow-down.svg'
import { useRef, useEffect, useState } from 'react'
import classNames from 'classnames'
import { 
  productListState,
  categoryListSelector,
  categoryLengthListSelector,
  // brandListState,
 
} from '@/store/productListState.js'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

// const BrandList = () => {
//   const brandList  = useRecoilValue(brandListState)
  
//   return (
//     <>
//       {
//         brandList.map((product,index) =>{
//           const key = `${product.id} ${index}`

//           return <TestLi key={key} product={product.brand} />
//         })
//       }
//     </>
//   )
// }

const CategoryList = () => {
  // const brandList  = useRecoilValue(brandListState)
  
  // return (
  //   <>
  //     {
  //       brandList.map((product,index) =>{
  //         const key = `${product.id} ${index}`

  //         return <TestLi key={key} product={product.brand} />
  //       })
  //     }
  //   </>
  // )

  // return <>야호</>
}

const ProductList = () => {
  // const productList = useRecoilValue(productListState)
  // const productCards = 
  // productList.filter((arr, index, callback) =>
  //     index ===
  //     callback.findIndex((product) => product.category === arr.category))

  // .map((product, index) => {
  //   // console.log(`${product.id} ${index}`);
  //   // console.log(product.category);
  //   console.log(productList);

  //   return <TestLi key={`${product.id} ${index}`} product={product} />
  // })


    // const categoryList  = useRecoilValue(categoryListSelector)

    //   // console.log(categoryList);

    // const categoryLists = 
    
    // categoryList.map((product) =>{
    //   return <TestLi product={product.category} count={product.count}  />
    // })




  // const categoryLengthListSelector2 = useRecoilValue(categoryLengthListSelector)







  return (
    <>
      <div className={styles.container}>
        <div className={styles.productListTitle}>베스트</div>
        <section className={styles.product}>
          <div className={styles.productListNav}>
            <FilterContainer />
            {/* <div className={styles.productListNavMenu}>
              <CategoryContainer
                index={0}
                title={'카테고리'}
                productEx={'test1'}
                count={'test1'}
              />
              <CategoryContainer
                index={1}
                title={'가격'}
                productEx={'test2'}
                count={'test2'}
              />
              <CategoryContainer
                index={2}
                title={'브랜드'}
                productEx={'test3'}
                count={'test3'}
              />
            </div> */}
            <AccordionItem index={0} width="220px" handelArrow>
              <div className={styles.Handle}>카테고리</div>
              <div className={styles.panel}>
                {/* <TestLi /> */}
                {/* {categoryLists} */}
                {/* {categoryLengthListSelectors} */}




                {/* {productCards} */}
                {/* {categoryLengthListSelectors} */}
              </div>
              <div className={styles.accordionLine}></div>
            </AccordionItem>
            <AccordionItem index={1} width="220px" handelArrow>
              <div className={styles.Handle}>브랜드</div>
              <div className={styles.panel}>
              {/* <BrandList /> */}
              </div>
              <div className={styles.accordionLine}></div>
            </AccordionItem>
            <AccordionItem index={2} width="220px" handelArrow>
              <div className={styles.Handle}>가격</div>
              <div className={styles.panel}>
                {/* <TestLi productEx={'테스트'} count={'0원'} />
                <TestLi productEx={'테스트2'} count={'1000원'} /> */}
              </div>
              <div className={styles.accordionLine}></div>
            </AccordionItem>
            <AccordionItem index={3} width="220px" handelArrow>
              <div className={styles.Handle}>혜택</div>
              <div className={styles.panel}>
                {/* <TestLi productEx={'테스트'} count={'0원'} />
                <TestLi productEx={'테스트2'} count={'1000원'} /> */}
              </div>
              <div className={styles.accordionLine}></div>
            </AccordionItem>
            <AccordionItem index={3} width="220px" handelArrow>
              <div className={styles.Handle}>유형</div>
              <div className={styles.panel}>
                {/* <TestLi productEx={'테스트'} count={'0원'} />
                <TestLi productEx={'테스트2'} count={'1000원'} /> */}
              </div>
              <div className={styles.accordionLine}></div>
            </AccordionItem>
            <AccordionItem index={3} width="220px" handelArrow>
              <div className={styles.Handle}>제외</div>
              <div className={styles.panel}>
                {/* <TestLi productEx={'테스트'} count={'0원'} />
                <TestLi productEx={'테스트2'} count={'1000원'} /> */}
              </div>
              <div className={styles.accordionLine}></div>
            </AccordionItem>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductList

export const TestLi = ({ product }) => {
  const categoryLengthList = useRecoilValue(categoryLengthListSelector)
  const count = categoryLengthList[product]

  return (
    <ul className={styles.navMenuUl}>
      <li className={styles.navMenuUlList}>
      <input
        type="checkbox"
        name="checkbox"
        id="check-box"
        value={product}
      />
        <label htmlFor="check-box">
          <div className={styles.productExText}>{product}</div>
        </label>
        <span className={styles.ulListCount}>{count}</span>
      </li>
    </ul>
  )
}


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




// locCdSet
//   .filter(
//     (arr, index, callback) =>
//       index ===
//       callback.findIndex((product) => product === product)
//   )

//   .map( (address) => (
//     <Option key={address.locSd} value={address.locSdName}>
//       {address.locSdName}
//     </Option>
//   ))