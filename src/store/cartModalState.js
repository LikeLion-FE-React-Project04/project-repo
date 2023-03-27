/* eslint-disable no-const-assign */
import { selector } from 'recoil';
import { useRecoilValue } from 'recoil';
import { atom, atomFamily /* selector */ } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { productListFamily, productListState } from './productListState';
import { countState } from './CounterState';
import { useSetRecoilState } from 'recoil';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
});

export const productCartModalState = atom({
  key: 'productCartModal',
  default: false,
});

export const cartDataState = atom({
  key: 'cartDataState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 나중에 바꾸자
// 리팩토링 필수!!!!!!!!!!!!!
export const cartProductsState = selector({
  key: 'cartProductsState',
  get: ({ get }) => {
    const cartData = get(cartDataState);

    // 로직을 좀더 최적화 할 수 없을까..? 이중순환 쓰기 싫은데...
    // 차라리 저장을 할떄 아이디가 아닌 모든 데이터를 저장하는것도 나쁘지 않을듯
    // productListFamily이거 쓰면 되는건가..
    // 오하려 구독하고 있는것보다는 카트페이지에 갔을떄 로직을 실행하는게 좋을지도,,,,
    // 이녀석이 랜더링 되어 있지 않으면 작동안하겠지??
    // 랜더링될떄 비로소 작동하나??

    const cartProducts = cartData.map((data) => {
      return get(productListFamily(data.productId));
    });

    return cartProducts;
  },
});

export const cartProductTypeState = selector({
  key: 'cartProductTypeState',
  get: ({ get }) => {
    const cartProducts = get(cartProductsState);

    const cartProductsType = [
      { storageType: 'cold', data: [] },
      { storageType: 'frozen', data: [] },
      {
        storageType: 'temperature',
        data: [],
      },
    ];

    cartProducts.map((product) => {
      cartProductsType.map((type) => {
        if (type.storageType === product.storageType) {
          type.data.push({ ...product, selected: true });
        }
      });
    });

    return cartProductsType;
  },
});

export const selectedState = atom({
  key: 'selectedState',
  default: {},
});

export const selectedAllState = atom({
  key: 'selectedAllState',
  default: true,
});

export const totalItemCountState = selector({
  key: 'totalItemCountState',
  get: ({ get }) => {
    return Object.keys(get(selectedState)).length;
  },
});

export const totalActiveItemCountState = selector({
  key: 'totalActiveItemCountState',
  get: ({ get }) => {
    let count = 0;

    Object.values(get(selectedState)).map((data) => {
      if (data) count += 1;
    });

    return count;
  },
});

export const cartPriceData = selector({
  key: 'cartPriceData',
  get: ({ get }) => {
    const count = get(countState);
    const select = get(selectedState);
    const setCartData = get(cartProductsState);

    let totalPrice = 0;
    let totalSalePrice = 0;
    let totalPaymentPrice = 0;

    setCartData.map((data) => {
      if (select[data.id]) {
        const dataCount = count[data.id];

        totalPrice += data.price * dataCount;
        totalPaymentPrice +=
          (data.saleRatio ? data.salePrice : data.price) * dataCount;
      }
    });

    totalSalePrice = totalPrice - totalPaymentPrice;

    return [totalPrice, totalSalePrice, totalPaymentPrice];
  },
});
