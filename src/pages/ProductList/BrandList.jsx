import { useRecoilValue } from 'recoil';

import { string } from 'prop-types';

import {
  RenderFilterNameLi,
  RenderFilterKarlyOnlyLi,
  RenderFilterBenefitsLi,
  RenderBrandFilterNameLi,
  RenderFilterPriceLi,
} from './RenderFilterLi';

import {
  checkedPriceListAtom,
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
