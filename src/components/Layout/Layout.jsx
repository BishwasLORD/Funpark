import React from 'react'

import Header from './../Header/Header';
import Routers from '../../router/Routers';
import Footer from './../Footer/Footer';
import Login from '../../pages/Login';

const Layout = () => {
  return <>
  <Header />
  <Routers />
  <Footer />
  {/* <Login /> */}
  </>
}

export default Layout