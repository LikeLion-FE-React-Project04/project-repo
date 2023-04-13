import { atom } from 'recoil';

// 영속성 부여?
export const addressState = atom({
  key: 'addressState',
  default: '',
});

export const addressNumberState = atom({
  key: 'addressNumberState',
  default: '',
});
