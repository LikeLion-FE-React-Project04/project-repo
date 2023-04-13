import { atom, selector, selectorFamily } from 'recoil';

import {
  collection,
  getFirestore,
  getDocs,
  where,
  query,
  orderBy,
} from 'firebase/firestore';

import { app } from '@/firebase/app.js';

import { productListState } from '../../../store/productListState';

// TODO: getConsonant 함수 밖으로 분리 후, consonant 동적으로 리팩토링 해보기
// consonant를 상태로만들어서 그것을 여기와 버튼 onclick의 셋팅자음(자음)에 연결시켜주면 동적으로 만들어줄 수 있지않을까? (대충개떡같이아무생각대잔치적어봄)

function getConsonant(kor) {
  const consonant = [
    'ㄱ',
    'ㄲ',
    'ㄴ',
    'ㄷ',
    'ㄸ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅃ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅉ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
    '[',
  ];

  const rk = 44032;
  let uni = kor.charCodeAt(0);

  uni = uni - rk;

  let fn = parseInt(uni / 588);

  return consonant[fn];
}

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
      //product = initialProductList 전체 40개의 정적Local Data
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

//ㄱㄴㄷ순 정렬 셀렉터
export const sortBrandListSelectorFamily = selectorFamily({
  key: 'sortBrandListSelectorFamily',
  get:
    (자음) =>
    ({ get }) => {
      const categoryList = get(categoryListSelectorFamily('brand'));

      return categoryList.filter((item) => {
        return getConsonant(item.brand) === 자음;
      });
    },
});

//도전 파이어베이스 ㄱㄴㄷ순 정렬셀렉터
export const sortBrandListByFirebaseSelectorFamily = selectorFamily({
  key: 'sortBrandListByFirebaseSelectorFamily',
  get: (자음) => async () => {
    const db = getFirestore(app);
    const ref = collection(db, 'productlist');
    const qry = query(ref, where('brand', '==', brand), orderBy('brand'));
    const snapshot = await getDocs(qry);

    const dataList = snapshot.docs.map((doc) => {
      return doc.data();
    });

    // return categoryList.filter((item) => {
    //   return getConsonant(item.brand) === 자음;
    // });
    return dataList;
  },
});

// firebase selector test

// export const categoryCountSelectorFamily = selectorFamily({
//   key: 'categoryCountSelectorFamily',
//   get:
//     (categories = []) =>
//     async () => {
//       const db = getFirestore(app);
//       const ref = collection(db, 'productlist');
//       const counts = {};

//       console.count('useCategoryCount', '몇번호출됬어요?');

//       for (const category of categories) {
//         const qry = query(ref, where('category', '==', category));
//         const snapshot = await getDocs(qry);
//         const count = snapshot.size;
//         counts[category] = count;
//       }

//       return counts;
//     },
// });

export const etcBrandListSelector = selector({
  key: 'etcBrandListSelector',
  get: ({ get }) => {
    const product = get(productListState);

    const categoryList = product.filter((arr, index, callback) => {
      return (
        index === callback.findIndex((product) => product.brand === arr.brand)
      );
    });

    return categoryList.sort((a, b) => {
      return a.brand.toLowerCase() < b.brand.toLowerCase()
        ? -1
        : a.brand.toLowerCase() == b.brand.toLowerCase()
        ? 0
        : 1;
    });
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

export const priceFilterListSelectorFamily = selector({
  key: 'priceFilterListSelectorFamily',
  get: ({ get }) => {
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
      '0,10000': lessThenFiveHundredProduct,
    };

    const lessThenTenHundredProduct = product.filter(lessThenTenHundredFilter);
    const lessThenTenHundredProductList = {
      '10000,19990': lessThenTenHundredProduct,
    };

    const lessThenTwentyHundredProduct = product.filter(
      lessThenTwentyHundredFilter
    );
    const lessThenTwentyHundredProductList = {
      '20000,30000': lessThenTwentyHundredProduct,
    };

    const priceFilterMergeList = {
      ...lessThenFiveHundredProductList,
      ...lessThenTenHundredProductList,
      ...lessThenTwentyHundredProductList,
    };

    return priceFilterMergeList;
  },
});

// firebase selector test

export const categoryCountSelectorFamily = selectorFamily({
  key: 'categoryCountSelectorFamily',
  get:
    (categories = []) =>
    async () => {
      const db = getFirestore(app);
      const ref = collection(db, 'productlist');
      const counts = {};

      console.count('useCategoryCount', '몇번호출됬어요?');

      for (const category of categories) {
        const qry = query(ref, where('category', '==', category));
        const snapshot = await getDocs(qry);
        const count = snapshot.size;
        counts[category] = count;
      }

      return counts;
    },
});
