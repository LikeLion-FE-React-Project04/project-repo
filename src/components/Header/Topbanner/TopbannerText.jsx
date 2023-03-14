import { Link } from 'react-router-dom';

import styles from './TopbannerText.module.css';

function TopbannerText() {
  return (
    <Link to="/">
      지금 가입하고 인기상품 <span className={styles.boldText}>100</span>
      원에 받아가세요
    </Link>
  );
}

export default TopbannerText;
