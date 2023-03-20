import { atom, atomFamily /* selector */ } from 'recoil';
import { recoilPersist } from 'recoil-persist';

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
