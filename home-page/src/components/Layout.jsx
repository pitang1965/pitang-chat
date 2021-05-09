import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div className='container flex flex-col flex-nowrap mx-auto w-auto h-screen bg-gray-100'>
      <Header />
      <div className='h-screen bg-primary'>{children}</div>
      <Footer />
    </div>
  );
};
