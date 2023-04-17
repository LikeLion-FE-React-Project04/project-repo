// import {
//   alertModalState,
//   alertModalText,
//   alertModalMoveState,
//   alertModalUiType,
// } from '@/components/AlertBox/@recoil/alertModalState.js';
//import { darkFilterState } from '@/store/darkFilterState.js';
import { useCallback, useMemo } from 'react';
import { checkValidation } from '@/utils';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/app.js';
import { signUpFormState, emailConfirmState } from '../@recoil/signUp';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { useAlertBox } from '@/components/AlertBox/customHooks/useAlertBox.js';

// 이메일 중복 확인 로직
export function useConfirmEmail() {
  const [emailConfirm, setEmailConfirm] = useRecoilState(emailConfirmState);
  const signUpForm = useRecoilValue(signUpFormState);

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

  const confirmEmail = useCallback(
    async ({ email } = signUpForm) => {
      // 유효성 확인
      // 통과시 '' 반환
      let alertPragment = checkValidation('email', email);

      // 이미 존재하는 이메일인지 확인
      if (alertPragment == '') {
        const q = query(
          collection(db, 'users'),
          where('email', '==', signUpForm.email)
        );
        const querySnapshot = await getDocs(q);
        let isExist = false;

        querySnapshot.forEach((doc) => {
          isExist = true;
        });
        setEmailConfirm(!isExist);
        alertPragment = isExist
          ? '이미 존재하는 이메일입니다.'
          : '사용 가능한 이메일 입니다.';
      }

      // 알림
      // setAlertModalState(true);
      // setDarkFilterState(true);
      // setAlertModalText(alertPragment);
      // setAlertModalMoveState({
      //   needToMove: false,
      //   moveUrl: '',
      // });
      // setAlertModalUiType('onlyConfirm');
      showAlertBox({
        alertText: alertPragment, // (필수) [경고창 텍스트 설정]
        needToMove: false, // (선택) [이동 여부 설정] 만약에 '확인'버튼을 눌렀을 때, 어디론가 페이지를 이동시키고 싶은 경우만 넣어주기
        moveUrl: '', // (선택) [이동 할 url 설정] 만약에 '확인'버튼을 눌렀을 때, 어디론가 페이지를 이동시키고 싶은 경우만 넣어주기
        btnUiType: 'onlyConfirm', // (필수) [버튼 형태 설정] 확인 버튼만 있는 'onlyConfirm' 또는, 확인/취소 버튼이 있는 'confirmAndCancel'을 넣어주기
        needToRemove: false, // (선택) [장바구니에서 상품을 삭제할 여부 설정] 장바구니 페이지에서 상품을 삭제할 생각이 있다면 넣어주기
        product: {}, // (선택) [어떤 상품을 삭제할 것인지 설정] 삭제할 상품 넣어주기
      });
    },
    [signUpForm]
  );

  return useMemo(
    () => ({
      confirmEmail,
    }),
    [confirmEmail]
  );
}
