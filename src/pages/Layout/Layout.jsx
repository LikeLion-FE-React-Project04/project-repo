import { NavLink, Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DarkFilter from '@/components/DarkFilter/DarkFilter';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import TransparentFilter from '../../components/TransparentFilter/TransparentFilter';

export default function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      <TransparentFilter />
      <DarkFilter />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
