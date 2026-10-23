import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const AppLayout = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else if (pathname === '/') {
      window.scrollTo({ top: 0 });
    }
  }, [hash, pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
