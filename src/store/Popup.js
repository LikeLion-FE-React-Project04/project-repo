import { atom } from 'recoil';

export const cartPopupState = atom({
  key: 'cartPopupState',
  default: false,
});

export const cartPopupInfoState = atom({
  key: 'cartPopupInfoState',
  default: {},
});
