import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useCallback, useMemo } from 'react';

import {
  signUpFormState,
  emailConfirmState,
  agreementEssentialState,
} from '../@recoil/signUp';

import { useSignUpValidation } from './useSignUpValidation';

// import {
//   alertModalState,
//   alertModalText,
//   alertModalMoveState,
//   alertModalUiType,
// } from '@/components/AlertBox/@recoil/alertModalState.js';
import { useAlertBox } from '@/components/AlertBox/customHooks/useAlertBox.js';
//import { darkFilterState } from '@/store/darkFilterState.js';
import { useSignUp } from '@/firebase/auth';
import { useCreateAuthUser } from '@/firebase/firestore/useCreateAuthUser';

import { addressState } from '@/store/addressState.js';

export function useSignUpSubmit() {
  const { signUp } = useSignUp();
  const { createAuthUser } = useCreateAuthUser();

  const signUpForm = useRecoilValue(signUpFormState);
  const { signUpValidation } = useSignUpValidation();
  const emailConfirm = useRecoilValue(emailConfirmState);
  const address = useRecoilValue(addressState);

  // 약관 동의
  const agreementEssential = useRecoilValue(agreementEssentialState);

  // 경고창
  // const setAlertModalState = useSetRecoilState(alertModalState);
  // const setAlertModalText = useSetRecoilState(alertModalText);
  // const setAlertModalMoveState = useSetRecoilState(alertModalMoveState);
  // const setAlertModalUiType = useSetRecoilState(alertModalUiType);
  // const setDarkFilterState = useSetRecoilState(darkFilterState);

  const { settingAlertBox } = useAlertBox();
  const showAlertBox = (getValue) => {
    settingAlertBox(getValue); // 경고창 세팅
  };

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
        // setAlertModalState(true);
        // setDarkFilterState(true);
        // setAlertModalText(message);
        // setAlertModalMoveState({
        //   needToMove: false,
        //   moveUrl: '',
        // });
        // setAlertModalUiType('onlyConfirm');
        showAlertBox({
          alertText: message, // (필수) [경고창 텍스트 설정]
          needToMove: false, // (선택) [이동 여부 설정] 만약에 '확인'버튼을 눌렀을 때, 어디론가 페이지를 이동시키고 싶은 경우만 넣어주기
          moveUrl: '', // (선택) [이동 할 url 설정] 만약에 '확인'버튼을 눌렀을 때, 어디론가 페이지를 이동시키고 싶은 경우만 넣어주기
          btnUiType: 'onlyConfirm', // (필수) [버튼 형태 설정] 확인 버튼만 있는 'onlyConfirm' 또는, 확인/취소 버튼이 있는 'confirmAndCancel'을 넣어주기
          needToRemove: false, // (선택) [장바구니에서 상품을 삭제할 여부 설정] 장바구니 페이지에서 상품을 삭제할 생각이 있다면 넣어주기
          product: {}, // (선택) [어떤 상품을 삭제할 것인지 설정] 삭제할 상품 넣어주기
        });

        return;
      }

      // 유효성 검사 통과. but 필수 이용약관 동의 x
      if (!agreementEssential) {
        // setAlertModalState(true);
        // setDarkFilterState(true);
        // setAlertModalText('이용약관을 확인해주세요.');
        // setAlertModalMoveState({
        //   needToMove: false,
        //   moveUrl: '',
        // });
        // setAlertModalUiType('onlyConfirm');
        showAlertBox({
          alertText: '이용약관을 확인해주세요.', // (필수) [경고창 텍스트 설정]
          needToMove: false, // (선택) [이동 여부 설정] 만약에 '확인'버튼을 눌렀을 때, 어디론가 페이지를 이동시키고 싶은 경우만 넣어주기
          moveUrl: '', // (선택) [이동 할 url 설정] 만약에 '확인'버튼을 눌렀을 때, 어디론가 페이지를 이동시키고 싶은 경우만 넣어주기
          btnUiType: 'onlyConfirm', // (필수) [버튼 형태 설정] 확인 버튼만 있는 'onlyConfirm' 또는, 확인/취소 버튼이 있는 'confirmAndCancel'을 넣어주기
          needToRemove: false, // (선택) [장바구니에서 상품을 삭제할 여부 설정] 장바구니 페이지에서 상품을 삭제할 생각이 있다면 넣어주기
          product: {}, // (선택) [어떤 상품을 삭제할 것인지 설정] 삭제할 상품 넣어주기
        });

        return;
      }

      // 전부 통과하면 계정 생성
      const user = await signUp(email, password, name, birth);

      createAuthUser(user, {
        phoneNumber,
        address,
        gender,
        birth,
      });

      // setAlertModalState(true);
      // setDarkFilterState(true);
      // setAlertModalText('회원가입이 완료되었습니다.');
      // setAlertModalMoveState({
      //   needToMove: true,
      //   moveUrl: '/',
      // });
      // setAlertModalUiType('onlyConfirm');
      showAlertBox({
        alertText: '회원가입이 완료되었습니다.', // (필수) [경고창 텍스트 설정]
        needToMove: true, // (선택) [이동 여부 설정] 만약에 '확인'버튼을 눌렀을 때, 어디론가 페이지를 이동시키고 싶은 경우만 넣어주기
        moveUrl: '/', // (선택) [이동 할 url 설정] 만약에 '확인'버튼을 눌렀을 때, 어디론가 페이지를 이동시키고 싶은 경우만 넣어주기
        btnUiType: 'onlyConfirm', // (필수) [버튼 형태 설정] 확인 버튼만 있는 'onlyConfirm' 또는, 확인/취소 버튼이 있는 'confirmAndCancel'을 넣어주기
        needToRemove: false, // (선택) [장바구니에서 상품을 삭제할 여부 설정] 장바구니 페이지에서 상품을 삭제할 생각이 있다면 넣어주기
        product: {}, // (선택) [어떤 상품을 삭제할 것인지 설정] 삭제할 상품 넣어주기
      });

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
