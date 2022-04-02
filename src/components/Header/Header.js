import React from 'react';
import './Header.css';

import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='huddle logo' className='logo' />
    </header>
  );
};

export default Header;
