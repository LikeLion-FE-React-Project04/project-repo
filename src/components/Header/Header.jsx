import styles from './Header.module.css';

import { Topbanner, Member, HeaderLogoContainer } from './';

function Header() {
  return (
    <>
      <Topbanner />
      <header className={styles.header}>
        <Member />
        <div className={styles.headerMain}>
          <HeaderLogoContainer />
        </div>
      </header>
    </>
  );
}

export default Header;
