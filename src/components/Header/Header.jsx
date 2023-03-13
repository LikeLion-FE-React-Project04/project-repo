import styles from './Header.module.css';

import { Topbanner, Member, HeaderLogoContainer, SearchInput } from './';

function Header() {
  return (
    <>
      <Topbanner />
      <header className={styles.header}>
        <Member />
        <div className={styles.headerMain}>
          <HeaderLogoContainer />
          <SearchInput />
        </div>
      </header>
    </>
  );
}

export default Header;
