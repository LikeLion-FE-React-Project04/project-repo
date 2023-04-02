import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { string } from 'prop-types';

import styles from './BrandList.module.css';

import {
  RenderFilterNameLi,
  RenderFilterKarlyOnlyLi,
  RenderFilterBenefitsLi,
  RenderBrandFilterNameLi,
  RenderFilterPriceLi,
} from './RenderFilterLi';

import { BrandButtons } from './BrandButtons';

import {
  categoryListSelectorFamily,
  karlyOnlyListSelectorFamily,
  benefitsListSelectorFamily,
  priceFilterListSelectorFamily,
  sortBrandListSelectorFamily,
  etcBrandListSelector,
} from '@/pages/ProductList/@recoil/checkState';

/* -------------------------------- category -------------------------------- */
export const CategoryList = ({ filterName = '', children }) => {
  const categoryList = useRecoilValue(categoryListSelectorFamily('category'));

  return (
    <>
      {categoryList.map((product, index) => {
        const key = `${product.id} ${index}`;

        return (
          <RenderFilterNameLi
            key={key}
            name={filterName}
            value={product.category}
          />
        );
      })}
    </>
  );
};

CategoryList.propTypes = {
  filterName: string.isRequired,
};

/* ---------------------------------- brand --------------------------------- */

export const BrandList = ({ filterName = '', children }) => {
  const [자음, 셋팅자음] = useState('ㄱ');
  const categoryList = useRecoilValue(sortBrandListSelectorFamily(자음));
  const etcBrandList = useRecoilValue(etcBrandListSelector);
  const exp = /[ㄱ-ㅎ]/;

  return (
    <>
      <BrandButtons 셋팅자음={셋팅자음} 자음={자음} />
      {exp.test(자음)
        ? categoryList.map((product, index) => {
            const key = `${product.id} ${index}`;

            return (
              <RenderBrandFilterNameLi
                key={key}
                name={filterName}
                value={product.brand}
              />
            );
          })
        : etcBrandList.slice(0, 3).map((product, index) => {
            const key = `${product.id} ${index}`;

            return (
              <RenderBrandFilterNameLi
                key={key}
                name={filterName}
                value={product.brand}
              />
            );
          })}
      <div className={styles.container}>
        <button
          aria-labelledby={'더보기 버튼'}
          className={styles.navFilterButton}
          type="button"
          // onClick={onClick}
        >
          {'브랜드 더보기 > '}
        </button>
      </div>
    </>
  );
};

/* -------------------------------- kalryOnly ------------------------------- */
export const KalryOnlyList = ({ filterName = '' }) => {
  const karlyOnlyList = useRecoilValue(
    karlyOnlyListSelectorFamily('kalryOnly')
  );

  return (
    <RenderFilterKarlyOnlyLi name={filterName} value={karlyOnlyList.length} />
  );
};

/* -------------------------------- benefits -------------------------------- */

export const BenefitsList = () => {
  const benefitsList = useRecoilValue(benefitsListSelectorFamily('saleRatio'));

  return (
    <>
      <RenderFilterBenefitsLi
        name={'할인상품'}
        value={benefitsList['할인상품'].length}
      />
      <RenderFilterBenefitsLi
        name={'한정수량'}
        value={benefitsList['한정수량'].length}
      />
    </>
  );
};

/* ---------------------------------- price --------------------------------- */
export const PriceList = () => {
  const priceList = useRecoilValue(priceFilterListSelectorFamily);

  // debugger;

  return (
    <>
      <RenderFilterPriceLi
        name={'0원 ~ 10,000원'}
        value={priceList['0,10000'].length}
      />
      <RenderFilterPriceLi
        name={'10,000원 ~ 19,990원'}
        value={priceList['10000,19990'].length}
      />
      <RenderFilterPriceLi
        name={'20,000원 이상'}
        value={priceList['20000,30000'].length}
      />
    </>
  );
};
