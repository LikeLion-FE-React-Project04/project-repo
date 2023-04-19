import { useRecoilValue, useRecoilState } from 'recoil';
import { useMemo, useCallback, useState } from 'react';

import { checkValidation } from '../../../utils';
import {
  emailConfirmState,
  formValidationState,
  signUpFormState,
} from '../@recoil/signUp';

import { addressState } from '@/store/addressState.js';

// 회원가입 유효성 검사
export function useSignUpValidation() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const address = useRecoilValue(addressState);

  const [formValidation, setFormValidation] =
    useRecoilState(formValidationState);
  const [signUpForm, setSignUpForm] = useRecoilState(signUpFormState);
  const [emailConfirm, setEmailConfirm] = useRecoilState(emailConfirmState);

  // 회원가입 버튼을 눌렀을때 작동하는 유효성 검사 로직
  const signUpValidation = useCallback(
    ({ name, password, passwordConfirm, phoneNumber, birth } = signUpForm) => {
      setIsLoading(true);
      try {
        // message = 경고 문구 : 유효성 검사에 문제가 있을 시 해당하는 경고 문구가 할당 됨
        //                       만약 문제가 없으면 return '' 를 받으며 다음 if문으로 넘어감
        let message = '';

        if (!emailConfirm) {
          message = '이메일 중복체크를 해주세요.';
        }
        if (!message) {
          message = checkValidation('password', password);
        }
        if (!message) {
          message = checkValidation('passwordConfirm', [
            passwordConfirm,
            password,
          ]);
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

        // 유효성이 통과되면 ''이 리턴됨
        return message;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [emailConfirm, signUpForm, address]
  );

  // 인풋 요소의 name 과 value로 유효성 체크하는 로직
  const InputValidation = (name, value) => {
    const pragment = checkValidation(name, value);

    // 유효성 검사
    setFormValidation((prev) => {
      const tmp = { ...prev };

      tmp[name] = pragment;

      return tmp;
    });
  };

  // 회원가입 인풋 요소 변경시 작동하는 유효성 검사 함수
  const handleChangeInput = (e) => {
    let { name, value } = e.target;

    // 폼데이터 저장
    setSignUpForm((prev) => {
      const tmp = { ...prev };

      tmp[name] = value;

      return tmp;
    });

    if (name == 'email') {
      setEmailConfirm(false);
    }

    if (name == 'password') {
      InputValidation('passwordConfirm', [signUpForm.passwordConfirm, value]);
    }

    if (name == 'passwordConfirm') {
      value = [value, signUpForm.password];
    }

    InputValidation(name, value);
  };

  return useMemo(
    () => ({
      isLoading,
      error,
      message,
      signUpValidation,
      handleChangeInput,
    }),
    [isLoading, error, message, signUpValidation, handleChangeInput]
  );
}
