import { useRecoilValue, useRecoilState } from 'recoil';

import { useState } from 'react';

import styles from './BrandList.module.css';

import { string } from 'prop-types';

import {
  RenderFilterNameLi,
  RenderFilterKarlyOnlyLi,
  RenderFilterBenefitsLi,
  RenderBrandFilterNameLi,
  RenderFilterPriceLi,
} from './RenderFilterLi';

import {
  categoryListSelectorFamily,
  karlyOnlyListSelectorFamily,
  benefitsListSelectorFamily,
  priceFilterListSelectorFamily,
  rBrandListSelector,
  sortBrandListSelectorFamily,
} from '@/pages/ProductList/@recoil/checkState';

import {
  moreSkipAtom,
  moreLimitAtom,
} from '@/pages/ProductList/@recoil/renderState';

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
  const [moreSkip, setMoreSkip] = useRecoilState(moreSkipAtom);
  const [moreLimit, setMoreLimit] = useRecoilState(moreLimitAtom);
  const numPages = Math.ceil(categoryList.length / moreLimit);
  const sliceCategoryList = categoryList.slice(0, 20);

  return (
    <>
      <div className={styles.brandButtonContainer}>
        <button
          className={styles.brandSortButton}
          type="button"
          onClick={() => 셋팅자음('ㄱ')}
        >
          ㄱ
        </button>
        <button
          className={styles.brandSortButton}
          type="button"
          onClick={() => 셋팅자음('ㄴ')}
        >
          ㄴ
        </button>
        <button
          className={styles.brandSortButton}
          type="button"
          onClick={() => 셋팅자음('ㄷ')}
        >
          ㄷ
        </button>
        <button
          className={styles.brandSortButton}
          type="button"
          onClick={() => 셋팅자음('ㄹ')}
        >
          ㄹ
        </button>
        <button
          className={styles.brandSortButton}
          type="button"
          onClick={() => 셋팅자음('ㅁ')}
        >
          ㅁ
        </button>
        <button
          className={styles.brandSortButton}
          type="button"
          onClick={() => 셋팅자음('ㅂ')}
        >
          ㅂ
        </button>
        <button
          className={styles.brandSortButton}
          type="button"
          onClick={() => 셋팅자음('ㅅ')}
        >
          ㅅ
        </button>
        <button
          className={styles.brandSortButton}
          type="button"
          onClick={() => 셋팅자음('ㅇ')}
        >
          ㅇ
        </button>
        <button
          className={styles.brandSortButton}
          type="button"
          onClick={() => 셋팅자음('ㅈ')}
        >
          ㅈ
        </button>
        <button
          className={styles.brandSortButton}
          type="button"
          onClick={() => 셋팅자음('ㅊ')}
        >
          ㅊ
        </button>
        <button
          className={styles.brandSortButton}
          type="button"
          onClick={() => 셋팅자음('ㅋ')}
        >
          ㅋ
        </button>
        <button
          className={styles.brandSortButton}
          type="button"
          onClick={() => 셋팅자음('ㅍ')}
        >
          ㅍ
        </button>

        <button
          className={styles.brandSortButton}
          type="button"
          onClick={() => 셋팅자음('ㅎ')}
        >
          ㅎ
        </button>
        <button
          className={styles.brandETCButton}
          type="button"
          onClick={() => 셋팅자음('ㅎ')}
        >
          ETC
        </button>
      </div>
      {categoryList.map((product, index) => {
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

  console.log(benefitsList, '리스트뭐나오냐이거');

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

  console.log(priceList, '가격필터뭐가져오냐얜');

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
