import styles from './HeaderLogoContainer.module.css';

import { HeaderContainerList, HeaderLogo, NewBadge } from './';

function HeaderContainer({ children }) {
  return <div className={styles.headerContainer}>{children}</div>;
}

function HeaderLogoContainer() {
  return (
    <>
      <h1 className={styles.a11yHidden}>마켓컬리</h1>
      <HeaderContainer>
        <HeaderLogo />
        <HeaderContainerList className={styles.market} text={'마켓칼리'} />
        <HeaderContainerList className={styles.beauty} text={'뷰티칼리'} />
        <NewBadge />
      </HeaderContainer>
    </>
  );
}
export default HeaderLogoContainer;
