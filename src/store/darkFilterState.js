import { atom /* selector */ } from 'recoil';

export const darkFilterState = atom({
  key: 'darkFilterState',
  default: false,
});

export const darkFilterFocusState = atom({
  key: 'darkFilterFocusState',
  default: null,
});
