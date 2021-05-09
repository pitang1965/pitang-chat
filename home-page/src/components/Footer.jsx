import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='bg-purple-200 p-4'>
      <div className='pt-2 pb-2 flex flex-wrap text-center lg:flex-row-reverse lg:justify-between'>
        <ul className='w-full lg:w-auto'>
          <FooterIconLink
            href={'https://twitter.com/pitang1965'}
            icon={FaTwitter}
            label='Twitter'
          />
          <FooterIconLink
            href={'https://www.instagram.com/pitang1965/'}
            icon={FaInstagram}
            label='Instagram'
          />
        </ul>
        <div className='w-full lg:w-auto pt-6 lg:pt-0 text-blue-800 text-sm'>
          &copy; 2020 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const FooterIconLink = ({ href, label, icon: Icon }) => {
  const linkParams = { href };

  if (href.startsWith('http')) {
    linkParams.target = '_blank';
    linkParams.rel = 'noreferrer noopener';
  }

  return (
    <li className='inline-block px-2'>
      <a
        {...linkParams}
        className='inline-flex h-8 w-8 border border-blue-800 text-blue-800 rounded-full items-center justify-center transition-colors duration-200 hover:text-white hover:bg-blue-400 hover:border-blue-400'
      >
        <span className='sr-only'>{label}</span>
        <Icon className="w-3 h-3 fill-current" />
      </a>
    </li>
  );
};
