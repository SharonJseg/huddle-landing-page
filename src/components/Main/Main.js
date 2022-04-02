import React from 'react';
import './Main.css';

import mainImage from '../../images/illustration-mockups.svg';

const Main = () => {
  return (
    <main className='main'>
      <img src={mainImage} alt='' className='illustration' />
      <div className='call-to-action'>
        <h1 className='call-to-action__title'>
          Build The Community Your Fans Will Love
        </h1>
        <p className='call-to-action__text'>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className='call-to-action__button'>Register</button>
      </div>
    </main>
  );
};

export default Main;
