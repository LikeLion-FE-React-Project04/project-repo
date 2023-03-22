import styles from './FilterList.module.css'

import AccordionItem from '@/components/Accordion/AccordionItem'

import {
  CategoryList,
  BrandList,
  KalryOnlyList,
  BenefitsList,
  PriceList,
} from './BrandList'

import { FilterContainer } from './FilterContainer'

import { ProductCard } from '@/components/ProductCard/ProductCard.jsx'

import { useRecoilValue } from 'recoil'
import { useState } from 'react'

import { productListState } from '@/store/productListState.js'

export const FilterList = () => {
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
        <div key={`product-${index}`} style={{ marginBottom: '100px' }}>
          <ProductCard product={product} />
        </div>
      )
    })

  return (
    <section className={styles.product}>
      <div className={styles.productListNav}>
        <FilterContainer />
        {/* <div> */}
        <AccordionItem index={0} width="220px" handelArrow>
          <div className={styles.Handle}>카테고리</div>
          <div className={styles.panel}>
            <CategoryList filterName={'category'} />
          </div>
          <div className={styles.accordionLine} />
        </AccordionItem>
        <AccordionItem index={1} width="220px" handelArrow>
          <div className={styles.Handle}>브랜드</div>
          <div className={styles.panel}>
            <BrandList />
          </div>
          <div className={styles.accordionLine} />
        </AccordionItem>
        <AccordionItem index={2} width="220px" handelArrow>
          <div className={styles.Handle}>가격</div>
          <div className={styles.panel}>
            <PriceList />
          </div>
          <div className={styles.accordionLine} />
        </AccordionItem>
        <AccordionItem index={3} width="220px" handelArrow>
          <div className={styles.Handle}>혜택</div>
          <div className={styles.panel}>
            <BenefitsList />
          </div>
          <div className={styles.accordionLine} />
        </AccordionItem>
        <AccordionItem index={4} width="220px" handelArrow>
          <div className={styles.Handle}>유형</div>
          <div className={styles.panel}>
            <KalryOnlyList />
          </div>
          <div className={styles.accordionLine} />
        </AccordionItem>
      </div>
      <div style={{ width: '100%' }}>
        <div className={styles.hoeng}>{productCards}</div>
        {/* </div> */}
      </div>
    </section>
  )
}
