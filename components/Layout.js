import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className="bg-blue-50 dark:bg-gray-900 min-h-screen">
      <div className="container px-4 sm:w-3/4 md:w-3/6 mx-auto min-h-screen flex flex-col justify-between">
        <Header />
        {props.children}
        {/* <BottomLinks /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
