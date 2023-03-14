import styles from './HeaderNavMenu.module.css';

export const HeaderNavMenu = ({ className, href, text }) => {
  return (
    <li className={className}>
      <a href={href}>{text}</a>
    </li>
  );
};
const HeaderNavMenus = () => {
  return (
    <ul className={styles.headerNavMenuGroup}>
      <HeaderNavMenu
        className={styles.headerNavMenuItem}
        href={'/productList'}
        text={'신상품'}
      />
      <HeaderNavMenu
        className={styles.headerNavMenuItem}
        href={'/productList'}
        text={'베스트'}
      />
      <HeaderNavMenu
        className={styles.headerNavMenuItem}
        href={'/productList'}
        text={'알뜰쇼핑'}
      />
      <HeaderNavMenu
        className={styles.headerNavMenuItem}
        href={'/productList'}
        text={'특가/혜택'}
      />
    </ul>
  );
};

export default HeaderNavMenus;
