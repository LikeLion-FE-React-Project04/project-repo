import {
  alertModalState,
  alertModalText,
  alertModalMoveState,
  alertModalUiType,
} from '@/components/AlertBox/@recoil/alertModalState.js';
import { darkFilterState } from '@/store/darkFilterState.js';
import { useCallback, useMemo } from 'react';
import { checkValidation } from '@/utils';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/app.js';
import { signUpFormState, emailConfirmState } from '../@recoil/signUp';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

export function useConfirmEmail() {
  const [emailConfirm, setEmailConfirm] = useRecoilState(emailConfirmState);
  const signUpForm = useRecoilValue(signUpFormState);

  // 경고창
  const setAlertModalState = useSetRecoilState(alertModalState);
  const setAlertModalText = useSetRecoilState(alertModalText);
  const setAlertModalMoveState = useSetRecoilState(alertModalMoveState);
  const setAlertModalUiType = useSetRecoilState(alertModalUiType);
  const setDarkFilterState = useSetRecoilState(darkFilterState);

  const confirmEmail = useCallback(
    async ({ email } = signUpForm) => {
      // 유효성 확인
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
      setAlertModalState(true);
      setDarkFilterState(true);
      setAlertModalText(alertPragment);
      setAlertModalMoveState({
        needToMove: false,
        moveUrl: '',
      });
      setAlertModalUiType('onlyConfirm');
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
