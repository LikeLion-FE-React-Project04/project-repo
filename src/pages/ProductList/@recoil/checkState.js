import { atom } from 'recoil';

export const checkState = atom({
  key: 'checkState',
  default: false,
});

export const checkArrState = atom({
  key: 'checkArrState',
  default: [],
});
