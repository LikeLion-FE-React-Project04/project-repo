import PageTitle from './../../components/PageTitle/PageTitle';

import styles from './SignIn.module.scss';

import { FormInput } from '@/components';

function SignIn() {
  return (
    <div className={styles.signIn}>
      <PageTitle className={styles.pageTitle} text="로그인" />
      <form className={styles.form}>
        <FormInput
          label="이메일"
          name="email"
          placeholder="아이디를 입력해주세요"
          type="email"
        />

        <FormInput
          label="패스워드"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
        />
      </form>
    </div>
  );
}

export default SignIn;
