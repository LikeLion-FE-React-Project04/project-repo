import styles from './Header.module.css';
import { writeBatchData } from '@/firebase/firestore/writeBatchData';
import { initialProductList } from '@/store/productListState';

import {
  Topbanner,
  Member,
  HeaderLogoContainer,
  SearchInput,
  HeaderIcon,
  HeaderNav,
} from './';

function Header() {
  const handleWriteBatchData = () => {
    writeBatchData(initialProductList, 'productlist', 'id');
  };

  return (
    <>
      {/* <button type="button" onClick={handleWriteBatchData}>
        일괄 데이터 쓰기
      </button> */}
      <Topbanner />
      <div className={styles.headerBorder}>
        <header className={styles.header}>
          <Member />
          <div className={styles.headerMain}>
            <HeaderLogoContainer />
            <div style={{ paddingRight: '100px' }}>
              <SearchInput />
            </div>
            <HeaderIcon />
          </div>
          <HeaderNav />
        </header>
      </div>
    </>
  );
}

export default Header;
