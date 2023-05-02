import { NavLink, Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DarkFilter from '@/components/DarkFilter/DarkFilter';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import TransparentFilter from '../../components/TransparentFilter/TransparentFilter';
import AlertBoxLayout from '../../components/AlertBox/AlertBoxLayout.jsx';
import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <ScrollToTop />
      <AlertBoxLayout />
      <TransparentFilter />
      <DarkFilter />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
