import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './LandingPage.css';

import bgImage from '../../images/bg-desktop.svg';
import bgImageMobile from '../../images/bg-mobile.svg';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <img src={bgImage} alt='background illustration' className='background' />
      <img
        src={bgImageMobile}
        alt='background illustration'
        className='background__mobile'
      />
    </>
  );
};

export default LandingPage;
