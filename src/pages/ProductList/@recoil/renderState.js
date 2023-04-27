import { productListState } from '@/store/productListState';
import { atom, selector } from 'recoil';
import { priceFilterListSelectorFamily } from './checkState';

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

/* ---------------------------- karlyOnlycheckRender ---------------------------- */
export const checkedKarlyOnlyListAtom = atom({
  key: 'checkedKarlyOnlyListAtom',
  default: [],
});

export const renderKarlyOnlySelector = selector({
  key: 'renderKarlyOnlySelector',
  get: ({ get }) => {
    //product = initialProductList 전체 15개의 정적Local Data
    const products = get(productListState);
    const checkedKarlyOnlyList = get(checkedKarlyOnlyListAtom);

    const hasKarlyOnly = (product) => {
      const karlyOnlyFound = checkedKarlyOnlyList.some(
        (item) => item === 'karlyOnly'
      );

      if (karlyOnlyFound) {
        return product.karlyOnly;
      }

      return true;
    };

    const karlyOnlyList = products.filter(hasKarlyOnly);

    return karlyOnlyList;
  },
});

/* ---------------------------- priceCheckRender ---------------------------- */

export const checkedPriceListAtom = atom({
  key: 'checkedPriceListAtom',
  default: [],
});

/* ----------------------------- benefitsCheckRender ---------------------------- */

export const checkedBenefitsListAtom = atom({
  key: 'checkedBenefitsListAtom',
  default: [],
});

/* -------------------------------- sort/pagination Atom ------------------------------- */

export const sortByPriceDescAtom = atom({
  key: 'sortByPriceDescAtom',
  default: false,
});

export const limitAtom = atom({
  key: 'limitAtom',
  default: 15,
});

export const pageAtom = atom({
  key: 'pageAtom',
  default: 1,
});

export const offsetSelector = selector({
  key: 'offsetSelector',
  get: ({ get }) => {
    const limit = get(limitAtom);
    const page = get(pageAtom);
    const offset = (page - 1) * limit;

    return offset;
  },
});

export const moreSkipAtom = atom({
  key: 'skipAtom',
  default: 0,
});

export const moreLimitAtom = atom({
  key: 'skipAtom',
  default: 10,
});

/* --------------------------------- 합치기테스트 --------------------------------- */

export const renderAllFilterListSelector = selector({
  key: 'renderAllFilterListSelector',
  get: ({ get }) => {
    const products = get(productListState); // 상품목록
    const checkedCategoryList = get(checkedCategoryListAtom); // 깔대기
    const checkedBrandList = get(checkedBrandListAtom);
    const checkedKarlyOnlyList = get(checkedKarlyOnlyListAtom);
    const checkedPriceList = get(checkedPriceListAtom);
    const checkedBenefitsList = get(checkedBenefitsListAtom);
    const sortByPriceDesc = get(sortByPriceDescAtom);

    const 카테고리_리스트_필터 = (product) => {
      if (checkedCategoryList.length <= 0) {
        return true;
      }

      return checkedCategoryList.some(
        (category) => category === product.category
      );
    };

    const 브랜드_리스트_필터 = (product) => {
      if (checkedBrandList.length <= 0) {
        return true;
      }

      return checkedBrandList.some((category) => category === product.brand);
    };
    const 마켓칼리_리스트_필터 = (product) => {
      if (checkedKarlyOnlyList.length <= 0) {
        return true;
      }

      return checkedKarlyOnlyList.some(() => product.karlyOnly);
    };

    const 최종가격 = (product) => {
      if (product.saleRatio) {
        return product.salePrice;
      }

      return product.price;
    };

    const 가격_리스트_필터 = (product) => {
      if (checkedPriceList.length <= 0) {
        return true;
      }

      return checkedPriceList.some(([최소값, 최대값]) => {
        // console.log(최소값, '최소값');
        // console.log(최대값, '최대값');

        return 최종가격(product) > 최소값 && 최종가격(product) < 최대값;
      });
    };

    const 혜택_리스트_필터 = (product) => {
      if (checkedBenefitsList.length <= 0) {
        return true;
      }

      return checkedBenefitsList.some((benefit) => {
        if (benefit === 'saleRatio') {
          const isSaleRatioFound = product.saleRatio !== 0;

          return isSaleRatioFound;
        }

        const isStockCountFound = product.stock < 10;

        return isStockCountFound;
      });
    };

    return products
      .filter(카테고리_리스트_필터)
      .filter(브랜드_리스트_필터)
      .filter(마켓칼리_리스트_필터)
      .filter(가격_리스트_필터)
      .filter(혜택_리스트_필터)
      .sort((a, b) => {
        if (sortByPriceDesc) {
          return 최종가격(b) - 최종가격(a);
        }

        return 최종가격(a) - 최종가격(b);
      });
  },
});
