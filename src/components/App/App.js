import './App.css';
import logo from '../../images/logo.svg';
import mainImage from '../../images/illustration-mockups.svg';
import bgImage from '../../images/bg-desktop.svg';
import bgImageMobile from '../../images/bg-mobile.svg';
import Icon from '../../Icon/Icon';

function App() {
  return (
    <div className='page'>
      <header className='header'>
        <img src={logo} alt='huddle logo' className='logo' />
      </header>
      <main className='main'>
        <img src={mainImage} alt='' className='illustration' />
        <div className='call-to-action'>
          <h1 className='call-to-action__title'>
            Build The Community Your Fans Will Love
          </h1>
          <p className='call-to-action__text'>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className='call-to-action__button'>Register</button>
        </div>
      </main>
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
      <img src={bgImage} alt='background illustration' className='background' />
      <img
        src={bgImageMobile}
        alt='background illustration'
        className='background__mobile'
      />
    </div>
  );
}

export default App;
