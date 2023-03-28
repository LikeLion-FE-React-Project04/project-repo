import { atom, selector } from 'recoil';

export const productNameAtom = atom({
  key: 'productNameAtom',
  default: '',
});

export const reviewLimitAtom = atom({
  key: 'reviewLimitAtom',
  default: 3,
});

export const reviewPageAtom = atom({
  key: 'reviewPageAtom',
  default: 1,
});

export const riviewOffsetSelector = selector({
  key: 'riviewOffsetSelector',
  get: ({ get }) => {
    const limit = get(reviewLimitAtom);
    const page = get(reviewPageAtom);
    const offset = (page - 1) * limit;

    return offset;
  },
});