import { useRef } from 'react';
import styles from './Topbanner.module.css';
import { TopbannerCloseButton, TopbannerText } from './';
import close from '@/assets/common/ic-close.svg';

function Topbanner() {
  const topBannerContainer = useRef(null);

  const bannerDisabled = () => {
    return (topBannerContainer.current.hidden = true);
  };

  return (
    <>
      <div ref={topBannerContainer} className={styles.topBanner}>
        <div className={styles.textContainer}>
          <TopbannerText />
          <TopbannerCloseButton
            type={'button'}
            className={styles.topBannerButton}
            img={close}
            alt={'닫기버튼'}
            handler={bannerDisabled}
          />
        </div>
      </div>
    </>
  );
}

export default Topbanner;
