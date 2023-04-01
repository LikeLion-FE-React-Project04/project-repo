import { NavLink, Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DarkFilter from '@/components/DarkFilter/DarkFilter';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

export default function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      <DarkFilter />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
