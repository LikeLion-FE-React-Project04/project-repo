import styles from './Member.module.css';

import { MemberList, MemberContainer } from './';

import { useAuthState, useSignOut } from '@/firebase/auth';

const Member = () => {
  const { user } = useAuthState();

  const { signOut } = useSignOut();

  const handleSignOut = async () => {
    signOut();
  };

  console.log(user);

  if (user) {
    return (
      <MemberContainer>
        <MemberList text="회원가입" href="./signUp" className="styles.signUp" />
        <MemberList text="로그아웃" href="./" onClick={handleSignOut} />
        <MemberList text="고객센터" img="assets/header/ic-down.svg" href="./" />
      </MemberContainer>
    );
  }

  return (
    <MemberContainer>
      <MemberList text="회원가입" href="./signUp" className="styles.signUp" />
      <MemberList text="로그인" href="./signIn" />
      <MemberList text="고객센터" img="assets/header/ic-down.svg" href="./" />
    </MemberContainer>
  );
};

export default Member;
