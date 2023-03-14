import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryButton.module.css';

import { categoryData } from './categoryDate';

import Hamburger from '@/assets/icons/Icon/header-hamburger.svg';

const CategoryData = ({ href, title, img, alt }) => {
  return (
    <li className={styles.test01}>
      <Link to={href}>
        <img src={img} alt={alt} />
        {title}
      </Link>
    </li>
  );
};

const CategoryButton = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <ul>
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
                    href={categoryData.href}
                  />
                )
            )}
          </ul>
        </button>
      </li>
    </ul>
  );
};

export default CategoryButton;
