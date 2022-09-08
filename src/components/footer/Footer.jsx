import React, { useEffect } from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <footer data-aos="zoom-in">
      <a href="#" className='footer__logo' data-aos="zoom-in">英雄•Minato™</a>

      <ul className='permalinks' data-aos="zoom-in">
        <li><a href="#" data-aos="zoom-in">Home</a></li>
        <li><a href="#about" data-aos="zoom-in">About</a></li>
        <li><a href="#experience" data-aos="zoom-in">Experience</a></li>
        <li><a href="#services" data-aos="zoom-in">Services</a></li>
        <li><a href="#portfolio" data-aos="zoom-in">Portfolio</a></li>
        <li><a href="#contact" data-aos="zoom-in">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100004547087112" data-aos="zoom-in"><FaFacebookF /></a>
        <a href="https://www.instagram.com/invites/contact/?i=zoe2hcb6et64&utm_content=3dsi5qf" data-aos="zoom-in"><FaInstagram /></a>
        <a href="https://twitter.com/DulanjayaSanda2?t=mhB821gVSlgGbRCY5bKtGA&s=08" data-aos="zoom-in"><FaTwitter /></a>
      </div>

      <div className="footer__copyright" data-aos="zoom-in">
        <small data-aos="zoom-in">&copy; Dulanjaya Sandaruwan. All rights reserved.</small>
      </div>
      
    </footer>
  )
}

export default Footer
