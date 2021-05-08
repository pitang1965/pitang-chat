import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div className='container mx-auto flex flex-col w-auto h-screen bg-gray-100'>
      <Header className='flex-shrink-0' />
      <div className='flex-grow'>{children}</div>
      <Footer className='flex-shrink-0' />
    </div>
  );
};
