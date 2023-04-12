import { atom, /* selector */ } from 'recoil';

export const transparentFilterState = atom({
  key: 'transparentFilterState',
  default: false,
});

export const transparentFilterFocusState = atom({
  key: 'transparentFilterFocusState',
  default: null
})