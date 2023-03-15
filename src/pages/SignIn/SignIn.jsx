import { useRef, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import PageTitle from './../../components/PageTitle/PageTitle';
import styles from './SignIn.module.scss';

import { FormInput, Button } from '@/components';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useSignIn, useAuthState, useSignOut } from '@/firebase/auth';

const initialFormState = {
  email: '',
  password: '',
};

function SignIn() {
  useDocumentTitle('로그인');

  const movePage = useNavigate();
  const formStateRef = useRef(initialFormState);

  const { isLoading: isLoadingSignIn, signIn } = useSignIn();
  const { signOut } = useSignOut();
  const { isLoading, error, user } = useAuthState();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formStateRef.current;

    await signIn(email, password);
  };

  // user 사용자 변화(디펜던시)가 있을 때 movePage 실행
  useEffect(() => {
    if (user) {
      movePage('/');
    }
  }, [user]);

  const handleSignOut = async () => {
    signOut();
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    formStateRef.current[name] = value;
  };

  if (isLoading) {
    return <div>페이지를 준비 중입니다.</div>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

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
          <Link to="https://www.kurly.com/member/find/id">아이디 찾기</Link>
          <Link to="https://www.kurly.com/member/find/password">비밀번호 찾기</Link>
        </div>

        <div className={styles.button}>
          <Button disabled={isLoadingSignIn} type='submit'>
            {!isLoadingSignIn ? '로그인' : '로그인 중...'}
          </Button>

          <Link to='/SignUp'>
            <Button
              type='button'
              uiType='secondary'
            >회원가입</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
