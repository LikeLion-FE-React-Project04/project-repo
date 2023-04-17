import { atom } from "recoil";

// 경고창을 띄울지 말지의 상태를 관리
export const alertModalState = atom({
  key: 'alertModalState',
  default: false,
});

// 경고창의 텍스트를 관리
export const alertModalText = atom({
  key: 'alertModalText',
  default: '경고창 텍스트 입니다.',
});

// 경고창의 링크 이동 여부를 저장
export const alertModalMoveState = atom({
  key: 'alertModalMoveState',
  default: {
    needToMove: false,
    moveUrl: '',
  },
});

// uiType 관리
export const alertModalUiType = atom({
  key: 'alertModalUiType',
  default: 'onlyConfirm',
});

// CART페이지에서 상품을 삭제하려고 하는지 여부를 관리
export const caseOfRemoveProduct = atom({
  key: 'caseOfRemoveProduct',
  default: {
    needToRemove: false,
    product: {},
  },
});
