import React from 'react';
import './Footer.css';
import Icon from '../../Icon/Icon';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__social-icon-list'>
        <li>
          <button className='footer__social-icon-list-item'>
            <Icon
              name='facebook'
              height='19'
              width='19'
              className='footer__social-icon'
            />
          </button>
        </li>
        <li>
          <button className='footer__social-icon-list-item'>
            <Icon
              name='twitter'
              height='19'
              width='19'
              className='footer__social-icon'
            />
          </button>
        </li>
        <li>
          <button className='footer__social-icon-list-item'>
            <Icon
              name='instagram'
              height='19'
              width='19'
              className='footer__social-icon'
            />
          </button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
