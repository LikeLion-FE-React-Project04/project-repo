import { Link } from 'react-router-dom';

import styles from './Linebanner.module.scss';

export function Linebanner() {
  return (
    <>
      <article className={styles.purpleWeekImg}>
        <Link to="/" aria-label="더 풍성해진 10월의 퍼플위크 (적립률UP+3종 쿠폰팩)"></Link>
      </article>
    </>
  );
}

export default Linebanner;