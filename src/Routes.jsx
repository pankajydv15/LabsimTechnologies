import React, { useEffect } from 'react';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

function Routes() {
  const location = useLocation(); // To track route changes

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Routes;
