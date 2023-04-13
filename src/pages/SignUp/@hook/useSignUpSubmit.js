import {
  alertModalState,
  alertModalText,
  alertModalMoveState,
  alertModalUiType,
} from '@/components/AlertBox/@recoil/alertModalState.js';
import { darkFilterState } from '@/store/darkFilterState.js';
import { useSignUp, useAuthState } from '@/firebase/auth';
import { useCreateAuthUser } from '@/firebase/firestore/useCreateAuthUser';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  signUpFormState,
  emailConfirmState,
  agreementEssentialState,
} from '../@recoil/signUp';
import { useCallback, useMemo } from 'react';
import { useSignUpValidation } from './useSignUpValidation';
import { addressState } from '@/store/addressState.js';

export function useSignUpSubmit() {
  const { signUp } = useSignUp();
  const { createAuthUser } = useCreateAuthUser();

  const signUpForm = useRecoilValue(signUpFormState);
  const { message, signUpValidation } = useSignUpValidation();
  const emailConfirm = useRecoilValue(emailConfirmState);
  const address = useRecoilValue(addressState);

  // 약관 동의
  const agreementEssential = useRecoilValue(agreementEssentialState);

  // 경고창
  const setAlertModalState = useSetRecoilState(alertModalState);
  const setAlertModalText = useSetRecoilState(alertModalText);
  const setAlertModalMoveState = useSetRecoilState(alertModalMoveState);
  const setAlertModalUiType = useSetRecoilState(alertModalUiType);
  const setDarkFilterState = useSetRecoilState(darkFilterState);

  // 팬딩 작업 어떻게 할까?
  // 어차피 계속 바뀌어야하는데 차라리 useCallback을 쓰지 말까?
  const signUpSubmit = useCallback(
    async ({
      name,
      email,
      password,
      phoneNumber,
      gender,
      birth,
    } = signUpForm) => {
      const message = signUpValidation();

      if (message) {
        setAlertModalState(true);
        setDarkFilterState(true);
        setAlertModalText(message);
        setAlertModalMoveState({
          needToMove: false,
          moveUrl: '',
        });
        setAlertModalUiType('onlyConfirm');
        return;
      }

      if (!agreementEssential) {
        setAlertModalState(true);
        setDarkFilterState(true);
        setAlertModalText('이용약관을 확인해주세요.');
        setAlertModalMoveState({
          needToMove: false,
          moveUrl: '',
        });
        setAlertModalUiType('onlyConfirm');
        return;
      }

      const user = await signUp(email, password, name, birth);

      createAuthUser(user, {
        phoneNumber,
        address,
        gender,
        birth,
      });

      setAlertModalState(true);
      setDarkFilterState(true);
      setAlertModalText('회원가입이 완료되었습니다.');
      setAlertModalMoveState({
        needToMove: true,
        moveUrl: '/',
      });
      setAlertModalUiType('onlyConfirm');
      return;
    },
    [signUpForm, emailConfirm, address, agreementEssential]
  );
  return useMemo(
    () => ({
      signUpSubmit,
    }),
    [signUpSubmit]
  );
}
