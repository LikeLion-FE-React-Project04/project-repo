import { atom } from 'recoil';

export const addressState = atom({
  key: 'addressState',
  default: '서울 중량구 면목로 42길 11 (행운빌딩) 603호',
});

export const addressNumberState = atom({
  key: 'addressNumberState',
  default: '123',
});
