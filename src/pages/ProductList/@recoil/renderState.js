import { atom, selector } from 'recoil';

import { productListState } from '@/store/productListState';

/* ----------------------------- renderCategory ----------------------------- */

export const checkedCategoryListAtom = atom({
  key: 'checkedCategoryListAtom',
  default: [],
});

export const renderCategorySelector = selector({
  key: 'renderCategorySelector',
  get: ({ get }) => {
    //product = initialProductList 전체 15개의 정적Local Data
    const products = get(productListState);
    const checkedCategoryList = get(checkedCategoryListAtom);

    //early return으로 인해 초기화상태가 전체리스트를 내뱉게해줌
    // if (checkedCategoryList.length <= 0) {
    //   return products;
    // }

    const realRenderCategory = products.filter((product) => {
      return checkedCategoryList.some((c) => {
        return c === product.category;
      });
    });

    return realRenderCategory;
  },
});

/* ---------------------------- brandcheckRender ---------------------------- */
export const checkedBrandListAtom = atom({
  key: 'checkedBrandListAtom',
  default: [],
});

export const renderBrandSelector = selector({
  key: 'renderBrandSelector',
  get: ({ get }) => {
    const products = get(productListState);
    const checkedBrandList = get(checkedBrandListAtom);

    const realRenderBrand = products.filter((product) => {
      return checkedBrandList.some((c) => {
        return c === product.brand;
      });
    });

    return realRenderBrand;
  },
});

/* ---------------------------- kalryOnlycheckRender ---------------------------- */
export const checkedKalryOnlyListAtom = atom({
  key: 'checkedKalryOnlyListAtom',
  default: [],
});

export const renderKarlyOnlySelector = selector({
  key: 'renderKarlyOnlySelector',
  get: ({ get }) => {
    //product = initialProductList 전체 15개의 정적Local Data
    const products = get(productListState);
    const checkedKarlyOnlyList = get(checkedKalryOnlyListAtom);

    const hasKalryOnly = (product) => {
      const kalryOnlyFound = checkedKarlyOnlyList.some(
        (item) => item === 'kalryOnly'
      );

      if (kalryOnlyFound) {
        return product.kalryOnly;
      }

      return true;
    };

    const karlyOnlyList = products.filter(hasKalryOnly);

    return karlyOnlyList;
  },
});

/* --------------------------------- 합치기테스트 --------------------------------- */

export const renderAllFilterListSelector = selector({
  key: 'renderAllFilterListSelector',
  get: ({ get }) => {
    const products = get(productListState);
    const renderCategory = get(renderCategorySelector);
    const renderBrand = get(renderBrandSelector);
    const renderKalryOnly = get(renderKarlyOnlySelector);
    // const sumList = [...renderCategory, ...renderBrand];

    // console.log(renderBrand, '랜더브랜드');
    // console.log(renderCategory, '랜더카테고리');

    // const sumFilterList = products.filter((it) => renderCategory.includes(it));
    // const sumFilterList1 = products.filter((it) => renderBrand.includes(it));
    // const testSumFilter = sumFilterList && sumFilterList1;

    const testFilterList = renderCategory.filter((x) =>
      renderBrand.includes(x)
    );

    console.log(testFilterList, '여길봐 이거봐야되 테스트 두개 중복체크');
    console.log(renderCategory[0], '카테고리0번쨰인덱스');
    console.log(renderBrand[0], '브랜드0번쨰인덱스');

    // 최종합본 리스트
    let isActive = false;
    let newList = [];

    if (renderCategory.length > 0) {
      isActive = true;
      newList = renderCategory;
    }

    if (renderBrand.length > 0) {
      isActive = true;
      if (newList.length <= 0) {
        newList = renderBrand;
      } else {
        newList = newList.map((product) => {
          if (renderBrand.includes(product)) {
            return product;
          }
        });
      }
    }
    if (renderKalryOnly.length > 0) {
      isActive = true;
      if (newList.length <= 0) {
        newList = renderKalryOnly;
      } else {
        newList = newList.map((product) => {
          if (renderKalryOnly.includes(product)) {
            return product;
          }
        });
      }
    }

    console.log(isActive, '액티브여기여기여기');
    console.log(newList, '뉴진스여기확인할거에요');

    if (isActive) {
      return newList;
    } else {
      return products;
    }

    // if (renderCategory.length <= 0 && renderBrand <= 0) {
    //   return products;
    // }

    // if (renderCategory.length > 0 && renderBrand <= 0) {
    //   return renderCategory;
    // }

    // if (renderCategory.length <= 0 && renderBrand.length > 0) {
    //   return renderBrand;
    // }

    // return testFilterList;
  },
});
