import { useRecoilValue } from 'recoil';
import { checkValidation } from '../../../utils';
import { emailConfirmState, signUpFormState } from '../@recoil/signUp';
import { useMemo, useCallback, useState } from 'react';
import { addressState } from '@/store/addressState.js';

export function useSignUpValidation() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const signUpForm = useRecoilValue(signUpFormState);
  const address = useRecoilValue(addressState);
  const emailConfirm = useRecoilValue(emailConfirmState);

  const signUpValidation = useCallback(
    ({
      name,
      email,
      password,
      passwordConfirm,
      phoneNumber,
      birth,
    } = signUpForm) => {
      setIsLoading(true);
      try {
        let message = '';
        console.log('emailConfirm: ', emailConfirm);
        if (!emailConfirm) {
          message = '이메일 중복체크를 해주세요.';
        }
        if (!message) {
          message = checkValidation('password', password);
        }
        if (!message) {
          message = checkValidation('passwordConfirm', passwordConfirm);
        }
        if (!message) {
          message = checkValidation('name', name);
        }
        if (!message) {
          message = checkValidation('phoneNumber', phoneNumber);
        }
        if (!message) {
          message = checkValidation('address', address);
        }
        if (!message) {
          message = checkValidation('birth', birth);
        }
        setMessage(message);
        return message;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [emailConfirm, signUpForm, address]
  );
  return useMemo(
    () => ({
      isLoading,
      error,
      message,
      signUpValidation,
    }),
    [isLoading, error, message, signUpValidation]
  );
}
