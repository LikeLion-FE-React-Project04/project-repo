import { atom, atomFamily, selector, selectorFamily } from 'recoil';

export const initialProductList = [
  {
    id: 'product-rksk',
    name: '[대구 반할만떡] 유부호만두',
    description: '유부로 속을 든든히 채운 군만두',
    price: 6900,
    saleRatio: 0.24,
    salePrice: 5244,
    image: {
      thumbnail: 'assets/product/ubuho/thumbnail.jpg',
      view: 'ubuho/detail-view.jpg',
      banner: 'ubuho/detail-banner.jpg',
      info: 'ubuho/detail-info.jpg',
      alt: '유부호 만두',
    },
    stock: 3,
    category: '샐러드ㆍ간편식',
    kalryOnly: false,
    brand: '대구 반할만떡',
  },
  {
    id: 'product-ekfk',
    name: '[풀무원] 탱탱쫄면 (4개입)',
    description: '튀기지 않아 부드럽고 매콤한',
    price: 4980,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'assets/product/tangtang/thumbnail.jpg',
      view: 'tangtang/detail-view.jpg',
      banner: 'tangtang/detail-banner.jpg',
      info: 'tangtang/detail-info.jpg',
      alt: '풀무원 탱탱쫄면',
    },
    stock: 11,
    category: '샐러드ㆍ간편식',
    kalryOnly: false,
    brand: '풀무원',
  },
  {
    id: 'product-akqk',
    name: '[홍대주꾸미] 주꾸미 볶음 300g (냉동)',
    description: '매콤달콤한 마력의 밥도둑',
    price: 7900,
    saleRatio: 0.13,
    salePrice: 6800,
    image: {
      thumbnail: 'assets/product/jukkumi/thumbnail.jpg',
      view: 'jukkumi/detail-view.jpg',
      banner: 'jukkumi/detail-banner.jpg',
      info: 'jukkumi/detail-info.jpg',
      alt: '홍대 주꾸미',
    },
    stock: 8,
    category: '수산ㆍ해산ㆍ건어물',
    kalryOnly: true,
    brand: '홍대주꾸미',
  },
  {
    id: 'product-tkwk',
    name: '[강남면옥] 소갈비찜',
    description: '보는 맛과 먹는 맛 모두 푸짐',
    price: 29800,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'assets/product/kangnam/thumbnail.jpg',
      view: 'kangnam/detail-view.jpg',
      banner: 'kangnam/detail-banner.jpg',
      info: 'kangnam/detail-info.jpg',
      alt: '강남면옥 소갈비찜',
    },
    stock: 2,
    category: '국ㆍ반찬ㆍ메인요리',
    kalryOnly: true,
    brand: '강남면옥',
  },
  {
    id: 'product-ckzk',
    name: "[Kalry's] 한돈 삼겹 베이컨",
    description: '무항생제 한돈 삼겹살의 고소한 풍미 그대로',
    price: 4500,
    saleRatio: 0.25,
    salePrice: 3375,
    image: {
      thumbnail: 'assets/product/bacon/thumbnail.jpg',
      view: 'bacon/detail-view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: '칼리 한돈 삼겹 베이컨',
    },
    stock: 13,
    category: '정육ㆍ계란',
    kalryOnly: true,
    brand: "Kalry's",
  },
  {
    id: 'product-aaaa',
    name: '유명산지 설향딸기 500g',
    description: '유명산지에서 전하는 제철 딸기',
    price: 11900,
    saleRatio: 0.07,
    salePrice: 10990,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1608801577622l0.jpg',
      view: 'bacon/detail-view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: '유명산지 설향딸기 500g',
    },
    stock: 13,
    category: '과일ㆍ견과ㆍ쌀',
    kalryOnly: false,
    brand: '유명산지',
  },
  {
    id: 'product-aaab',
    name: "[Kalry's] 양념 소불고기 1kg (냉장)",
    description: '100g당 가격: 1,899원',
    price: 19990,
    saleRatio: 0.05,
    salePrice: 18990,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/165304027922l0.jpg',
      view: 'bacon/detail-view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: '양념 소불고기 1kg (냉장)',
    },
    stock: 4,
    category: '정육ㆍ계란',
    kalryOnly: true,
    brand: "Kalry's",
  },
  {
    id: 'product-aaac',
    name: '[이연복의 목란] 짬뽕 2인분 (맵기선택)',
    description: '입맛에 맞게 고르는 인기 메뉴',
    price: 13500,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1648206780555l0.jpeg',
      view: 'bacon/detail-view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: '짬뽕 2인분 (맵기선택)',
    },
    stock: 13,
    category: '면ㆍ양념ㆍ오일',
    kalryOnly: true,
    brand: '이연복의 목란',
  },
  {
    id: 'product-aaad',
    name: '[브룩클린688] 호주산 목초육 치마살 구이용 300g (냉장)',
    description: '100g 당 5166원',
    price: 15500,
    saleRatio: 0.1,
    salePrice: 13975,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/165303917855l0.jpeg',
      view: 'bacon/detail-view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: '호주산 목초육 치마살',
    },
    stock: 4,
    category: '정육ㆍ계란',
    kalryOnly: false,
    brand: '브룩클린688',
  },
  {
    id: 'product-aaae',
    name: '[포비베이글] 크림치즈 8종',
    description: '집에서 즐기는 녹진한 그 맛',
    price: 9900,
    saleRatio: 0.1,
    salePrice: 8910,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1653034267999l0.jpg',
      view: 'bacon/detail-view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: '크림치즈 8종',
    },
    stock: 13,
    category: '베이커리ㆍ치즈ㆍ델리',
    kalryOnly: false,
    brand: '포비베이글',
  },
  {
    id: 'product-aaaf',
    name: '[그래놀라 하우스] 그래놀라 5종 (택1)',
    description: '도톰하게 뭉쳐 만든 수제 그래놀라',
    price: 13500,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1653035941542l0.jpg',
      view: 'bacon/detail-view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: '그래놀라 5종',
    },
    stock: 7,
    category: '간식ㆍ과자ㆍ떡',
    kalryOnly: true,
    brand: '그래놀라 하우스',
  },
  {
    id: 'product-aaag',
    name: '[스타벅스] by 네스프레소 호환 캡슐 11종',
    description:
      '싱글오리진 과테말라 신규 출시! 집에서 내려 마시는 스타벅스 커피',
    price: 7990,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1563948119225l0.jpg',
      view: 'bacon/detail-view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: '네스프레소 호환 캡슐 11종',
    },
    stock: 6,
    category: '생수ㆍ음료ㆍ우유ㆍ커피',
    kalryOnly: false,
    brand: '스타벅스',
  },
  {
    id: 'product-aaah',
    name: '[켄트] 콤팩트 초극세모 칫솔 4개입 세트',
    description: '작은 헤드로 구석구석 개운하게',
    price: 17200,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1655468290167l0.jpeg',
      view: 'bacon/detail-view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: '콤팩트 초극세모',
    },
    stock: 13,
    category: '헤어ㆍ바디ㆍ구강',
    kalryOnly: false,
    brand: '켄트',
  },
  {
    id: 'product-aaai',
    name: '[KF365] 오리지널 바베큐폭립 1kg(500gX2EA)',
    description: '온 가족이 즐기는 큼직한 바베큐 폭립!',
    price: 23500,
    saleRatio: 0.15,
    salePrice: 19900,
    image: {
      thumbnail:
        'https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/b8c4673a-8e39-4dfc-9e3c-d2fd013e8cfa.jpg',
      view: 'bacon/detail-view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: '온 가족이 즐기는 큼직한 바베큐 폭립',
    },
    stock: 13,
    category: '샐러드ㆍ간편식',
    kalryOnly: true,
    brand: 'KF365',
  },
  {
    id: 'product-aaaj',
    name: '[스윗밸런스] 오늘의 샐러드 10종 (리뉴얼) (택1)',
    description: '다채로운 토핑을 얹은 샐러드',
    price: 4900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1655775819130l0.jpg',
      view: 'bacon/detail-view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: ' 오늘의 샐러드',
    },
    stock: 6,
    category: '샐러드ㆍ간편식',
    kalryOnly: false,
    brand: '스윗밸런스',
  },
];

export const productListState = atom({
  key: 'productListState',
  default: initialProductList,
});

export const productListFamily = atomFamily({
  key: 'productListFamily',
  default: (id) => initialProductList.find((order) => order.id === id),
  // default: (order) => initialOrderList.find(({order: orderName}) => orderName === order),
  // default: (index) => initialOrderList[index],
});

export const selectedproductId = atom({
  key: 'selectedproductId',
  default: 'order-1',
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

      // console.log(product[][categoryName]);

      // console.log(categoryList);

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

export const checkedCategoryListAtom = atom({
  key: 'checkedCategoryListAtom',
  // default: allCategoryNameListSelectorFamily('category'),
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

/* ---------------------------- brandcheckRender ---------------------------- */
export const checkedBrandListAtom = atom({
  key: 'checkedBrandListAtom',
  // default: allBrandNameListSelectorFamily('Brand'),
  default: [],
});

export const renderBrandSelector = selector({
  key: 'renderBrandSelector',
  get: ({ get }) => {
    //product = initialProductList 전체 15개의 정적Local Data
    const products = get(productListState);
    const checkedBrandList = get(checkedBrandListAtom);

    //early return으로 인해 초기화상태가 전체리스트를 내뱉게해줌
    // if (checkedBrandList.length <= 0) {
    //   return products;
    // }

    const realRenderBrand = products.filter((product) => {
      return checkedBrandList.some((c) => {
        return c === product.brand;
      });
    });

    return realRenderBrand;
  },
});

/* --------------------------------- 합치기테스트 --------------------------------- */

export const sumTestSelector = selector({
  key: 'sumTestSelector',
  get: ({ get }) => {
    const products = get(productListState);
    const renderBrand = get(renderBrandSelector);
    const renderCategory = get(renderCategorySelector);
    // const sumList = [...renderCategory, ...renderBrand];

    console.log(renderBrand, '랜더브랜드');
    console.log(renderCategory, '랜더카테고리');

    // const sumFilterList = products.filter((it) => renderCategory.includes(it));
    // const sumFilterList1 = products.filter((it) => renderBrand.includes(it));
    // const testSumFilter = sumFilterList && sumFilterList1;

    const testFilterList = renderCategory.filter((x) =>
      renderBrand.includes(x)
    );

    // console.log(testSumFilter, '테스트썸필터');
    console.log(testFilterList, '여길봐 이거봐야되 테스트 두개 중복체크');
    console.log(renderCategory[0], '카테고리0번쨰인덱스');
    console.log(renderBrand[0], '브랜드0번쨰인덱스');

    if (renderCategory.length <= 0 && renderBrand <= 0) {
      return products;
    }

    if (renderCategory.length > 0 && renderBrand <= 0) {
      return renderCategory;
    }

    if (renderCategory.length <= 0 && renderBrand.length > 0) {
      return renderBrand;
    }

    return testFilterList;
    // && sumFilterList1;
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
        if (element[karlyOnly] === 'true') {
          return true;
        }
      };

      const karlyOnlyList = product.filter(isKarlyOnly);

      // console.log(product)
      // console.log(karlyOnlyList);

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

/* ---------------------------- kalryOnlycheckRender ---------------------------- */
export const checkedKarlyOnlyListAtom = atom({
  key: 'checkedKarlyOnlyListAtom',
  // default: allBrandNameListSelectorFamily('Brand'),
  default: [],
});

export const renderKarlyOnlySelector = selector({
  key: 'renderKarlyOnlySelector',
  get: ({ get }) => {
    //product = initialProductList 전체 15개의 정적Local Data
    const products = get(productListState);
    const checkedKarlyOnlyList = get(checkedKarlyOnlyListAtom);
    //칼리가 들어갔을때,  [kallyonly] 가될거고,
    //전체를 순환돌면서 key가 karlyonly인게 있는지 찾기

    const hasKalryOnly = (product) => {
      const kalryOnlyFound = checkedKarlyOnlyList.some(
        (item) => item === 'kalryOnly'
      );

      if (kalryOnlyFound) {
        return product.kalryOnly;
      }

      return true;
    };

    // const karlyOnlyList = products.filter(isKalryOnly);
    const karlyOnlyList = products.filter(hasKalryOnly);

    console.log(karlyOnlyList);
    // console.log(checkedKarlyOnlyList);

    // debugger;

    return karlyOnlyList;
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

// 사용하지않음
export const benefitsLengthListSelectorFamily = selectorFamily({
  key: 'benefitsLengthListSelectorFamily',
  get:
    (saleRatio) =>
    ({ get }) => {
      const benefits = get(productListState);
      const benefitsList = get(benefitsListSelectorFamily(saleRatio));

      const ArrayBenefitsList = Object.entries(benefitsList);

      // console.log(benefits)
      console.log(benefits[0].category, '전체리스트');
      console.log(benefitsList['할인상품'][0].category, '내가 뽑아낸 데이터');
      console.log(benefitsList['한정수량'][0].category, '내가 뽑아낸 데이터');
      // console.log(ArrayBenefitsList, '가공한 데이터')

      // return ArrayBenefitsList.reduce((결과, 카테고리) => {
      //   let 카운트 = 0

      //   benefits.forEach((item) => {
      //     if (item.saleRatio === 카테고리['한정수량'].saleRatio) {
      //       카운트++
      //     }
      //   })

      //   return {
      //     ...결과,
      //     [카테고리[한정수량]]: 카운트,
      //   }
      // }, {})
    },
});

/* ---------------------------------- price --------------------------------- */

export const priceFilterListSelectorFamily = selectorFamily({
  key: 'priceFilterListSelectorFamily',
  get:
    () =>
    ({ get }) => {
      const product = get(productListState);

      const NonFilterProduct = (element) => {
        if (element.Price != 0) {
          return true;
        }
      };
      const lessThenFiveHundredFilter = (element) => {
        if (
          element.price > 1000 &&
          element.salePrice < 10000 &&
          element.price < 13000
        ) {
          return true;
        }
      };
      const lessThenTenHundredFilter = (element) => {
        if (
          element.price > 10000 &&
          element.salePrice < 20000 &&
          element.price < 25000
        ) {
          return true;
        }
      };
      const lessThenTwentyHundredFilter = (element) => {
        if (element.price > 24000 && element.salePrice < 30000) {
          return true;
        }
      };

      const totalProduct = product.filter(NonFilterProduct);
      const totalProductList = { filter1: totalProduct };

      const lessThenFiveHundredProduct = product.filter(
        lessThenFiveHundredFilter
      );
      const lessThenFiveHundredProductList = {
        filter2: lessThenFiveHundredProduct,
      };

      const lessThenTenHundredProduct = product.filter(
        lessThenTenHundredFilter
      );
      const lessThenTenHundredProductList = {
        filter3: lessThenTenHundredProduct,
      };

      const lessThenTwentyHundredProduct = product.filter(
        lessThenTwentyHundredFilter
      );
      const lessThenTwentyHundredProductList = {
        filter4: lessThenTwentyHundredProduct,
      };

      const priceFilterMergeList = {
        ...totalProductList,
        ...lessThenFiveHundredProductList,
        ...lessThenTenHundredProductList,
        ...lessThenTwentyHundredProductList,
      };

      // console.log(totalProductList)
      // console.log(lessThenFiveHundredProductList, '만원미만')
      // console.log(lessThenTenHundredProductList, '만원이상이만원미만')
      // console.log(lessThenTwentyHundredProductList, '이만원이상')

      // console.log(priceFilterMergeList)

      return priceFilterMergeList;
    },
});

/* ---------------------------------- 필터렌더링 --------------------------------- */

export const productListAtom = atom({
  key: 'productListAtom',
  default: initialProductList,
});

export const filterAtom = atom({
  key: 'filterAtom',
  default: [
    {
      brand: [
        '대구 반할만떡',
        '풀무원',
        '홍대주꾸미',
        '강남면옥',
        "Kalry's",
        '유명산지',
        '이연복의 목란',
        '브룩클린688',
        '포비베이글',
        '그래놀라 하우스',
        '스타벅스',
        '켄트',
        'KF365',
        '스윗밸런스',
      ],
      // prices: [1000, 5000],
    },
  ],
});

// export const productListSelectorFamily = selectorFamily({
//   key: 'productListSelectorFamily',
//   get:
//     (categoryName) =>
//     ({ get }) => {
//       const productList = get(productListAtom);
//       const categoryList = get(categoryListSelectorFamily(categoryName));

//       const 카테고리필터 = (상품) => {
//         const 카테고리조건배열 =
//           categoryList?.find((필터) => 필터.category)?.category || [];

//         // console.log(카테고리조건배열);

//         return 카테고리조건배열;
//       };
//       const 브랜드필터 = (상품) => {
//         const 브랜드조건배열 =
//           categoryList?.find((필터) => 필터.brand)?.brand || [];

//         // console.log(브랜드조건배열);

//         return 브랜드조건배열;
//       };
//       const 가격필터 = (상품) => {
//         const [최솟값, 최댓값] =
//           priceFilterList?.find((필터) => 필터.price)?.price || [];

//         return 상품.price >= 최솟값 && 상품.price <= 최댓값;
//       };

//       return productList.filter(카테고리필터).filter(브랜드필터);
//       // .filter(가격필터)
//     },
// });

/* ---------------------------- ----------------- --------------------------- */

// export const categoryListState = selector({
//   key : 'categoryListState',

//   get : ({ get }) => {
//     const products  = get(productListState);

//     // const categoryList =
//     // product.filter((arr, index, callback) =>
//     //     index ===
//     //     callback.findIndex((product) => product.category === arr.category))

//     let categoryList = []

//     products.forEach(product=>{
//       let f = true

//       categoryList.map(item=>{
//         if(item.category == product.category) {
//           item.count += 1
//           f = false
//         }
//       })
//       if (f){
//       categoryList.push({'category': product.category, 'count': 1})
//       }
//     })

//     // console.log(categoryList);

//     return categoryList;
//   }
// }

// )

/* --------------------------------- 필터링 로직1 -------------------------------- */
// const realRenderCategory = products.filter((product) => {
//   let 상태의불린값 = false;

//   checkedCategory.forEach((c) => {
//     if (c == product.category) {
//       상태의불린값 = true;
//     }
//   });

//   return 상태의불린값;
// });
