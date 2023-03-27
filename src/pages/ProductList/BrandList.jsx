import { useRecoilValue } from 'recoil';

import { string } from 'prop-types';

import {
  RenderFilterNameLi,
  RenderFilterKarlyOnlyLi,
  RenderFilterBenefitsLi,
  RenderBrandFilterNameLi,
} from './RenderFilterLi';

import {
  categoryListSelectorFamily,
  karlyOnlyListSelectorFamily,
  benefitsListSelectorFamily,
  priceFilterListSelectorFamily,
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
  const categoryList = useRecoilValue(categoryListSelectorFamily('brand'));

  // console.log(categoryList);

  return (
    <>
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
    </>
  );
};

/* -------------------------------- kalryOnly ------------------------------- */
export const KalryOnlyList = ({ filterName = '' }) => {
  const karlyOnlyList = useRecoilValue(
    karlyOnlyListSelectorFamily('kalryOnly')
  );

  console.log(karlyOnlyList, '이거의 렝쓰가뭐에요?');

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
  const priceList = useRecoilValue(
    priceFilterListSelectorFamily('priceFilter')
  );

  return (
    <>
      <RenderFilterBenefitsLi
        name={'전체'}
        value={priceList['filter1'].length}
      />
      <RenderFilterBenefitsLi
        name={'0원 ~ 10,000원'}
        value={priceList['filter2'].length}
      />
      <RenderFilterBenefitsLi
        name={'10,000원 ~ 20,000원'}
        value={priceList['filter3'].length}
      />
      <RenderFilterBenefitsLi
        name={'20,000원 이상'}
        value={priceList['filter4'].length}
      />
    </>
  );
};
