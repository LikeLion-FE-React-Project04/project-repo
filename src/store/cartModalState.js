import { atom, atomFamily /* selector */ } from 'recoil';

export const productCartModalState = atom({
  key: 'productCartModal',
  default: false,
});

