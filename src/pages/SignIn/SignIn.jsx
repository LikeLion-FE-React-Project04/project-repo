import { useRef } from 'react';

import PageTitle from './../../components/PageTitle/PageTitle';
import styles from './SignIn.module.scss';

import { FormInput, Button } from '@/components';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useSignIn } from '@/firebase/auth';

const initialFormState = {
  email: '',
  password: '',
};

function SignIn() {
  useDocumentTitle('로그인');

  // useRef - 1. DOM 요소 참조 / 2. 이전의 값을 기억 (컴포넌트 렌더링 영향 X)
  const formStateRef = useRef(initialFormState);

  const { signIn } = useSignIn();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formStateRef.current;

    await signIn(email, password);
  };

  const handleChangeInput = (e) => {
    console.log('handleChangeInput', e);
    const { name, value } = e.target;

    formStateRef.current[name] = value;
  };

  return (
    <div className={styles.signIn}>
      <PageTitle className={styles.pageTitle} text="로그인" />
      <form className={styles.form} onSubmit={handleSignIn}>
        <FormInput
          label="이메일"
          name="email"
          placeholder="아이디를 입력해주세요"
          type="email"
          onChange={handleChangeInput}
        />

        <FormInput
          label="패스워드"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          onChange={handleChangeInput}
        />

        <div className={styles.loginFind}>
          <a href="https://www.kurly.com/member/find/id">아이디 찾기</a>
          <a href="https://www.kurly.com/member/find/password">비밀번호 찾기</a>
        </div>


        <div className={styles.button}>
          <Button
            type='submit'
          >로그인</Button>


          <Button
            type='button'
            uiType='secondary'
          >회원가입</Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
