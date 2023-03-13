import styles from './Header.module.css';

import {
  Topbanner,
  Member,
  HeaderLogoContainer,
  SearchInput,
  HeaderIcon,
} from './';

function Header() {
  return (
    <>
      <Topbanner />
      <header className={styles.header}>
        <Member />
        <div className={styles.headerMain}>
          <HeaderLogoContainer />
          <SearchInput />
          <HeaderIcon />
        </div>
      </header>
    </>
  );
}

export default Header;
