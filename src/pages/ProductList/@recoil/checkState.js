import { atom, selector, selectorFamily } from 'recoil';
import { productListState } from '../../../store/productListState';

export const checkState = atom({
  key: 'checkState',
  default: false,
});

export const checkArrState = atom({
  key: 'checkArrState',
  default: [],
});

/* ---------------------------- Category & Brand ---------------------------- */

export const categoryListSelectorFamily = selectorFamily({
  key: 'categoryListSelectorFamily',
  get:
    (catagoryName) =>
    ({ get }) => {
      //product = initialProductList 전체 15개의 정적Local Data
      const product = get(productListState);

      //categoryList = category의 중복을 제거해줌
      const categoryList = product.filter((arr, index, callback) => {
        return (
          index ===
          callback.findIndex(
            (product) => product[catagoryName] === arr[catagoryName]
          )
        );
      });

      return categoryList;
    },
});

export const categoryLengthListSelectorFamily = selectorFamily({
  key: 'categoryLengthListSelectorFamily',
  get:
    (categoryName) =>
    ({ get }) => {
      const category = get(productListState);
      const categoryList = get(categoryListSelectorFamily(categoryName));

      return categoryList.reduce((결과, 카테고리) => {
        let 카운트 = 0;

        category.forEach((item) => {
          if (item[categoryName] === 카테고리[categoryName]) {
            카운트++;
          }
        });

        return {
          ...결과,
          [카테고리[categoryName]]: 카운트,
        };
      }, {});
    },
});

//all 체크박스 ver.
export const allCategoryNameListSelectorFamily = selectorFamily({
  key: 'allCategoryNameListSelectorFamily',
  get:
    (catagoryName) =>
    ({ get }) => {
      const checkedAllCategoryName = get(
        categoryListSelectorFamily(catagoryName)
      );

      return checkedAllCategoryName.map((a) => {
        return a.category;
      });
    },
});

//sort 테스트 = 실패
export const sortCategorySelector = selector({
  key: 'sortCategorySelector',
  get: ({ get }) => {
    const sortedCategory = get(renderCategorySelector);
    const products = get(productListState);

    if (sortedCategory.length <= 0) {
      return products.sort((a, b) => a.price - b.price);
    }

    // console.log(sortedCategory.sort((a, b) => a.price - b.price));
    const test01 = [...sortedCategory];

    test01.sort((a, b) => a.price - b.price);

    return test01;
  },
});

/* -------------------------------- karlyOnly ------------------------------- */

export const karlyOnlyListSelectorFamily = selectorFamily({
  key: 'karlyOnlyListSelectorFamily',
  get:
    (karlyOnly) =>
    ({ get }) => {
      const product = get(productListState);

      const isKarlyOnly = (element) => {
        if (element[karlyOnly] === true) {
          return true;
        }
      };

      const karlyOnlyList = product.filter(isKarlyOnly);

      return karlyOnlyList;
    },
});

/* -------------------------------- karlyOnlyCount ------------------------------- */

export const karlyOnlyLengthListSelectorFamily = selectorFamily({
  key: 'karlyOnlyLengthListSelectorFamily',
  get:
    (karlyOnlyName) =>
    ({ get }) => {
      const karlyOnly = get(productListState);
      const karlyOnlyList = get(karlyOnlyListSelectorFamily(karlyOnly));

      return karlyOnlyList.reduce((결과, 칼리온니) => {
        let 카운트 = 0;

        karlyOnly.forEach((item) => {
          if (item[karlyOnlyName] === 칼리온니[karlyOnlyName]) {
            카운트++;
          }
        });

        return {
          ...결과,
          [칼리온니[karlyOnlyName]]: 카운트,
        };
      }, {});
    },
});

/* -------------------------------- Benefits -------------------------------- */

export const benefitsListSelectorFamily = selectorFamily({
  key: 'benefitsListSelectorFamily',
  get:
    () =>
    ({ get }) => {
      const product = get(productListState);

      const SaleProduct = (element) => {
        if (element.saleRatio !== 0) {
          return true;
        }
      };
      const limitedProduct = (element) => {
        if (element.stock < 10) {
          return true;
        }
      };
      const SaleProductList = product.filter(SaleProduct);
      const saleBenefitsList = { 할인상품: SaleProductList };

      const limitedProductList = product.filter(limitedProduct);
      const limitedBenefitsList = { 한정수량: limitedProductList };

      const benefitsMergeList = { ...saleBenefitsList, ...limitedBenefitsList };

      return benefitsMergeList;
    },
});

/* ---------------------------------- price --------------------------------- */

export const priceFilterListSelectorFamily = selectorFamily({
  key: 'priceFilterListSelectorFamily',
  get:
    () =>
    ({ get }) => {
      const product = get(productListState);

      const 최종가격 = (product) => {
        if (product.saleRatio) {
          return product.salePrice;
        }

        return product.price;
      };

      const lessThenFiveHundredFilter = (product) => {
        if (최종가격(product) < 10000) {
          return true;
        }
      };

      const lessThenTenHundredFilter = (product) => {
        if (최종가격(product) > 10000 && 최종가격(product) < 20000) {
          return true;
        }
      };
      const lessThenTwentyHundredFilter = (product) => {
        if (최종가격(product) > 20000) {
          return true;
        }
      };

      const lessThenFiveHundredProduct = product.filter(
        lessThenFiveHundredFilter
      );
      const lessThenFiveHundredProductList = {
        filter1: lessThenFiveHundredProduct,
      };

      const lessThenTenHundredProduct = product.filter(
        lessThenTenHundredFilter
      );
      const lessThenTenHundredProductList = {
        filter2: lessThenTenHundredProduct,
      };

      const lessThenTwentyHundredProduct = product.filter(
        lessThenTwentyHundredFilter
      );
      const lessThenTwentyHundredProductList = {
        filter3: lessThenTwentyHundredProduct,
      };

      const priceFilterMergeList = {
        ...lessThenFiveHundredProductList,
        ...lessThenTenHundredProductList,
        ...lessThenTwentyHundredProductList,
      };

      return priceFilterMergeList;
    },
});
