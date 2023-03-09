import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
