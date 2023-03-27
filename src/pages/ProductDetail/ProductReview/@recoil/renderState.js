import { atom, selector } from 'recoil';

export const reviewLimitAtom = atom({
  key: 'limitAtom',
  default: 3,
});

export const reviewPageAtom = atom({
  key: 'pageAtom',
  default: 1,
});

export const offsetSelector = selector({
  key: 'offsetSelector',
  get: ({ get }) => {
    const limit = get(reviewLimitAtom);
    const page = get(reviewPageAtom);
    const offset = (page - 1) * limit;

    return offset;
  },
});