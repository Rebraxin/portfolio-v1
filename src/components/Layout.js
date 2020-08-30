// == Import npm
import React from 'react';

// == Import local
import Header from '../components/Header';
import BackgroundLines from '../components/BackgroundLines';

const Layout = (props) => {
  return (
    <div className="mi-wrapper">
      <BackgroundLines />
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
