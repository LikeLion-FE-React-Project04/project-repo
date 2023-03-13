import styles from './Header.module.css';

import { Topbanner, Member } from './';

function Header() {
  return (
    <>
      <Topbanner />
      <header className={styles.header}>
        <Member />
      </header>
    </>
  );
}

export default Header;
