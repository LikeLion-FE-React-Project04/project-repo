import { useCallback, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { signUpFormState, emailConfirmState } from '../@recoil/signUp';

import { checkValidation } from '@/utils';
import { db } from '@/firebase/app.js';
import { useAlertBox } from '@/components/AlertBox/@hook/useAlertBox.js';

// 이메일 중복 확인 로직
export function useConfirmEmail() {
  const [emailConfirm, setEmailConfirm] = useRecoilState(emailConfirmState);
  const signUpForm = useRecoilValue(signUpFormState);

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

      showAlertBox({
        alertText: alertPragment, 
        btnUiType: 'onlyConfirm', 
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
