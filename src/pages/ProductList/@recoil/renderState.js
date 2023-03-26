import { productListState } from '@/store/productListState';
import { atom, selector } from 'recoil';

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

/* -------------------------------- sort Atom ------------------------------- */

export const sortByPriceDescAtom = atom({
  key: 'sortByPriceDescAtom',
  default: false,
});

export const limitAtom = atom({
  key: 'limitAtom',
  default: 12,
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

/* --------------------------------- 합치기테스트 --------------------------------- */

export const renderAllFilterListSelector = selector({
  key: 'renderAllFilterListSelector',
  get: ({ get }) => {
    const products = get(productListState); // 상품목록
    const checkedCategoryList = get(checkedCategoryListAtom); // 깔대기
    const checkedBrandList = get(checkedBrandListAtom);
    const checkedKalryOnlyList = get(checkedKalryOnlyListAtom);
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

    const 마켓컬리_리스트_필터 = (product) => {
      if (checkedKalryOnlyList.length <= 0) {
        return true;
      }

      return checkedKalryOnlyList.some(() => product.kalryOnly);
    };

    const 가격_리스트_필터 = (product) => {
      if (checkedKalryOnlyList.length <= 0) {
        return true;
      }

      return checkedKalryOnlyList.some(() => product.kalryOnly);
    };

    return products
      .filter(카테고리_리스트_필터)
      .filter(브랜드_리스트_필터)
      .filter(마켓컬리_리스트_필터)
      .sort((a, b) => {
        if (sortByPriceDesc) {
          return b.price - a.price;
        }

        return a.price - b.price;
      });
  },
});
