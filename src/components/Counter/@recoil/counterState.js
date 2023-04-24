import { atom } from 'recoil';

export const countState = atom({
  key: 'countState',
  default: { default: 1 },
});

export const countMinusBtnRefState = atom({
  key: 'countMinusBtnRefState',
  default: null,
});

export const countPlusBtnRefState = atom({
  key: 'countPlusBtnRefState',
  default: null,
});
