import { useRecoilValue } from 'recoil';
import { useCallback, useMemo } from 'react';

import {
  signUpFormState,
  emailConfirmState,
  agreementEssentialState,
} from '../@recoil/signUp';

import { useSignUpValidation } from './useSignUpValidation';

import { useAlertBox } from '@/components/AlertBox/@hook/useAlertBox.js';
import { useSignUp } from '@/firebase/auth';
import { useCreateAuthUser } from '@/firebase/firestore/useCreateAuthUser';

import { addressState } from '@/store/addressState.js';
import { useState } from 'react';

export function useSignUpSubmit() {
  const { signUp } = useSignUp();
  const { createAuthUser } = useCreateAuthUser();
  const signUpForm = useRecoilValue(signUpFormState);
  const { signUpValidation } = useSignUpValidation();
  const emailConfirm = useRecoilValue(emailConfirmState);
  const address = useRecoilValue(addressState);

  // 약관 동의
  const agreementEssential = useRecoilValue(agreementEssentialState);
  const { settingAlertBox } = useAlertBox();
  const showAlertBox = (getValue) => {
    settingAlertBox(getValue); // 경고창 세팅
  };

  const [isLoading, setIsLoading] = useState(false);
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
      // 유효성 검사 실행
      // 통과 시 '' 리턴
      const message = signUpValidation();

      // 미통과 (경고 알람)
      if (message) {
        showAlertBox({
          alertText: message,
          btnUiType: 'onlyConfirm', // (필수) [버튼 형태 설정] 확인 버튼만 있는 'onlyConfirm' 또는, 확인/취소 버튼이 있는 'confirmAndCancel'을 넣어주기
        });

        return;
      }

      // 유효성 검사 통과. but 필수 이용약관 동의 x
      if (!agreementEssential) {
        showAlertBox({
          alertText: '이용약관을 확인해주세요.',
          btnUiType: 'onlyConfirm',
        });

        return;
      }

      setIsLoading(true);

      // 전부 통과하면 계정 생성
      try {
        const user = await signUp(email, password, name, birth);

        createAuthUser(user, {
          phoneNumber,
          address,
          gender,
          birth,
        });

        showAlertBox({
          alertText: '회원가입이 완료되었습니다.',
          moveUrl: '/',
          btnUiType: 'onlyConfirm',
        });
      } catch (error) {
        showAlertBox({
          alertText: '회원가입 도중에 오류가 발생했습니다.',
          moveUrl: '/',
          btnUiType: 'onlyConfirm',
        });
      } finally {
        setIsLoading(false);
      }

      return;
    },
    [signUpForm, emailConfirm, address, agreementEssential]
  );

  return useMemo(
    () => ({
      signUpSubmit,
      isLoading,
    }),
    [signUpSubmit, isLoading]
  );
}
