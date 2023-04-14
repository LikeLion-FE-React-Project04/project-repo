import { selector } from 'recoil';
import { atom /* selector */ } from 'recoil';

// 회원 가입 데이터
export const signUpFormState = atom({
  key: 'signUpFormState',
  default: {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: '',
    address: '',
    gender: 'non',
    birth: {
      year: '',
      month: '',
      day: '',
    },
  },
});

// 회원가입 유효성 데이터
export const formValidationState = atom({
  key: 'formValidationState',
  default: {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: '',
    address: '',
    gender: '',
    birth: '',
  },
});

// 이메일 중복확인 여부
export const emailConfirmState = atom({
  key: 'emailConfirmState',
  default: false,
});

// 이용약관 확인 여부
export const agreementState = atom({
  key: 'agreementState',
  default: {
    ag1: false,
    ag2: false,
    ag3: false,
    ag4: false,
  },
});

// 필수요소 확인 여부
export const agreementEssentialState = selector({
  key: 'agreementEssentialState',
  get: ({ get }) => {
    const agreement = get(agreementState);
    const { ag1, ag2, ag4 } = agreement;

    return ag1 && ag2 && ag4;
  },
});
