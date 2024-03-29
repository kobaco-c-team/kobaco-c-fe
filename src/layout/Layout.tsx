// import Footer from '../components/common/Footer';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
