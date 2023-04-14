import styles from '@/pages/SignUp/SignUp.module.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import { FormInput } from '@/components/FormInput/FormInput';
import Input from '@/pages/SignUp/Input/Input';
import { Button } from '../../components/Button/Button';
import { useAuthState } from '@/firebase/auth';
import { checkValidation } from '../../utils';
import SignUpAddress from './SignUpAddress/SignUpAddress';
import Agreement from './Agreement/Agreement';
import BirthInput from './BirthInput/BirthInput';
import {
  signUpFormState,
  formValidationState,
  emailConfirmState,
} from './@recoil/signUp';
import { useRecoilState } from 'recoil';

import { useSignUpValidation } from './@hook/useSignUpValidation';
import { useSignUpSubmit } from './@hook/useSignUpSubmit';
import { useConfirmEmail } from './@hook/useConfirmEmail';
import GenderInput from './genderInput/genderInput';

function SignUp() {
  const { isLoading, error, user } = useAuthState();
  const [formValidation, setFormValidation] =
    useRecoilState(formValidationState);
  const [signUpForm, setSignUpForm] = useRecoilState(signUpFormState);
  const [emailConfirm, setEmailConfirm] = useRecoilState(emailConfirmState);
  const { message, signUpValidation } = useSignUpValidation();
  const { signUpSubmit } = useSignUpSubmit();
  const { confirmEmail } = useConfirmEmail();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 회원가입 로직
    signUpSubmit();
  };

  // 폼 요소 입력 이벤트
  const handleChangeInput = (e) => {
    let { name, value } = e.target;

    if (name == 'passwordConfirm') {
      value = [value, value == signUpForm.password];
    }
    const pragment = checkValidation(name, value);

    // 폼데이터 저장
    setSignUpForm((prev) => {
      const tmp = { ...prev };
      tmp[name] = value;
      return tmp;
    });

    // 유효성 검사
    setFormValidation((prev) => {
      const tmp = { ...prev };
      tmp[name] = pragment;
      return tmp;
    });

    if (name == 'email') {
      setEmailConfirm(false);
    }
  };

  if (isLoading) {
    return <div role="alert">페이지를 준비 중입니다.</div>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  return (
    <div className={styles.SignUp}>
      <PageTitle className={styles.MarginTopBottom}>회원가입</PageTitle>
      <div className={styles.SignUpPage}>
        <span className={styles.MustInputText}>필수입력사항</span>
        <form className={styles.FormField} onSubmit={handleSubmit}>
          <Input text={'이메일'} must={true}>
            <div className={styles.inputLayout}>
              <FormInput
                placeholder={'예) marketkarly@karly.com'}
                type="text"
                name="email"
                onChange={handleChangeInput}
              />
              <span className={styles.validationPhrases}>
                {formValidation.email}
              </span>
            </div>
            <Button
              type="button"
              uiType={'third'}
              disabled={emailConfirm}
              onClick={async (e) => {

                // 이메일 중복 확인 로직
                confirmEmail();
              }}
            >
              중복 확인
            </Button>
          </Input>
          <Input text={'비밀번호'} must={true}>
            <div className={styles.inputLayout}>
              <FormInput
                placeholder={'비밀번호를 입력해주세요'}
                type="password"
                name="password"
                onChange={handleChangeInput}
              />
              <span className={styles.validationPhrases}>
                {formValidation.password}
              </span>
            </div>
          </Input>
          <Input text={'비밀번호 확인'} must={true}>
            <div className={styles.inputLayout}>
              <FormInput
                placeholder={'비밀번호를 한번 더 입력해주세요'}
                type="password"
                name="passwordConfirm"
                onChange={handleChangeInput}
              />
              <span className={styles.validationPhrases}>
                {formValidation.passwordConfirm}
              </span>
            </div>
          </Input>
          <Input text={'이름'} must={true}>
            <div className={styles.inputLayout}>
              <FormInput
                placeholder={'이름을 한번 더 입력해주세요'}
                name="name"
                type="text"
                onChange={handleChangeInput}
              />
              <span className={styles.validationPhrases}>
                {formValidation.name}
              </span>
            </div>
          </Input>
          <Input text={'휴대폰'} must={true}>
            <div className={styles.inputLayout}>
              <FormInput
                placeholder={'숫자만 입력해주세요.'}
                name="phoneNumber"
                type="text"
                onChange={handleChangeInput}
                maxLength={'11'}
              />
              <span className={styles.validationPhrases}>
                {formValidation.phoneNumber}
              </span>
            </div>
            {/* 구현되지 않았습니다. */}
            <Button uiType={'third'} disabled>
              인증번호 받기
            </Button>
          </Input>

          {/* 주소 */}
          <SignUpAddress />

          {/* 성별 */}
          <GenderInput />

          {/* 생년월일 */}
          <BirthInput />

          {/* 약관동의 */}
          <Agreement />

          <div className={styles.Button}>
            <Button uiType={'primary'} type="submit">
              가입하기
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
