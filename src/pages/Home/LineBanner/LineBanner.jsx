import { Link } from 'react-router-dom';

import styles from './LineBanner.module.scss';

export function LineBanner() {
  return (
    <>
      <article className={styles.purpleWeekImg}>
        <Link to="/" aria-label="더 풍성해진 10월의 퍼플위크 (적립률UP+3종 쿠폰팩)"></Link>
      </article>
    </>
  );
}

export default LineBanner;