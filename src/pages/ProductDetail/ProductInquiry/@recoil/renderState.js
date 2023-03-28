import { selector } from "recoil";
import { atom } from "recoil";

// 문의 파트 - 몇개씩 아코디언을 뿌려줄지를 정하기 위한 atom
export const inquiryLimitAtom = atom({
  key: 'inquiryLimitAtom',
  default: 6,
});

// 문의 파트 - 현재 보고 있는 페이지를 구분하기 위한 atom
export const inquiryPageAtom = atom({
  key: 'inquiryPageAtom',
  default: 1,
});

export const inquiryOffsetSelector = selector({
  key: 'inquiryOffsetSelector',
  get: ({ get }) => {
    const limit = get(inquiryLimitAtom);
    const page = get(inquiryPageAtom);
    const offset = (page - 1) * limit;

    return offset;
  },
});

