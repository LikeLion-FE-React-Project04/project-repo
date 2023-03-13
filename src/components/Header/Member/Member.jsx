import styles from './Member.module.css';

import { MemberList, MemberContainer } from './';

import headerDown from '@/assets/icons/Icon/header-down.svg';

function Member() {
  return (
    <>
      <MemberContainer>
        <MemberList
          className={styles.signUp}
          href={'./signUp'}
          text={'회원가입'}
        />
        <MemberList href={'./signIn'} text={'로그인'} />
        <MemberList href={'/'} text={'고객센터'} img={headerDown} />
      </MemberContainer>
    </>
  );
}

export default Member;
