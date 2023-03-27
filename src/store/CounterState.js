import { atom } from 'recoil';

// export const countState = atom({
//   key: 'countState',
//   default: [1],
// });

// 관리해야할 상태를 리스트로 만들고
// 리스트를 관리하면 좋을것 같네유

export const countState = atom({
  key: 'countState',
  default: { default: 1 },
});
