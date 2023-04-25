import { useEffect, useRef } from 'react';

import styles from './ProductDetailMenu.module.scss';

function ProductDetailMenu({ navigations, position }) {
  const naviRef = useRef([]);

  const naviArr = ['productInfo', 'detailInfo', 'review', 'inquiry'];

  useEffect(() => {
    if (position) {
      InitFocusing();
      naviRef.current[naviArr.indexOf(position)].classList.add(styles.Active);
    }
  }, [position]);

  function InitFocusing() {
    naviRef.current.forEach((ref) => {
      ref.classList.remove(styles.Active);
    });
  }

  const menuTabs = navigations.map((tab, index) => {
    return (
      <li key={index + 1}>
        <button
          ref={(el) => (naviRef.current[index] = el)}
          onClick={(e) => {
            tab.onMoveToElement();
          }}
        >
          {tab.name}
        </button>
      </li>
    );
  });

  return (
    <div className={styles.productDetailMenu}>
      <ul>{menuTabs}</ul>
    </div>
  );
}

export default ProductDetailMenu;
