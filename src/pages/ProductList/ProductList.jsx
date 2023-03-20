import styles from './ProductList.module.css';
import arrowDown from '@/assets/product-list/ic-arrow-down.svg';
import arrowDown2 from '@/assets/product-list/ic-check-border.svg';
import arrowDown3 from '@/assets/product-list/ic-check-white.svg';
import { useRef, useEffect, useState } from 'react';

const ProductList = () => {
  const test1 = useRef(null);
  const [onOff, setOnOff] = useState(false);

  // const handleBtn = (e) => {
  //     e.preventDefault;
  //     if(test1.current)

  // }

  return (
    <div className={styles.container}>
      <div className={styles.productListTitle}>베스트</div>
      <section className={styles.product}>
        <div className={styles.productListNav}>
          <div className={styles.productListNavFilter}>
            <span className={styles.navFillterText}>필터</span>
            <button type="button" className={styles.navFilterButton}>
              초기화
            </button>
          </div>
          <div className={styles.productListNavMenu}>
            <div className={styles.navMenuCategory}>
              <button className={styles.navMenuBtn}>
                <span>카테고리</span>
                <img
                  src={arrowDown}
                  className={styles.navMenuCategorySvg}
                  alt="안녕하세요구루투"
                />
              </button>
              <ul ref={test1} className={styles.navMenuUl}>
                <li className={styles.navMenuUlList}>
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="check-box"
                    value="과일·견과·쌀"
                  />
                  <label htmlFor="check-box">과일·견과·쌀</label>
                  <span className={styles.ulListCount}>0</span>
                </li>
                <li className={styles.navMenuUlList}>
                  <input
                    type="checkbox"
                    id="check-box2"
                    name="checkbox"
                    value="간식·과자·떡"
                  />
                  <label htmlFor="check-box2">간식·과자·떡</label>
                  <span className={styles.ulListCount}>0</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
