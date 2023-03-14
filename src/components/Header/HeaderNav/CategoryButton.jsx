import { useState } from 'react';

import styles from './CategoryButton.module.css';

import { categoryData } from './categoryDate';

import Hamburger from '@/assets/icons/Icon/header-hamburger.svg';

function CategoryData({ href, title, img, alt }) {
  return (
    <li>
      <a href={href}>
        <img src={img} alt={alt} />
        {title}
      </a>
    </li>
  );
}

export const CategoryButton = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <li className={styles.headerNavProductList}>
      <button
        aria-label="카테고리 열기"
        className={styles.headerNavDropdown}
        type="button"
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        onFocus={() => setIsHover(true)}
        onBlur={() => setIsHover(false)}
      >
        <img
          aria-label="메뉴 아이콘"
          className={styles.headerNavHamburger}
          src={Hamburger}
        />
        카테고리
        <ul className={styles.NavSubMenu}>
          {categoryData.map(
            (categoryData) =>
              isHover && (
                <CategoryData
                  key={categoryData.id}
                  title={categoryData.title}
                  img={categoryData.imgSrc}
                />
              )
          )}
        </ul>
      </button>
    </li>
  );
};
