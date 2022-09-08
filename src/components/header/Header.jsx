import React, { useEffect } from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

const Header = () => {

  const bottom = () => {
    window.scrollTo(0 , 0);
  }

  // useEffect(() => {
  //   AOS.init({duration: 1000});
  // }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dulanjaya Sandaruwan</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />

        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down' onClick={bottom}>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
