import styles from './Header.module.css';

import {
  Topbanner,
  Member,
  HeaderLogoContainer,
  SearchInput,
  HeaderIcon,
  HeaderNav,
} from './';

function Header() {
  return (
    <>
      <Topbanner />
      <div className={styles.headerBorder}>
        <header className={styles.header}>
          <Member />
          <div className={styles.headerMain}>
            <HeaderLogoContainer />
            <SearchInput />
            <HeaderIcon />
          </div>
          <HeaderNav />
        </header>
      </div>
    </>
  );
}

export default Header;
